import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// Configure R2 Client
const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  },
});

const BUCKET_NAME = process.env.R2_BUCKET_NAME || 'altiora-infotech';
const PUBLIC_URL = process.env.R2_PUBLIC_URL || `https://pub-${process.env.R2_ACCOUNT_ID}.r2.dev`;

export interface R2UploadResult {
  public_id: string;
  secure_url: string;
  format: string;
  resource_type: string;
  key: string;
}

export interface R2UploadOptions {
  folder: string;
  fileName?: string;
  contentType?: string;
  metadata?: Record<string, string>;
}

/**
 * Upload file to Cloudflare R2
 */
export const uploadToR2 = async (
  file: File | Buffer | string,
  options: R2UploadOptions
): Promise<R2UploadResult> => {
  try {
    let buffer: Buffer;
    let contentType: string;
    let fileName: string;

    // Process different file types
    if (file instanceof File) {
      const arrayBuffer = await file.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
      contentType = file.type;
      fileName = options.fileName || file.name;
    } else if (Buffer.isBuffer(file)) {
      buffer = file;
      contentType = options.contentType || 'video/mp4';
      fileName = options.fileName || `video-${Date.now()}.mp4`;
    } else {
      // Handle base64 string
      const base64Data = file.replace(/^data:video\/\w+;base64,/, '');
      buffer = Buffer.from(base64Data, 'base64');
      contentType = options.contentType || 'video/mp4';
      fileName = options.fileName || `video-${Date.now()}.mp4`;
    }

    // Generate unique key with folder structure
    const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    const key = `${options.folder}/${sanitizedFileName}`;

    // Upload to R2
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      Metadata: {
        uploadedAt: new Date().toISOString(),
        ...options.metadata,
      },
    });

    await r2Client.send(command);

    // Generate public URL
    const secure_url = `${PUBLIC_URL}/${key}`;

    return {
      public_id: key,
      secure_url,
      format: contentType.split('/')[1] || 'mp4',
      resource_type: 'video',
      key,
    };
  } catch (error) {
    console.error('R2 upload error:', error);
    throw new Error('Failed to upload video to R2');
  }
};

/**
 * Delete file from R2
 */
export const deleteFromR2 = async (key: string): Promise<void> => {
  try {
    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });

    await r2Client.send(command);
  } catch (error) {
    console.error('R2 delete error:', error);
    throw new Error('Failed to delete file from R2');
  }
};

export default r2Client;
