export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  experience: string;
  specializations: string[];
}

export interface CurriculumModule {
  title: string;
  duration: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  date: string;
  status: 'upcoming' | 'completed' | 'ongoing';
  duration: string;
  category: string;
  price: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  language: string;
  certificate: boolean;
  maxParticipants: number;
  enrolledCount: number;
  instructor: Instructor;
  curriculum: CurriculumModule[];
  requirements: string[];
  whatYouLearn: string[];
  targetAudience: string[];
}

export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Ahmed Al Mansouri',
    title: 'Senior Real Estate Consultant & Lead Instructor',
    bio: 'With over 18 years of experience in Dubai\'s real estate market, Ahmed has facilitated transactions worth over AED 2 billion and trained hundreds of successful agents.',
    experience: '18 years',
    specializations: ['Luxury Properties', 'Off-Plan Sales', 'Investment Analysis']
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    title: 'RERA Compliance Specialist',
    bio: 'Former RERA compliance officer with deep expertise in UAE property laws and regulations. Sarah has helped numerous agencies maintain regulatory compliance.',
    experience: '12 years',
    specializations: ['RERA Regulations', 'Legal Compliance', 'Contract Law']
  },
  {
    id: '3',
    name: 'Mohammad Hassan',
    title: 'Property Valuation Expert',
    bio: 'Certified property valuator with extensive experience in residential and commercial valuations across the UAE. Mohammad brings practical insights from thousands of assessments.',
    experience: '15 years',
    specializations: ['Property Valuation', 'Market Analysis', 'Investment ROI']
  }
];

import courseFundamentals from '@/assets/course-fundamentals.jpg';
import courseRera from '@/assets/course-rera.jpg';
import courseValuation from '@/assets/course-valuation.jpg';
import courseInvestment from '@/assets/course-investment.jpg';
import courseNegotiation from '@/assets/course-negotiation.jpg';
import courseOffplan from '@/assets/course-offplan.jpg';

