export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

export const blogs: Blog[] = [
  {
    id: "1",
    slug: "dubai-real-estate-market-2024",
    title: "Dubai Real Estate Market Trends 2024: What Investors Need to Know",
    excerpt: "Explore the latest trends shaping Dubai's property market and discover investment opportunities in the emirate's most sought-after locations.",
    content: `
      <p>Dubai's real estate market continues to demonstrate remarkable resilience and growth in 2024, attracting investors from around the globe. The emirate's strategic location, world-class infrastructure, and investor-friendly policies have positioned it as one of the most attractive property markets worldwide.</p>
      
      <h2>Key Market Trends</h2>
      <p>The luxury segment has seen unprecedented demand, with waterfront properties and branded residences leading the charge. Areas like Palm Jumeirah, Dubai Marina, and Downtown Dubai continue to command premium prices, while emerging communities offer excellent value propositions.</p>
      
      <h2>Investment Hotspots</h2>
      <p>Dubai Creek Harbour, Mohammed Bin Rashid City, and Dubai Hills Estate are emerging as the new frontiers for property investment. These master-planned communities offer a blend of luxury living, green spaces, and modern amenities that appeal to both end-users and investors.</p>
      
      <h2>Market Outlook</h2>
      <p>With Expo 2020's legacy projects, upcoming infrastructure developments, and the continued influx of high-net-worth individuals, Dubai's property market is poised for sustained growth. The government's progressive visa reforms and business-friendly environment further strengthen the investment case.</p>
    `,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    author: "Ahmed Al Mansouri",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "2024-12-20",
    category: "Market Insights",
    readTime: "5 min read",
    tags: ["Investment", "Market Trends", "Dubai"]
  },
  {
    id: "2",
    slug: "luxury-villa-buying-guide",
    title: "The Complete Guide to Buying a Luxury Villa in Dubai",
    excerpt: "Everything you need to know about purchasing your dream villa in Dubai, from legal requirements to financing options.",
    content: `
      <p>Purchasing a luxury villa in Dubai is a significant investment that requires careful planning and expert guidance. This comprehensive guide covers everything you need to know to make an informed decision.</p>
      
      <h2>Understanding the Legal Framework</h2>
      <p>Foreign nationals can own freehold property in designated areas across Dubai. Understanding the legal framework, including property registration with the Dubai Land Department, is essential for a smooth transaction.</p>
      
      <h2>Financing Your Purchase</h2>
      <p>Several UAE banks offer mortgage products tailored for expatriates and non-residents. Typically, you can finance up to 75% of the property value for residents and 50% for non-residents.</p>
      
      <h2>Due Diligence Checklist</h2>
      <p>Before committing to a purchase, ensure you verify the developer's track record, check for any outstanding service charges, and conduct a thorough property inspection. Working with a reputable real estate agent can help navigate these complexities.</p>
    `,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    author: "Sarah Thompson",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "2024-12-15",
    category: "Buying Guide",
    readTime: "8 min read",
    tags: ["Villas", "Buying Guide", "Luxury"]
  },
  {
    id: "3",
    slug: "sustainable-living-dubai",
    title: "Sustainable Living: Eco-Friendly Properties in Dubai",
    excerpt: "Discover how Dubai is leading the way in sustainable real estate development with green buildings and eco-conscious communities.",
    content: `
      <p>Dubai is rapidly transforming into a hub for sustainable living, with developers incorporating green building practices and eco-friendly features into their projects. This shift reflects the UAE's commitment to sustainability and the growing demand from environmentally conscious buyers.</p>
      
      <h2>Green Building Standards</h2>
      <p>The Dubai Green Building Regulations mandate energy-efficient designs, water conservation measures, and the use of sustainable materials in new constructions. Many developers are going beyond compliance to achieve international certifications like LEED and Estidama.</p>
      
      <h2>Eco-Friendly Communities</h2>
      <p>The Sustainable City stands as a testament to Dubai's green ambitions, featuring solar-powered homes, urban farms, and car-free zones. Similar concepts are being integrated into newer developments across the emirate.</p>
      
      <h2>Benefits for Homeowners</h2>
      <p>Beyond environmental benefits, green properties offer significant cost savings through reduced utility bills and often command premium resale values. They also provide healthier living environments with improved air quality and natural lighting.</p>
    `,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    author: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date: "2024-12-10",
    category: "Sustainability",
    readTime: "6 min read",
    tags: ["Sustainability", "Green Living", "Environment"]
  },
  {
    id: "4",
    slug: "rental-market-guide-landlords",
    title: "Dubai Rental Market: A Comprehensive Guide for Landlords",
    excerpt: "Maximize your rental income with expert tips on property management, tenant screening, and market positioning.",
    content: `
      <p>Dubai's rental market offers attractive yields for property investors, but success requires a strategic approach to property management and tenant relations. This guide provides actionable insights for maximizing your rental returns.</p>
      
      <h2>Setting the Right Rent</h2>
      <p>The RERA Rental Index provides guidance on fair market rents, but positioning your property competitively requires understanding local demand drivers and comparable listings. Consider factors like furnishing, amenities, and location premium.</p>
      
      <h2>Tenant Screening</h2>
      <p>Thorough tenant screening can prevent costly issues down the line. Verify employment, check references, and ensure tenants understand their obligations under the tenancy contract.</p>
      
      <h2>Property Maintenance</h2>
      <p>Regular maintenance preserves property value and keeps tenants satisfied. Establish relationships with reliable contractors and respond promptly to repair requests. Consider professional property management for multiple units.</p>
    `,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    author: "Fatima Al Rashid",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "2024-12-05",
    category: "Rental Tips",
    readTime: "7 min read",
    tags: ["Rental", "Landlord Tips", "Investment"]
  },
  {
    id: "5",
    slug: "off-plan-vs-ready-properties",
    title: "Off-Plan vs Ready Properties: Making the Right Choice",
    excerpt: "Understand the pros and cons of buying off-plan versus ready properties to make an informed investment decision.",
    content: `
      <p>One of the most common dilemmas for property buyers in Dubai is choosing between off-plan and ready properties. Each option has distinct advantages and considerations that should align with your investment goals and risk tolerance.</p>
      
      <h2>Off-Plan Properties</h2>
      <p>Off-plan purchases typically offer lower entry prices, flexible payment plans, and potential capital appreciation during construction. However, they come with completion risks and require patience as you wait for handover.</p>
      
      <h2>Ready Properties</h2>
      <p>Ready properties offer immediate ownership, rental income, and the ability to inspect the actual unit before purchase. They may require larger upfront capital but eliminate construction-related uncertainties.</p>
      
      <h2>Making Your Decision</h2>
      <p>Consider your timeline, cash flow, and investment objectives. Off-plan suits long-term investors seeking capital growth, while ready properties appeal to those seeking immediate returns or personal use.</p>
    `,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    author: "James Wilson",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    date: "2024-11-28",
    category: "Buying Guide",
    readTime: "5 min read",
    tags: ["Off-Plan", "Ready Properties", "Investment"]
  },
  {
    id: "6",
    slug: "interior-design-trends-2024",
    title: "Interior Design Trends Transforming Dubai Homes in 2024",
    excerpt: "From minimalist luxury to biophilic design, explore the interior trends shaping modern Dubai residences.",
    content: `
      <p>Dubai's interior design landscape is evolving rapidly, blending global trends with regional influences to create distinctive living spaces. Here are the key trends transforming homes across the emirate.</p>
      
      <h2>Minimalist Luxury</h2>
      <p>The trend toward 'quiet luxury' emphasizes quality over quantity, with clean lines, neutral palettes, and carefully curated statement pieces. This approach creates sophisticated spaces that feel both opulent and serene.</p>
      
      <h2>Biophilic Design</h2>
      <p>Integrating natural elements into interior spaces continues to gain momentum. Indoor gardens, natural materials, and large windows connecting interiors to outdoor spaces enhance well-being and create harmonious living environments.</p>
      
      <h2>Smart Home Integration</h2>
      <p>Technology seamlessly integrated into design is now essential. From automated lighting and climate control to integrated entertainment systems, smart features are becoming standard in luxury residences.</p>
    `,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    author: "Layla Hassan",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    date: "2024-11-20",
    category: "Design",
    readTime: "4 min read",
    tags: ["Interior Design", "Trends", "Luxury Living"]
  }
];

export const getBlogBySlug = (slug: string): Blog | undefined => {
  return blogs.find(blog => blog.slug === slug);
};

export const getRelatedBlogs = (currentSlug: string, category: string, limit: number = 3): Blog[] => {
  return blogs
    .filter(blog => blog.slug !== currentSlug && blog.category === category)
    .slice(0, limit);
};
