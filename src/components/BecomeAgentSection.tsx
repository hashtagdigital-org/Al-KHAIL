import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Award, Users, GraduationCap, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

// Form validation schema
const applicationSchema = z.object({
  fullName: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string()
    .trim()
    .min(8, { message: "Phone number must be at least 8 digits" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  location: z.string()
    .trim()
    .min(2, { message: "Location is required" })
    .max(100, { message: "Location must be less than 100 characters" }),
  experience: z.string()
    .min(1, { message: "Please select your experience level" }),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const BecomeAgentSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const experienceValue = watch("experience");

  const scrollToForm = () => {
    const formElement = document.getElementById("agent-application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application Submitted!",
        description: "Our HR team will contact you within 48 hours.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Award,
      title: "Reputable Brand",
      description: "Work with one of Dubai's most respected real estate firms.",
    },
    {
      icon: Users,
      title: "Strong Lead Support",
      description: "Get qualified leads and full marketing assistance.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Training",
      description: "Grow your skills with our expert mentoring program.",
    },
    {
      icon: TrendingUp,
      title: "Attractive Commission",
      description: "Earn competitive commissions with no hidden fees.",
    },
  ];

  return (
    <section id="become-agent" className="relative overflow-hidden bg-background">
      {/* Hero Section */}
      <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/95 via-[#2C2C2C]/85 to-[#2C2C2C]/95" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center py-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Become an Alkhail Agent
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Join one of Dubai's most trusted real estate brokerages and start your journey toward success.
            </p>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-gradient-to-r from-brand-red to-brand-red/90 hover:from-brand-red/90 hover:to-brand-red text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-2xl shadow-brand-red/30 hover:shadow-brand-red/50 transition-all duration-300 group"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Why Join Alkhail Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4">
              Why Join Alkhail?
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-brand-red to-luxury-gold rounded-full mx-auto" />
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="group animate-fade-in bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-red/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-red/10 to-luxury-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Motivation Section */}
      <div className="py-20 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-8">
              We're looking for passionate agents ready to grow with us.
            </h2>
            <Button
              size="lg"
              onClick={scrollToForm}
              variant="outline"
              className="border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-semibold px-10 py-7 text-lg rounded-xl transition-all duration-300"
            >
              Become an Agent Now
            </Button>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div id="agent-application-form" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4">
              Submit Your Application
            </h2>
            <p className="text-xl text-[#6B7280]">
              Fill out the form below and we'll get back to you soon.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.1)] p-8 md:p-12 border border-gray-100 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-[#2C2C2C] font-semibold">
                  Full Name <span className="text-brand-red">*</span>
                </Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  placeholder="John Doe"
                  className="h-12 rounded-xl border-gray-200 focus:border-brand-red transition-colors"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#2C2C2C] font-semibold">
                  Email Address <span className="text-brand-red">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="john@example.com"
                  className="h-12 rounded-xl border-gray-200 focus:border-brand-red transition-colors"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#2C2C2C] font-semibold">
                  Phone Number <span className="text-brand-red">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="+971 50 123 4567"
                  className="h-12 rounded-xl border-gray-200 focus:border-brand-red transition-colors"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-[#2C2C2C] font-semibold">
                  Current Location <span className="text-brand-red">*</span>
                </Label>
                <Input
                  id="location"
                  {...register("location")}
                  placeholder="Dubai, UAE"
                  className="h-12 rounded-xl border-gray-200 focus:border-brand-red transition-colors"
                />
                {errors.location && (
                  <p className="text-sm text-red-500">{errors.location.message}</p>
                )}
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <Label htmlFor="experience" className="text-[#2C2C2C] font-semibold">
                  Years of Experience <span className="text-brand-red">*</span>
                </Label>
                <Select
                  value={experienceValue}
                  onValueChange={(value) => setValue("experience", value, { shouldValidate: true })}
                >
                  <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-brand-red transition-colors">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    <SelectItem value="0-1">0-1 Years (Entry Level)</SelectItem>
                    <SelectItem value="1-3">1-3 Years</SelectItem>
                    <SelectItem value="3-5">3-5 Years</SelectItem>
                    <SelectItem value="5-10">5-10 Years</SelectItem>
                    <SelectItem value="10+">10+ Years (Senior)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.experience && (
                  <p className="text-sm text-red-500">{errors.experience.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#2C2C2C] font-semibold">
                  Tell Us About Yourself <span className="text-brand-red">*</span>
                </Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Why do you want to join Alkhail Real Estate? Tell us about your experience and goals..."
                  rows={5}
                  className="rounded-xl border-gray-200 focus:border-brand-red transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-red to-brand-red/90 hover:from-brand-red/90 hover:to-brand-red text-white font-semibold py-6 rounded-xl shadow-lg shadow-brand-red/20 hover:shadow-xl hover:shadow-brand-red/30 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Submit Application
                  </span>
                )}
              </Button>

              {/* Notice */}
              <p className="text-center text-sm text-[#6B7280] pt-4">
                Someone from our HR team will contact you within 48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Optional Footer Section */}
      <div className="py-16 bg-secondary/20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[#6B7280] mb-4">
            Not ready yet? Learn more about Alkhail Real Estate's culture and success stories.
          </p>
          <a
            href="#about"
            className="text-brand-red font-semibold hover:text-brand-red/80 transition-colors duration-300"
          >
            About Us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BecomeAgentSection;