export const courses: Course[] = [
  {
    id: '1',
    slug: 'dubai-real-estate-fundamentals',
    title: 'Dubai Real Estate Fundamentals',
    description: 'Comprehensive training on Dubai property laws, regulations, and market dynamics for aspiring real estate professionals.',
    fullDescription: 'This foundational program provides a comprehensive understanding of Dubai\'s real estate ecosystem. From legal frameworks to market dynamics, participants gain the essential knowledge required to begin a successful career in UAE real estate. The course combines theoretical learning with practical case studies from actual Dubai transactions.',
    image: courseFundamentals,
    date: '2025-01-15',
    status: 'upcoming',
    duration: '4 weeks',
    category: 'Certification',
    price: 'AED 4,500',
    level: 'Beginner',
    language: 'English',
    certificate: true,
    maxParticipants: 25,
    enrolledCount: 18,
    instructor: instructors[0],
    curriculum: [
      {
        title: 'Introduction to Dubai Real Estate',
        duration: '1 week',
        topics: ['Dubai property market overview', 'Key stakeholders and agencies', 'Freehold vs leasehold areas', 'Market trends and opportunities']
      },
      {
        title: 'Legal Framework & Regulations',
        duration: '1 week',
        topics: ['RERA overview and requirements', 'Dubai Land Department procedures', 'Property registration process', 'Contract types and documentation']
      },
      {
        title: 'Property Types & Transactions',
        duration: '1 week',
        topics: ['Residential property categories', 'Commercial real estate basics', 'Off-plan vs ready properties', 'Transaction lifecycle']
      },
      {
        title: 'Professional Practice',
        duration: '1 week',
        topics: ['Client relationship management', 'Ethical standards', 'Marketing fundamentals', 'Career development paths']
      }
    ],
    requirements: ['No prior experience required', 'Valid UAE residency or work permit', 'Basic English proficiency', 'Commitment to complete all modules'],
    whatYouLearn: ['Understand Dubai\'s real estate market structure', 'Navigate RERA regulations confidently', 'Identify property investment opportunities', 'Conduct basic property transactions', 'Build professional client relationships'],
    targetAudience: ['Aspiring real estate agents', 'Career changers entering real estate', 'Property investors seeking knowledge', 'Administrative staff in real estate firms']
  },
  {
    id: '2',
    slug: 'rera-compliance-regulations',
    title: 'RERA Compliance & Regulations',
    description: 'In-depth workshop covering Real Estate Regulatory Agency requirements and compliance standards in the UAE.',
    fullDescription: 'This intensive workshop provides comprehensive coverage of RERA regulations and compliance requirements. Led by a former RERA compliance officer, participants gain insider knowledge on maintaining regulatory standards and avoiding common compliance pitfalls.',
    image: courseRera,
    date: '2025-01-20',
    status: 'upcoming',
    duration: '2 weeks',
    category: 'Workshop',
    price: 'AED 2,800',
    level: 'Intermediate',
    language: 'English',
    certificate: true,
    maxParticipants: 20,
    enrolledCount: 14,
    instructor: instructors[1],
    curriculum: [
      {
        title: 'RERA Framework Deep Dive',
        duration: '4 days',
        topics: ['RERA organizational structure', 'Registration requirements', 'Broker card procedures', 'Licensing categories']
      },
      {
        title: 'Compliance & Documentation',
        duration: '4 days',
        topics: ['Transaction documentation', 'Escrow account regulations', 'Trust account management', 'Audit preparation']
      },
      {
        title: 'Dispute Resolution & Updates',
        duration: '2 days',
        topics: ['Dispute resolution mechanisms', 'Recent regulatory changes', 'Best practices for compliance', 'Case study analysis']
      }
    ],
    requirements: ['Active real estate license preferred', 'Minimum 6 months industry experience', 'Understanding of basic real estate concepts'],
    whatYouLearn: ['Master RERA compliance requirements', 'Prepare proper transaction documentation', 'Manage escrow and trust accounts', 'Handle regulatory audits confidently', 'Resolve disputes professionally'],
    targetAudience: ['Licensed real estate agents', 'Brokerage compliance officers', 'Agency managers', 'Real estate legal advisors']
  },
  {
    id: '3',
    slug: 'property-valuation-masterclass',
    title: 'Property Valuation Masterclass',
    description: 'Professional certification program on property valuation methodologies and market analysis techniques.',
    fullDescription: 'This advanced masterclass equips participants with professional property valuation skills. Learn industry-standard methodologies, market analysis techniques, and reporting standards used by leading valuation firms in the UAE.',
    image: courseValuation,
    date: '2024-12-10',
    status: 'completed',
    duration: '3 weeks',
    category: 'Masterclass',
    price: 'AED 5,200',
    level: 'Advanced',
    language: 'English',
    certificate: true,
    maxParticipants: 15,
    enrolledCount: 15,
    instructor: instructors[2],
    curriculum: [
      {
        title: 'Valuation Fundamentals',
        duration: '1 week',
        topics: ['Valuation principles', 'Market value concepts', 'Highest and best use analysis', 'Data collection methods']
      },
      {
        title: 'Valuation Methodologies',
        duration: '1 week',
        topics: ['Sales comparison approach', 'Income capitalization method', 'Cost approach', 'Reconciliation techniques']
      },
      {
        title: 'Reporting & Professional Practice',
        duration: '1 week',
        topics: ['Valuation report standards', 'RICS guidelines overview', 'Professional ethics', 'Expert witness preparation']
      }
    ],
    requirements: ['Minimum 2 years real estate experience', 'Understanding of financial concepts', 'Proficiency in spreadsheet analysis'],
    whatYouLearn: ['Apply professional valuation methodologies', 'Conduct comprehensive market analysis', 'Prepare industry-standard valuation reports', 'Understand RICS international standards', 'Provide expert property opinions'],
    targetAudience: ['Experienced real estate professionals', 'Aspiring property valuators', 'Investment analysts', 'Bank lending officers']
  },
  {
    id: '4',
    slug: 'investment-analysis-real-estate',
    title: 'Investment Analysis for Real Estate',
    description: 'Advanced training on ROI calculations, market forecasting, and investment portfolio management.',
    fullDescription: 'This comprehensive program develops advanced skills in real estate investment analysis. Participants learn to evaluate investment opportunities, calculate returns, and build diversified property portfolios aligned with client objectives.',
    image: courseInvestment,
    date: '2025-02-01',
    status: 'upcoming',
    duration: '5 weeks',
    category: 'Certification',
    price: 'AED 6,500',
    level: 'Advanced',
    language: 'English',
    certificate: true,
    maxParticipants: 20,
    enrolledCount: 8,
    instructor: instructors[0],
    curriculum: [
      {
        title: 'Investment Fundamentals',
        duration: '1 week',
        topics: ['Real estate as an asset class', 'Risk and return concepts', 'Investment objectives', 'Market cycle analysis']
      },
      {
        title: 'Financial Analysis',
        duration: '1.5 weeks',
        topics: ['Cash flow modeling', 'ROI and IRR calculations', 'Cap rate analysis', 'Leverage and financing']
      },
      {
        title: 'Market Research & Due Diligence',
        duration: '1 week',
        topics: ['Market research methodologies', 'Comparable analysis', 'Due diligence procedures', 'Risk assessment']
      },
      {
        title: 'Portfolio Management',
        duration: '1.5 weeks',
        topics: ['Portfolio diversification', 'Asset allocation strategies', 'Performance monitoring', 'Exit strategies']
      }
    ],
    requirements: ['Strong financial literacy', 'Minimum 1 year real estate experience', 'Proficiency in Excel/spreadsheets'],
    whatYouLearn: ['Evaluate real estate investments professionally', 'Build comprehensive financial models', 'Conduct thorough due diligence', 'Advise clients on investment strategies', 'Manage property portfolios effectively'],
    targetAudience: ['Investment advisors', 'Wealth managers', 'Senior real estate agents', 'Property developers', 'High-net-worth investors']
  },
  {
    id: '5',
    slug: 'client-relations-negotiation',
    title: 'Client Relations & Negotiation',
    description: 'Professional development workshop focusing on client management and negotiation strategies.',
    fullDescription: 'This intensive workshop enhances professional skills in client relationship management and negotiation. Participants learn proven techniques for building lasting client relationships and achieving successful outcomes in property transactions.',
    image: courseNegotiation,
    date: '2024-11-25',
    status: 'completed',
    duration: '1 week',
    category: 'Workshop',
    price: 'AED 1,800',
    level: 'Intermediate',
    language: 'English',
    certificate: true,
    maxParticipants: 30,
    enrolledCount: 28,
    instructor: instructors[0],
    curriculum: [
      {
        title: 'Client Relationship Excellence',
        duration: '2.5 days',
        topics: ['Understanding client needs', 'Communication strategies', 'Trust building techniques', 'Long-term relationship management']
      },
      {
        title: 'Negotiation Mastery',
        duration: '2.5 days',
        topics: ['Negotiation principles', 'Win-win strategies', 'Handling objections', 'Closing techniques']
      }
    ],
    requirements: ['Active in client-facing role', 'Basic sales experience helpful'],
    whatYouLearn: ['Build strong client relationships', 'Communicate effectively across cultures', 'Navigate complex negotiations', 'Handle difficult situations professionally', 'Increase conversion rates'],
    targetAudience: ['Real estate agents', 'Sales professionals', 'Account managers', 'Customer service staff']
  },
  {
    id: '6',
    slug: 'off-plan-sales-certification',
    title: 'Off-Plan Sales Certification',
    description: 'Specialized training on off-plan property sales, developer partnerships, and project launches.',
    fullDescription: 'This specialized certification focuses on the unique aspects of off-plan property sales in Dubai. Learn to work with developers, understand project launches, and effectively market properties before completion.',
    image: courseOffplan,
    date: '2025-01-08',
    status: 'ongoing',
    duration: '3 weeks',
    category: 'Certification',
    price: 'AED 4,000',
    level: 'Intermediate',
    language: 'English',
    certificate: true,
    maxParticipants: 22,
    enrolledCount: 19,
    instructor: instructors[0],
    curriculum: [
      {
        title: 'Off-Plan Market Dynamics',
        duration: '1 week',
        topics: ['Dubai off-plan landscape', 'Developer ecosystem', 'Project lifecycle', 'Market positioning']
      },
      {
        title: 'Sales & Marketing',
        duration: '1 week',
        topics: ['Project launch strategies', 'Buyer qualification', 'Payment plan structures', 'Marketing off-plan properties']
      },
      {
        title: 'Legal & Practical Aspects',
        duration: '1 week',
        topics: ['Off-plan regulations', 'Escrow requirements', 'SPA documentation', 'Handover procedures']
      }
    ],
    requirements: ['Real estate license required', 'Understanding of Dubai property market'],
    whatYouLearn: ['Navigate the off-plan sales process', 'Build developer relationships', 'Structure attractive payment plans', 'Manage buyer expectations', 'Ensure regulatory compliance'],
    targetAudience: ['Licensed real estate agents', 'Developer sales teams', 'Agency off-plan specialists', 'Project marketing professionals']
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

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(course => course.slug === slug);
};
