export interface Course {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'upcoming' | 'completed' | 'ongoing';
  duration: string;
  category: string;
}

export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Dubai Real Estate Fundamentals',
    description: 'Comprehensive training on Dubai property laws, regulations, and market dynamics for aspiring real estate professionals.',
    date: '2025-01-15',
    status: 'upcoming',
    duration: '4 weeks',
    category: 'Certification'
  },
  {
    id: '2',
    title: 'RERA Compliance & Regulations',
    description: 'In-depth workshop covering Real Estate Regulatory Agency requirements and compliance standards in the UAE.',
    date: '2025-01-20',
    status: 'upcoming',
    duration: '2 weeks',
    category: 'Workshop'
  },
  {
    id: '3',
    title: 'Property Valuation Masterclass',
    description: 'Professional certification program on property valuation methodologies and market analysis techniques.',
    date: '2024-12-10',
    status: 'completed',
    duration: '3 weeks',
    category: 'Masterclass'
  },
  {
    id: '4',
    title: 'Investment Analysis for Real Estate',
    description: 'Advanced training on ROI calculations, market forecasting, and investment portfolio management.',
    date: '2025-02-01',
    status: 'upcoming',
    duration: '5 weeks',
    category: 'Certification'
  },
  {
    id: '5',
    title: 'Client Relations & Negotiation',
    description: 'Professional development workshop focusing on client management and negotiation strategies.',
    date: '2024-11-25',
    status: 'completed',
    duration: '1 week',
    category: 'Workshop'
  },
  {
    id: '6',
    title: 'Off-Plan Sales Certification',
    description: 'Specialized training on off-plan property sales, developer partnerships, and project launches.',
    date: '2025-01-08',
    status: 'ongoing',
    duration: '3 weeks',
    category: 'Certification'
  }
];

export const insights: Insight[] = [
  {
    id: '1',
    title: 'Understanding Dubai Land Department Regulations 2025',
    excerpt: 'A comprehensive overview of the latest regulatory updates from Dubai Land Department and their implications for real estate professionals.',
    date: '2024-12-20',
    category: 'Regulatory',
    slug: 'dld-regulations-2025'
  },
  {
    id: '2',
    title: 'Market Analysis: Dubai Real Estate Q4 2024',
    excerpt: 'Quarterly market insights covering transaction volumes, pricing trends, and emerging opportunities in the Dubai property market.',
    date: '2024-12-15',
    category: 'Market Update',
    slug: 'market-analysis-q4-2024'
  },
  {
    id: '3',
    title: 'Professional Ethics in Real Estate Practice',
    excerpt: 'Essential guidelines on maintaining professional standards and ethical practices in UAE real estate transactions.',
    date: '2024-12-10',
    category: 'Professional Development',
    slug: 'professional-ethics-real-estate'
  }
];

export const academyStats = {
  yearsExperience: 15,
  graduatesCount: 2500,
  coursesOffered: 45,
  industryPartners: 30
};
