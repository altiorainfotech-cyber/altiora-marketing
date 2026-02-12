import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimonial extends Document {
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating?: number;
  avatar: string;
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    role: {
      type: String,
      required: [true, 'Role is required'],
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    quote: {
      type: String,
      required: [true, 'Quote is required'],
      trim: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    avatar: {
      type: String,
      required: [true, 'Avatar URL is required'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    collection: 'testimonials',
  }
);

// Index for efficient querying
TestimonialSchema.index({ isActive: 1, order: 1 });

export default mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);
