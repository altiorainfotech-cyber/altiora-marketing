import mongoose, { Document, Schema } from 'mongoose';

export interface IContactFile {
  originalName: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  r2Url: string;
  uploadedAt: Date;
}

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  country?: string;
  phoneCode?: string;
  phoneNumber: string;
  services: string[];
  budget?: string;
  timeline?: string;
  message?: string;
  attachments?: IContactFile[];
  autoReplySent?: boolean;
  autoReplySentAt?: Date;
  adminNotificationSent?: boolean;
  adminNotificationSentAt?: Date;
  submittedAt?: Date;
  clientIP?: string;
  userAgent?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  country: {
    type: String,
    trim: true
  },
  phoneCode: {
    type: String,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    validate: {
      validator: function (v: string) {
        // Validate that phone number contains only digits and is correct length
        return /^\d{10,15}$/.test(v);
      },
      message: 'Phone number must contain only digits and be between 10 and 15 characters long'
    }
  },
  services: {
    type: [String],
    required: [true, 'At least one service must be selected'],
    validate: {
      validator: function (v: string[]) {
        return v && v.length > 0;
      },
      message: 'At least one service must be selected'
    },
    enum: [
      'web3-development',
      'web3-marketing',
      'web2-development',
      'digital-marketing',
      'nft-marketplace',
      'smart-contract-audit',
      'web3-community',
      'ui-ux-design',
      'ai-development',
      'ai-chatbot',
      'ai-integration',
      'predictive-analytics',
      'ai-automation',
      'quick-enquiry'
    ]
  },
  budget: {
    type: String,
    trim: true,
    enum: ['under-10k', '10k-50k', '50k-200k', '200k-plus']
  },
  timeline: {
    type: String,
    trim: true,
    enum: ['1-4-weeks', '1-3-months', '3-6-months', '6-plus-months']
  },
  message: {
    type: String,
    trim: true,
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  attachments: [{
    originalName: {
      type: String,
      required: true,
      trim: true,
      maxlength: [255, 'File name cannot exceed 255 characters']
    },
    fileName: {
      type: String,
      required: true,
      trim: true
    },
    fileSize: {
      type: Number,
      required: true,
      min: [1, 'File size must be greater than 0'],
      max: [52428800, 'File size cannot exceed 50MB'] // 50MB in bytes
    },
    mimeType: {
      type: String,
      required: true,
      trim: true
    },
    r2Url: {
      type: String,
      required: true,
      trim: true
    },
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  autoReplySent: {
    type: Boolean,
    default: false
  },
  autoReplySentAt: {
    type: Date
  },
  adminNotificationSent: {
    type: Boolean,
    default: false
  },
  adminNotificationSentAt: {
    type: Date
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  clientIP: {
    type: String,
    trim: true
  },
  userAgent: {
    type: String,
    trim: true,
    maxlength: [500, 'User agent cannot exceed 500 characters']
  }
}, {
  timestamps: true,
  collection: 'contactmessages'
});

// Create indexes for better query performance
ContactSchema.index({ email: 1 });
ContactSchema.index({ createdAt: -1 });

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);