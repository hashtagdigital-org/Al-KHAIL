export interface Agent {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  linkedin: string;
  whatsapp: string;
  email: string;
  experience: string;
  properties: string;
  rating: string;
  bio: string;
  languages: string[];
  awards: {
    year: string;
    title: string;
    description: string;
  }[];
  certifications: string[];
  expertise: string[];
  projects: {
    id: string;
    title: string;
    type: string;
    location: string;
    status: string;
    price: string;
    image: string;
    year: string;
  }[];
}

export const agents: Agent[] = [
  {
    id: "hadi-dehghan",
    name: "Hadi Dehghan",
    role: "CEO",
    specialty: "Luxury Property Investment & Multilingual Service",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    linkedin: "#",
    whatsapp: "+971501234567",
    email: "hadi@alkhail.com",
    experience: "18+ Years",
    properties: "500+",
    rating: "4.9",
    bio: "With over 18 years of experience in Dubai's luxury real estate market, Hadi has established himself as a trusted advisor for high-net-worth individuals seeking premium properties. His multilingual capabilities and deep market knowledge have helped countless clients find their dream homes and investment opportunities.",
    languages: ["English", "Arabic", "Persian", "French"],
    awards: [
      {
        year: "2023",
        title: "Dubai Real Estate Excellence Award",
        description: "Recognized for outstanding contribution to luxury property market"
      },
      {
        year: "2022",
        title: "Top CEO of the Year",
        description: "Leading innovation in real estate services"
      },
      {
        year: "2021",
        title: "Best Luxury Property Consultant",
        description: "Excellence in high-value property transactions"
      }
    ],
    certifications: [
      "RERA Certified Agent",
      "Luxury Property Specialist",
      "Investment Advisory Certification",
      "International Real Estate Professional"
    ],
    expertise: ["Luxury Villas", "Penthouses", "Investment Properties", "Off-Plan Properties"],
    projects: [
      {
        id: "1",
        title: "Palm Jumeirah Villa",
        type: "Villa",
        location: "Palm Jumeirah",
        status: "Sold",
        price: "AED 45M",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
        year: "2023"
      },
      {
        id: "2",
        title: "Downtown Penthouse",
        type: "Penthouse",
        location: "Downtown Dubai",
        status: "Sold",
        price: "AED 28M",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        year: "2023"
      },
      {
        id: "3",
        title: "Emirates Hills Mansion",
        type: "Villa",
        location: "Emirates Hills",
        status: "Active",
        price: "AED 62M",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        year: "2024"
      },
      {
        id: "4",
        title: "Burj Khalifa Residence",
        type: "Apartment",
        location: "Downtown Dubai",
        status: "Sold",
        price: "AED 18M",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        year: "2022"
      }
    ]
  },
  {
    id: "nasser-dehghan",
    name: "Nasser Dehghan",
    role: "Managing Director",
    specialty: "Strategic Sales & Leasing Expert",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    linkedin: "#",
    whatsapp: "+971501234568",
    email: "nasser@alkhail.com",
    experience: "15+ Years",
    properties: "450+",
    rating: "4.8",
    bio: "Nasser brings strategic expertise to complex property transactions. His analytical approach and market insights have helped shape successful investment strategies for numerous clients across residential and commercial sectors.",
    languages: ["English", "Arabic", "Persian"],
    awards: [
      {
        year: "2023",
        title: "Strategic Sales Leader Award",
        description: "Excellence in commercial property transactions"
      },
      {
        year: "2022",
        title: "Client Satisfaction Award",
        description: "Highest rated agent for customer service"
      }
    ],
    certifications: [
      "RERA Certified Agent",
      "Commercial Property Specialist",
      "Leasing Expert Certification"
    ],
    expertise: ["Commercial Properties", "Leasing", "Investment Analysis", "Mixed-Use Developments"],
    projects: [
      {
        id: "5",
        title: "Business Bay Tower",
        type: "Commercial",
        location: "Business Bay",
        status: "Leased",
        price: "AED 12M",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        year: "2023"
      },
      {
        id: "6",
        title: "Marina Residence",
        type: "Apartment",
        location: "Dubai Marina",
        status: "Sold",
        price: "AED 8M",
        image: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=800&h=600&fit=crop",
        year: "2023"
      }
    ]
  },
  {
    id: "mohanned-mohamed",
    name: "Mohanned Mohamed",
    role: "Senior Property Consultant",
    specialty: "Client Success & Market Analysis Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
    whatsapp: "+971501234569",
    email: "mohanned@alkhail.com",
    experience: "10+ Years",
    properties: "300+",
    rating: "4.9",
    bio: "Known for his exceptional client service and deep market analysis skills, Mohanned ensures every client makes informed decisions backed by comprehensive data and insights.",
    languages: ["English", "Arabic"],
    awards: [
      {
        year: "2023",
        title: "Rising Star Award",
        description: "Outstanding performance in client relations"
      }
    ],
    certifications: [
      "RERA Certified Agent",
      "Market Analysis Specialist",
      "Client Relations Expert"
    ],
    expertise: ["Market Analysis", "First-Time Buyers", "Residential Properties", "Customer Service"],
    projects: [
      {
        id: "7",
        title: "JBR Beachfront Apartment",
        type: "Apartment",
        location: "JBR",
        status: "Sold",
        price: "AED 5M",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        year: "2023"
      }
    ]
  },
  {
    id: "ahmed-hassan",
    name: "Ahmed Hassan",
    role: "Property Consultant",
    specialty: "Residential & Commercial Property Expert",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    linkedin: "#",
    whatsapp: "+971501234570",
    email: "ahmed@alkhail.com",
    experience: "8+ Years",
    properties: "250+",
    rating: "4.8",
    bio: "Ahmed specializes in both residential and commercial properties, offering versatile solutions for diverse client needs.",
    languages: ["English", "Arabic"],
    awards: [
      {
        year: "2022",
        title: "Best New Agent",
        description: "Exceptional performance in first 5 years"
      }
    ],
    certifications: [
      "RERA Certified Agent",
      "Residential Property Specialist"
    ],
    expertise: ["Residential", "Commercial", "New Developments"],
    projects: [
      {
        id: "8",
        title: "Arabian Ranches Villa",
        type: "Villa",
        location: "Arabian Ranches",
        status: "Sold",
        price: "AED 7M",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
        year: "2023"
      }
    ]
  },
  {
    id: "sara-al-mansouri",
    name: "Sara Al-Mansouri",
    role: "Luxury Property Specialist",
    specialty: "High-End Properties & Investor Relations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    linkedin: "#",
    whatsapp: "+971501234571",
    email: "sara@alkhail.com",
    experience: "12+ Years",
    properties: "380+",
    rating: "4.9",
    bio: "Sara specializes in ultra-luxury properties and maintains strong relationships with high-net-worth investors globally.",
    languages: ["English", "Arabic", "French"],
    awards: [
      {
        year: "2023",
        title: "Luxury Property Expert",
        description: "Top performer in luxury segment"
      }
    ],
    certifications: [
      "RERA Certified Agent",
      "Luxury Property Certification",
      "International Investor Relations"
    ],
    expertise: ["Luxury Estates", "Investment Properties", "VIP Clients"],
    projects: [
      {
        id: "9",
        title: "Dubai Hills Mansion",
        type: "Villa",
        location: "Dubai Hills",
        status: "Active",
        price: "AED 35M",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        year: "2024"
      }
    ]
  },
  {
    id: "omar-abdullah",
    name: "Omar Abdullah",
    role: "Investment Consultant",
    specialty: "ROI Analysis & Portfolio Management",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "#",
    whatsapp: "+971501234572",
    email: "omar@alkhail.com",
    experience: "14+ Years",
    properties: "420+",
    rating: "4.8",
    bio: "Omar provides expert investment analysis and portfolio management for real estate investors seeking optimal returns.",
    languages: ["English", "Arabic"],
    awards: [
      {
        year: "2023",
        title: "Investment Advisor of the Year",
        description: "Excellence in ROI optimization"
      }
    ],
    certifications: [
      "RERA Certified Agent",
      "Investment Analysis Certification",
      "Portfolio Management Expert"
    ],
    expertise: ["Investment Analysis", "ROI Optimization", "Portfolio Management"],
    projects: [
      {
        id: "10",
        title: "Investment Portfolio - Business Bay",
        type: "Commercial",
        location: "Business Bay",
        status: "Active",
        price: "AED 25M",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        year: "2024"
      }
    ]
  }
];
