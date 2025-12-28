import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  GraduationCap,
  Calendar,
  Clock,
  Users,
  Award,
  BookOpen,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Globe,
  BarChart3,
  Target,
  FileText,
  User
} from 'lucide-react';
import { getCourseBySlug, courses } from '@/data/academy';
import { format } from 'date-fns';

const CourseDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || '');

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
          <Link to="/academy">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Academy
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Intermediate':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'Advanced':
        return 'bg-red-500/10 text-red-600 border-red-500/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const spotsLeft = course.maxParticipants - course.enrolledCount;
  const relatedCourses = courses.filter(c => c.id !== course.id && c.status !== 'completed').slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{course.title} | Alkhail Academy</title>
        <meta name="description" content={course.description} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/academy" className="hover:text-accent transition-colors">Academy</Link></li>
                <li>/</li>
                <li className="text-foreground">{course.title}</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">{course.category}</Badge>
                  <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                  <Badge className={`capitalize ${getStatusColor(course.status)}`}>{course.status}</Badge>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {course.title}
                </h1>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {course.fullDescription}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-sm">{format(new Date(course.date), 'MMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Globe className="w-5 h-5 text-accent" />
                    <span className="text-sm">{course.language}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="text-sm">{course.certificate ? 'Certificate Included' : 'No Certificate'}</span>
                  </div>
                </div>
              </div>

              {/* Enrollment Card */}
              <div className="lg:col-span-1">
                <Card className="sticky top-28 bg-card border-border shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-foreground mb-2">{course.price}</div>
                    <p className="text-sm text-muted-foreground mb-6">Full program fee</p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Enrolled</span>
                        <span className="font-medium text-foreground">{course.enrolledCount}/{course.maxParticipants}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-accent h-2 rounded-full transition-all"
                          style={{ width: `${(course.enrolledCount / course.maxParticipants) * 100}%` }}
                        />
                      </div>
                      {spotsLeft > 0 && course.status !== 'completed' && (
                        <p className="text-sm text-accent font-medium">{spotsLeft} spots remaining</p>
                      )}
                    </div>

                    {course.status === 'completed' ? (
                      <Button className="w-full" disabled>
                        Course Completed
                      </Button>
                    ) : (
                      <Button className="w-full group" size="lg">
                        Enroll Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    )}

                    <Button variant="outline" className="w-full mt-3">
                      Request Information
                    </Button>

                    <Separator className="my-6" />

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">Lifetime access to materials</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">Certificate upon completion</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">Expert instructor support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">Networking opportunities</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* What You'll Learn */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6 text-accent" />
                    What You'll Learn
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border/50">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Curriculum */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-accent" />
                    Course Curriculum
                  </h2>
                  <div className="space-y-4">
                    {course.curriculum.map((module, index) => (
                      <Card key={index} className="bg-card border-border/50">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg font-semibold text-foreground">
                                Module {index + 1}: {module.title}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground mt-1">Duration: {module.duration}</p>
                            </div>
                            <Badge variant="outline" className="shrink-0">{module.topics.length} Topics</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {module.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    Requirements
                  </h2>
                  <ul className="space-y-3">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-accent shrink-0 mt-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Audience */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-accent" />
                    Who This Course Is For
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {course.targetAudience.map((audience, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-muted-foreground text-sm">{audience}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar - Instructor */}
              <div className="lg:col-span-1">
                <div className="sticky top-28">
                  <Card className="bg-card border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <User className="w-5 h-5 text-accent" />
                        Your Instructor
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                          <GraduationCap className="w-8 h-8 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{course.instructor.name}</h3>
                          <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {course.instructor.bio}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <BarChart3 className="w-4 h-4 text-accent" />
                        <span>{course.instructor.experience} experience</span>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Specializations:</p>
                        <div className="flex flex-wrap gap-2">
                          {course.instructor.specializations.map((spec, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses */}
        {relatedCourses.length > 0 && (
          <section className="py-12 md:py-16 bg-card/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Other Programs You May Like</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedCourses.map((relatedCourse) => (
                  <Link key={relatedCourse.id} to={`/course/${relatedCourse.slug}`}>
                    <Card className="bg-background border-border/50 hover:border-accent/30 transition-all duration-300 h-full group">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">{relatedCourse.category}</Badge>
                          <Badge className={`text-xs capitalize ${getStatusColor(relatedCourse.status)}`}>
                            {relatedCourse.status}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {relatedCourse.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {relatedCourse.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{relatedCourse.duration}</span>
                          <span className="font-semibold text-foreground">{relatedCourse.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Advance Your Career?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-6 max-w-xl mx-auto">
              Join {course.title} and gain the skills to succeed in Dubai's real estate market.
            </p>
            {course.status !== 'completed' && (
              <Button size="lg" variant="secondary" className="group">
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CourseDetailPage;
