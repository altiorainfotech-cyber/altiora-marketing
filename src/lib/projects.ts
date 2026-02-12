import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';

export interface ProjectData {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  status: string;
  year: string;
  order: number;
  isActive: boolean;
}

export async function getProjects(): Promise<ProjectData[]> {
  try {
    await connectDB();
    
    const projects = await Project.find({ isActive: true })
      .sort({ order: 1 })
      .lean();
    
    return projects.map(project => ({
      _id: (project._id as any).toString(),
      title: project.title,
      category: project.category,
      description: project.description,
      image: project.image,
      tags: project.tags || [],
      link: project.link,
      status: project.status || 'Live',
      year: project.year,
      order: project.order,
      isActive: project.isActive
    }));
  } catch (error) {
    console.error('❌ Error fetching projects:', error);
    return [];
  }
}
