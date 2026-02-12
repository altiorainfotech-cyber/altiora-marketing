import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables
dotenv.config({ path: resolve(__dirname, '../.env.local') });

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Testimonial Schema
const TestimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String },
    quote: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 },
    avatar: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true, collection: 'testimonials' }
);

const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);

// Testimonials data
const testimonials = [
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthCorp",
    rating: 5,
    quote:
      "Working with Altiora has been a game-changer for our business. Their PPC campaigns generated a 400% ROI, and their strategic guidance helped us scale efficiently. Highly recommended!",
    avatar: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/1_sfyyyf.webp",
    isActive: true,
    order: 1,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "InnovateNow",
    rating: 5,
    quote:
      "The team at Altiora doesn't just deliver results—they become true partners in your success. Their personalized approach and expertise helped us achieve goals we never thought possible.",
    avatar: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/4_zrqouc.webp",
    isActive: true,
    order: 2,
  },
  {
    name: "Elena",
    role: "Retail Brand Owner",
    rating: 5,
    quote:
      "As a leading Software Development Company, Altiora helped us seamlessly scale our e-commerce platform with a stunning UI, a powerful backend, and a truly collaborative approach.",
    avatar: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/2_wo0iif.webp",
    isActive: true,
    order: 3,
  },
  {
    name: "Sofia",
    role: "Business Head",
    rating: 5,
    quote:
      "Altiora helped us seamlessly scale our e-commerce platform with a stunning UI, a powerful backend, and a truly collaborative approach.",
    avatar: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/3_jo3x43.webp",
    isActive: true,
    order: 4,
  },
];

async function seedTestimonials() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing testimonials
    console.log('Clearing existing testimonials...');
    await Testimonial.deleteMany({});

    // Insert new testimonials
    console.log('Inserting testimonials...');
    const result = await Testimonial.insertMany(testimonials);
    console.log(`✅ Successfully inserted ${result.length} testimonials`);

    console.log('\nTestimonials seeded:');
    result.forEach((testimonial, index) => {
      console.log(`${index + 1}. ${testimonial.name} - ${testimonial.role}`);
    });

  } catch (error) {
    console.error('Error seeding testimonials:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
  }
}

seedTestimonials();
