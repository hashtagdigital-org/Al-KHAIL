import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Award,
  Users,
  TrendingUp,
  DollarSign,
  Target,
  Briefcase,
  GraduationCap,
  Building2,
  Shield,
  Star,
  ChevronRight,
  CheckCircle2,
  Upload,
  ArrowRight,
  Zap,
  Globe,
  HeadphonesIcon,
  BarChart3,
  UserPlus,
  Send,
  Quote,
} from "lucide-react";
import { toast } from "sonner";
import hiringHero from "@/assets/hiring-hero.jpg";

// Form schema
const applicationSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(100),
  phone: z.string().trim().min(8, "Valid phone number required").max(20).regex(/^[0-9+\-\s()]+$/),
  email: z.string().trim().email("Valid email required").max(255),
  experience: z.string().min(1, "Please select experience"),
  currentCompany: z.string().trim().max(100).optional(),
  specialization: z.string().min(1, "Please select specialization"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

// Data
const whyJoinReasons = [
  { icon: Award, title: "Strong Brand Reputation", description: "Backed by years of trust and recognition in Dubai's competitive real estate market" },
  { icon: Target, title: "High-Quality Leads", description: "Receive pre-qualified, high-intent leads through our advanced marketing channels" },
  { icon: DollarSign, title: "Competitive Commission", description: "Earn industry-leading commissions with transparent payout structures" },
  { icon: HeadphonesIcon, title: "Marketing & Admin Support", description: "Full-service marketing team and dedicated admin support at your fingertips" },
  { icon: GraduationCap, title: "Training & Development", description: "Continuous professional development and mentorship from top performers" },
  { icon: Building2, title: "Premium Inventory", description: "Exclusive access to Dubai's most sought-after luxury property listings" },
];

const requirements = [
  "Real estate experience preferred (RERA certified is a plus)",
  "Strong communication and negotiation skills",
  "In-depth knowledge of the Dubai real estate market",
  "Self-motivated with a target-driven mindset",
  "Excellent client relationship management",
  "Fluency in English (Arabic is an advantage)",
];

const benefits = [
  { icon: DollarSign, title: "Attractive Commissions", description: "Top-tier commission structure with no hidden deductions" },
  { icon: TrendingUp, title: "Career Growth", description: "Clear progression path from agent to team leader and beyond" },
  { icon: GraduationCap, title: "Professional Training", description: "Weekly masterclasses and one-on-one coaching sessions" },
  { icon: Zap, title: "CRM & Marketing Tools", description: "State-of-the-art CRM system and digital marketing support" },
  { icon: Building2, title: "Premium Office", description: "Work from our modern, fully-equipped office in the heart of Dubai" },
  { icon: Users, title: "Strong Culture", description: "Collaborative, diverse, and growth-oriented team environment" },
];

const stats = [
  { value: "5,000+", label: "Leads Generated Monthly" },
  { value: "1,200+", label: "Active Property Listings" },
  { value: "10M+", label: "Social Media Reach" },
  { value: "50+", label: "Dedicated Support Staff" },
];

const testimonials = [
  {
    name: "Ahmed Al Mansouri",
    role: "Senior Property Consultant",
    years: "3 years at Alkhail",
    quote: "Joining Alkhail was the best career decision I've made. The leads are high-quality, the commission structure is unbeatable, and the support from the team is incredible.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Luxury Property Specialist",
    years: "2 years at Alkhail",
    quote: "I doubled my income within my first year. The training programs and mentorship from senior agents helped me close deals I never thought possible.",
    rating: 5,
  },
  {
    name: "Ravi Krishnan",
    role: "Off-Plan Sales Expert",
    years: "4 years at Alkhail",
    quote: "The brand reputation opens doors. Clients trust Alkhail, and that trust translates directly into faster closings and higher commissions.",
    rating: 5,
  },
];

const processSteps = [
  { step: "01", title: "Submit Application", description: "Fill out the application form with your details and experience" },
  { step: "02", title: "Initial Review", description: "Our HR team reviews your profile within 48 hours" },
  { step: "03", title: "Interview", description: "Meet our team for a professional interview and assessment" },
  { step: "04", title: "Join the Team", description: "Welcome aboard! Begin your onboarding and start earning" },
];

const HiringAgentPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Application submitted successfully!", {
        description: "Our HR team will contact you within 48 hours.",
      });
      reset();
    } catch {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={hiringHero} alt="Dubai skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-32 text-center">
          <Badge className="mb-4 sm:mb-6 bg-accent/20 text-accent border-accent/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm backdrop-blur-sm">
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Now Hiring — Top Real Estate Agents
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background leading-tight max-w-5xl mx-auto mb-4 sm:mb-6">
            Join Alkhail Real Estate as a{" "}
            <span className="text-luxury-gold">Top Performing Agent</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            Unlock unlimited earning potential with Dubai's fastest-growing real estate brokerage. Premium leads, competitive commissions, and world-class support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("why-join")?.scrollIntoView({ behavior: "smooth" })}
              className="border-background/30 text-background hover:bg-background/10 font-semibold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY JOIN ═══════════════ */}
      <section id="why-join" className="py-12 sm:py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent/30 text-accent">Why Join Us</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Agents Choose <span className="text-accent">Alkhail</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide everything you need to excel in Dubai's competitive real estate market
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {whyJoinReasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <Card key={i} className="group border-border/50 bg-card hover:border-accent/40 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
                  <CardContent className="p-5 sm:p-6 md:p-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHAT WE LOOK FOR ═══════════════ */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-accent/30 text-accent">Requirements</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What We <span className="text-accent">Look For</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We're seeking ambitious, driven professionals who share our passion for excellence and client satisfaction.
              </p>
              <div className="space-y-4">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-accent/10 via-luxury-gold/5 to-accent/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-accent/20">
                <div className="text-center">
                  <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">RERA Certified?</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Already RERA certified? You'll have an edge! Not yet certified? We'll guide you through the process.
                  </p>
                  <Button onClick={scrollToForm} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BENEFITS ═══════════════ */}
      <section className="py-12 sm:py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Benefits & Perks</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Everything You Need to <span className="text-luxury-gold">Succeed</span>
            </h2>
            <p className="text-background/60 text-lg max-w-2xl mx-auto">
              We invest heavily in our agents because your success is our success
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="group p-5 sm:p-6 md:p-8 rounded-2xl border border-background/10 bg-background/5 hover:bg-background/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-background group-hover:text-luxury-gold transition-colors">{benefit.title}</h3>
                  <p className="text-background/60 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-2">
              Why Agents Succeed With Us
            </h2>
            <p className="text-accent-foreground/70">The numbers speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold text-accent-foreground mb-2">{stat.value}</div>
                <div className="text-accent-foreground/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent/30 text-accent">Agent Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Hear From Our <span className="text-accent">Top Agents</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real stories from real agents who transformed their careers with Alkhail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-border/50 bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-accent/30 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-accent font-medium">{t.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t.years}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ APPLICATION PROCESS ═══════════════ */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent/30 text-accent">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Your Journey <span className="text-accent">Starts Here</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A simple, transparent process to join one of Dubai's top real estate teams
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-accent">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                {i < processSteps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-10 -right-4 w-8 h-8 text-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ APPLICATION FORM ═══════════════ */}
      <section id="application-form" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
                <UserPlus className="w-3 h-3 mr-1" /> Apply Now
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-accent">Join Us?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Complete the form below and our HR team will reach out within 48 hours
              </p>
            </div>

            <Card className="shadow-xl border-border/50">
              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input id="fullName" placeholder="Your full name" {...register("fullName")} className="mt-1.5" />
                      {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>}
                    </div>
                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+971 50 123 4567" {...register("phone")} className="mt-1.5" />
                      {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" {...register("email")} className="mt-1.5" />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                    {/* Experience */}
                    <div>
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Select onValueChange={(v) => setValue("experience", v)}>
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years (Entry Level)</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10+">10+ years (Expert)</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.experience && <p className="text-sm text-destructive mt-1">{errors.experience.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Current Company */}
                    <div>
                      <Label htmlFor="currentCompany">Current Company</Label>
                      <Input id="currentCompany" placeholder="Your current employer (optional)" {...register("currentCompany")} className="mt-1.5" />
                    </div>
                    {/* Specialization */}
                    <div>
                      <Label htmlFor="specialization">Area of Specialization *</Label>
                      <Select onValueChange={(v) => setValue("specialization", v)}>
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select specialization" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Sales</SelectItem>
                          <SelectItem value="commercial">Commercial Properties</SelectItem>
                          <SelectItem value="off-plan">Off-Plan Sales</SelectItem>
                          <SelectItem value="luxury">Luxury Properties</SelectItem>
                          <SelectItem value="rentals">Rentals & Leasing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.specialization && <p className="text-sm text-destructive mt-1">{errors.specialization.message}</p>}
                    </div>
                  </div>

                  {/* CV Upload placeholder */}
                  <div>
                    <Label>Upload CV (Optional)</Label>
                    <div className="mt-1.5 border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-accent/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Drag & drop your CV here or click to browse</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your experience and why you'd like to join Alkhail Real Estate..."
                      {...register("message")}
                      className="mt-1.5 min-h-[120px]"
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to our privacy policy. Our HR team will contact you within 48 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luxury-gold rounded-full blur-[120px]" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
            Take Your Real Estate Career to the
            <span className="text-luxury-gold"> Next Level</span>
          </h2>
          <p className="text-background/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join a team that's redefining real estate excellence in Dubai. Your next chapter of growth, earnings, and success starts with Alkhail Real Estate.
          </p>
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-12 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HiringAgentPage;
