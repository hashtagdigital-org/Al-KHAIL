import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, CheckCircle2, TrendingUp, Award, Users, DollarSign } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters" })
    .max(100, { message: "Full name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(8, { message: "Please enter a valid phone number" })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Please enter a valid phone number" }),
  location: z
    .string()
    .trim()
    .min(2, { message: "Location must be at least 2 characters" })
    .max(100, { message: "Location must be less than 100 characters" }),
  experience: z.string().min(1, { message: "Please select your experience level" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type FormData = z.infer<typeof formSchema>;

const benefits = [
  {
    icon: Award,
    title: "Reputable Brand",
    description: "Work with one of Dubai's most respected real estate firms",
  },
  {
    icon: Users,
    title: "Strong Lead Support",
    description: "Get qualified leads and full marketing assistance",
  },
  {
    icon: TrendingUp,
    title: "Continuous Training",
    description: "Grow your skills with our expert mentoring program",
  },
  {
    icon: DollarSign,
    title: "Attractive Commission",
    description: "Earn competitive commissions with no hidden fees",
  },
];

const BecomeAgentSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("Application submitted successfully!", {
        description: "Our HR team will contact you within 48 hours.",
      });
      
      reset();
      setShowForm(false);
    } catch (error) {
      toast.error("Failed to submit application", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="become-agent" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-luxury-gold/30 text-luxury-gold">
            <UserPlus className="w-3 h-3 mr-1" />
            Career Opportunity
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold bg-clip-text text-transparent">
            Become an Agent
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Join one of Dubai's most trusted real estate brokerages and start your journey toward success
          </p>
          
          {!showForm && (
            <Button
              size="lg"
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-luxury-gold to-luxury-gold-light hover:from-luxury-gold-light hover:to-luxury-gold text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Apply Now
              <UserPlus className="ml-2 w-5 h-5" />
            </Button>
          )}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-luxury-gold/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 mb-4 bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-full flex items-center justify-center border border-luxury-gold/30 group-hover:border-luxury-gold/50 transition-all duration-300">
                    <Icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Motivation Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground mb-6">
            We're looking for passionate agents ready to grow with us
          </p>
          {!showForm && (
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowForm(true)}
              className="border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold/10"
            >
              Become an Agent Now
            </Button>
          )}
        </div>

        {/* Application Form */}
        {showForm && (
          <Card className="max-w-2xl mx-auto shadow-xl border-border/50 animate-fade-in">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Application Form</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you soon
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    {...register("fullName")}
                    className="mt-1"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register("email")}
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    placeholder="+971 50 123 4567"
                    {...register("phone")}
                    className="mt-1"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="location">Current Location *</Label>
                  <Input
                    id="location"
                    placeholder="Dubai, UAE"
                    {...register("location")}
                    className="mt-1"
                  />
                  {errors.location && (
                    <p className="text-sm text-destructive mt-1">{errors.location.message}</p>
                  )}
                </div>

                {/* Experience */}
                <div>
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Select onValueChange={(value) => setValue("experience", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years (Entry Level)</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years (Expert)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.experience && (
                    <p className="text-sm text-destructive mt-1">{errors.experience.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us why you want to join Alkhail Real Estate..."
                    {...register("message")}
                    className="mt-1 min-h-[120px]"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-light hover:from-luxury-gold-light hover:to-luxury-gold text-black font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Submit Application
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Our HR team will contact you within 48 hours
                </p>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Optional Footer */}
        {!showForm && (
          <div className="text-center mt-12 text-sm text-muted-foreground">
            Not ready yet?{" "}
            <a href="#about" className="text-luxury-gold hover:underline">
              Learn more about Alkhail Real Estate's culture and success stories
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default BecomeAgentSection;