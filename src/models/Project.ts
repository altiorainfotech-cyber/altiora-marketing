import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, 
    required: true 
  },
  tags: [{ 
    type: String 
  }],
  link: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    default: 'Live',
    enum: ['Live', 'In Development', 'Completed']
  },
  year: { 
    type: String, 
    required: true 
  },
  order: { 
    type: Number, 
    default: 0 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  }
}, {
  timestamps: true
});

// Create index for ordering
ProjectSchema.index({ order: 1 });
ProjectSchema.index({ category: 1 });
ProjectSchema.index({ isActive: 1 });

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
