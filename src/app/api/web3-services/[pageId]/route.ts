import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import connectDB from '@/lib/mongodb';
import Web3Service from '@/models/Web3Service';

// Force dynamic rendering - disable caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const MONGODB_URI = process.env.MONGODB_URI!;
// Prefer explicit env DB name, otherwise default to 'test' to match current data location.
const DB_NAME = process.env.MONGODB_DB || 'test';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ pageId: string }> }
) {
  try {
    const { pageId: id } = await params;

    // First try MongoClient approach (queries by pageId field)
    const client = new MongoClient(MONGODB_URI);
    await client.connect();

    const db = client.db(DB_NAME);
    const collection = db.collection('web3Services');

    // Find the page by pageId (try exact match first, then with -services suffix)
    let page = await collection.findOne({
      pageId: id
    });

    // If not found, try with -services suffix
    if (!page) {
      page = await collection.findOne({
        pageId: `${id}-services`
      });
    }

    // If still not found, try removing -services suffix
    if (!page && id.endsWith('-services')) {
      page = await collection.findOne({
        pageId: id.replace('-services', '')
      });
    }

    await client.close();

    // If not found by pageId, try Mongoose approach (queries by serviceType field)
    if (!page) {
      await connectDB();
      const service = await Web3Service.findOne({ serviceType: id });

      if (service) {
        return NextResponse.json({ success: true, data: service }, {
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          }
        });
      }
    }

    if (!page) {
      return NextResponse.json(
        { error: 'Page not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(page, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    });
  } catch (error) {
    console.error('Error fetching web3 service page:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT update specific web3 service
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ pageId: string }> }
) {
  try {
    await connectDB();
    const body = await request.json();
    const { pageId: serviceType } = await params;

    const service = await Web3Service.findOneAndUpdate(
      { serviceType },
      body,
      { new: true, upsert: true }
    );

    return NextResponse.json({ success: true, data: service });
  } catch (error) {
    console.error('Error updating web3 service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

// DELETE specific web3 service
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ pageId: string }> }
) {
  try {
    await connectDB();
    const { pageId: serviceType } = await params;
    const service = await Web3Service.findOneAndDelete({ serviceType });

    if (!service) {
      return NextResponse.json(
        { success: false, error: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting web3 service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
