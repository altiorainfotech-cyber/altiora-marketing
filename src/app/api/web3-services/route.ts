import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Web3Service from '@/models/Web3Service';

// GET all web3 services
export async function GET() {
  try {
    await connectDB();
    const services = await Web3Service.find({});
    return NextResponse.json({ success: true, data: services });
  } catch (error) {
    console.error('Error fetching web3 services:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

// POST create new web3 service
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const service = await Web3Service.create(body);
    return NextResponse.json({ success: true, data: service }, { status: 201 });
  } catch (error) {
    console.error('Error creating web3 service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create service' },
      { status: 500 }
    );
  }
}