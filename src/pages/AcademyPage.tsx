import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Users, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  Scale,
  TrendingUp,
  Shield,
  Clock,
  HelpCircle
} from 'lucide-react';
import { courses, insights, academyStats } from '@/data/academy';
import { format } from 'date-fns';

const AcademyPage = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'ongoing':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'completed':
        return 'bg-muted text-muted-foreground border-border';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <>
      <Helmet>
        <title>Academy | Alkhail Real Estate - Professional Real Estate Education</title>
        <meta name="description" content="Alkhail Real Estate Academy - The leading professional real estate education institution in Dubai. Expert training, certifications, and industry-recognized programs." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium tracking-wide border-accent/30 text-accent">
                <GraduationCap className="w-4 h-4 mr-2" />
                Professional Education
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                Alkhail Real Estate
                <span className="block text-accent mt-2">Academy</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                The Leading Professional Real Estate Education Institution in Dubai. 
                Empowering industry professionals with market knowledge, regulatory expertise, and practical skills.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  View Programs
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact Academy
                </Button>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                { value: `${academyStats.yearsExperience}+`, label: 'Years Experience', icon: Award },
                { value: `${academyStats.graduatesCount.toLocaleString()}+`, label: 'Graduates', icon: Users },
                { value: `${academyStats.coursesOffered}+`, label: 'Courses Offered', icon: BookOpen },
                { value: `${academyStats.industryPartners}+`, label: 'Industry Partners', icon: Building2 }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                  <stat.icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Alkhail Academy */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Alkhail Academy
              </h2>
              <p className="text-muted-foreground text-lg">
                Setting the standard for professional real estate education in the UAE
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Award,
                  title: 'Industry-Leading Expertise',
                  description: 'Over 15 years of hands-on experience in Dubai\'s dynamic real estate market, translating practical knowledge into comprehensive education.'
                },
                {
                  icon: Users,
                  title: 'Expert Instructors',
                  description: 'Learn from seasoned professionals and industry veterans who bring real-world insights and practical case studies to every session.'
                },
                {
                  icon: Scale,
                  title: 'Regulatory Excellence',
                  description: 'In-depth coverage of RERA, Dubai Land Department regulations, and UAE property laws ensuring full compliance knowledge.'
                },
                {
                  icon: TrendingUp,
                  title: 'Market-Driven Curriculum',
                  description: 'Programs designed around current market conditions, emerging trends, and practical skills demanded by the industry.'
                },
                {
                  icon: Shield,
                  title: 'Ethical Standards',
                  description: 'Strong emphasis on professional ethics, client trust, and maintaining the highest standards of real estate practice.'
                },
                {
                  icon: Building2,
                  title: 'Dubai & UAE Focus',
                  description: 'Specialized knowledge of the UAE real estate ecosystem, including freehold zones, off-plan regulations, and investor requirements.'
                }
              ].map((item, index) => (
                <Card key={index} className="bg-background border-border/50 hover:border-accent/30 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Courses & Announcements */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Academy News & Programs
              </h2>
              <p className="text-muted-foreground text-lg">
                Stay updated with our latest courses, certifications, and professional development programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {courses.map((course) => (
                <Link key={course.id} to={`/course/${course.slug}`}>
                  <Card className="bg-card border-border/50 hover:shadow-lg transition-all duration-300 group h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-3">
                        <Badge variant="outline" className="text-xs font-medium">
                          {course.category}
                        </Badge>
                        <Badge className={`text-xs capitalize ${getStatusColor(course.status)}`}>
                          {course.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground mt-3 group-hover:text-accent transition-colors">
                        {course.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/50 pt-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{format(new Date(course.date), 'MMM d, yyyy')}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                        <span className="font-semibold text-foreground">{course.price}</span>
                        <span className="text-accent text-sm font-medium group-hover:underline flex items-center gap-1">
                          View Details
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditation & Trust */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Our Commitment to Excellence
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Alkhail Real Estate Academy upholds the highest standards of professional education and ethical practice
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background rounded-xl p-6 md:p-8 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-accent" />
                    Professional Standards
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Aligned with RERA educational requirements',
                      'Curriculum reviewed by industry professionals',
                      'Practical, market-driven approach to learning',
                      'Continuous program updates reflecting market changes',
                      'Focus on ethical business practices'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background rounded-xl p-6 md:p-8 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <Award className="w-6 h-6 text-accent" />
                    Institutional Background
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Alkhail Real Estate has been a trusted name in Dubai's property market since 2009. 
                    Our academy extends this legacy of excellence into professional education.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We are committed to developing the next generation of real estate professionals 
                    through comprehensive training programs that combine theoretical knowledge with 
                    practical industry experience.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our educational philosophy centers on integrity, professionalism, and a deep 
                    understanding of the UAE real estate landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Insights */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Educational Insights
              </h2>
              <p className="text-muted-foreground text-lg">
                Market updates, regulatory changes, and professional guidance from our experts
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {insights.map((insight) => (
                <Card key={insight.id} className="bg-card border-border/50 hover:border-accent/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="text-xs mb-4">
                      {insight.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                      {insight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(insight.date), 'MMM d, yyyy')}
                      </span>
                      <Button variant="ghost" size="sm" className="text-accent p-0 h-auto hover:bg-transparent hover:underline">
                        Read Article
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about our programs, certifications, and enrollment process
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    category: 'Certifications',
                    question: 'What certifications do I receive upon completing a course?',
                    answer: 'Upon successful completion, you will receive an Alkhail Real Estate Academy Certificate of Completion. Our professional certification programs also prepare you for RERA broker examination and provide credentials recognized within the UAE real estate industry.'
                  },
                  {
                    category: 'Certifications',
                    question: 'Are your certifications recognized by RERA?',
                    answer: 'Our curriculum is aligned with RERA educational requirements. While we provide our own academy certification, our broker training programs specifically prepare candidates for the official RERA broker examination required for practicing in Dubai.'
                  },
                  {
                    category: 'Schedules',
                    question: 'What is the typical course schedule?',
                    answer: 'Most courses run for 4-8 weeks with sessions held 2-3 times per week. We offer both weekday and weekend batches to accommodate working professionals. Intensive boot camps are also available for those seeking accelerated learning.'
                  },
                  {
                    category: 'Schedules',
                    question: 'Do you offer online or hybrid learning options?',
                    answer: 'Yes, we offer flexible learning formats including in-person classes at our Dubai campus, live online sessions, and hybrid programs that combine both. Online participants have full access to recorded sessions and digital course materials.'
                  },
                  {
                    category: 'Prerequisites',
                    question: 'What are the prerequisites for enrolling in your programs?',
                    answer: 'Prerequisites vary by program. Entry-level courses require no prior experience, while advanced certifications may require completion of foundational courses or relevant industry experience. Each course page details specific requirements.'
                  },
                  {
                    category: 'Prerequisites',
                    question: 'Do I need real estate experience to join?',
                    answer: 'Not for our foundational programs. We welcome career changers, new graduates, and professionals from other industries. Our Real Estate Fundamentals course is specifically designed for those entering the field without prior experience.'
                  },
                  {
                    category: 'Career Outcomes',
                    question: 'What career opportunities can I expect after completing the programs?',
                    answer: 'Our graduates pursue careers as licensed real estate brokers, property consultants, investment advisors, and property managers. Many join leading real estate firms in Dubai, while others start their own agencies. We provide career guidance and industry networking opportunities.'
                  },
                  {
                    category: 'Career Outcomes',
                    question: 'Do you offer job placement assistance?',
                    answer: 'We provide career support including resume building, interview preparation, and access to our industry partner network. While we don\'t guarantee placement, our strong industry connections and reputation help graduates connect with potential employers.'
                  },
                  {
                    category: 'Enrollment',
                    question: 'How do I enroll in a course?',
                    answer: 'You can enroll through our website by selecting your desired course and completing the registration form. Payment can be made online via credit card or bank transfer. For corporate enrollments or group bookings, please contact our admissions team directly.'
                  },
                  {
                    category: 'Enrollment',
                    question: 'What is your refund policy?',
                    answer: 'We offer a full refund if cancellation is made at least 14 days before the course start date. Cancellations within 7-14 days receive a 50% refund or credit toward a future course. No refunds are provided for cancellations less than 7 days before the start date.'
                  }
                ].map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-background border border-border/50 rounded-lg px-6 data-[state=open]:border-accent/30"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <div className="flex items-start gap-4">
                        <span className="text-foreground font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">{faq.category}</Badge>
                      </div>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Advance Your Real Estate Career
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join our professional programs and gain the knowledge and credentials 
              to excel in Dubai's competitive real estate market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                Explore Programs
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Academy
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AcademyPage;
