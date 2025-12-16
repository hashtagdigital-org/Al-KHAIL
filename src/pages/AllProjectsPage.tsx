import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  projects, 
  areas, 
  developers, 
  propertyTypes, 
  projectStatuses, 
  investmentTagOptions,
  handoverYears,
  bedroomOptions,
  type Project
} from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  Filter,
  X,
  MapPin,
  Building2,
  Calendar,
  Percent,
  Home,
  Grid3X3,
  List,
  ArrowUpDown,
  MessageCircle,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
  FileCheck,
  TrendingUp,
  DollarSign,
  BedDouble,
  Maximize,
  Check,
  Star,
  HelpCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type SortOption = "price-asc" | "price-desc" | "handover" | "roi" | "newest" | "popularity";
type ViewMode = "grid" | "list";

const ITEMS_PER_PAGE = 9;

const AllProjectsPage = () => {
  const { toast } = useToast();
  
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedDevelopers, setSelectedDevelopers] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedHandoverYears, setSelectedHandoverYears] = useState<number[]>([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30000000]);
  const [hasPaymentPlan, setHasPaymentPlan] = useState<boolean | null>(null);
  
  // UI State
  const [sortBy, setSortBy] = useState<SortOption>("popularity");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Filter & Sort Logic
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesArea = selectedAreas.length === 0 || selectedAreas.includes(project.area);
      const matchesDeveloper = selectedDevelopers.length === 0 || selectedDevelopers.includes(project.developer);
      const matchesType = selectedTypes.length === 0 || project.propertyTypes.some(t => selectedTypes.includes(t));
      const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(project.projectStatus);
      const matchesTags = selectedTags.length === 0 || project.investmentTags.some(t => selectedTags.includes(t));
      const matchesHandover = selectedHandoverYears.length === 0 || selectedHandoverYears.includes(project.handoverYear);
      const matchesBedrooms = selectedBedrooms.length === 0 || project.bedrooms.some(b => selectedBedrooms.includes(b));
      const matchesPrice = project.priceNumeric >= priceRange[0] && project.priceNumeric <= priceRange[1];
      const matchesPaymentPlan = hasPaymentPlan === null || 
        (hasPaymentPlan ? project.paymentPlan !== "Cash Only" : project.paymentPlan === "Cash Only");
      
      return matchesSearch && matchesArea && matchesDeveloper && matchesType && 
             matchesStatus && matchesTags && matchesHandover && matchesBedrooms && 
             matchesPrice && matchesPaymentPlan;
    });
  }, [searchQuery, selectedAreas, selectedDevelopers, selectedTypes, selectedStatuses, 
      selectedTags, selectedHandoverYears, selectedBedrooms, priceRange, hasPaymentPlan]);

  const sortedProjects = useMemo(() => {
    const sorted = [...filteredProjects];
    switch (sortBy) {
      case "price-asc":
        return sorted.sort((a, b) => a.priceNumeric - b.priceNumeric);
      case "price-desc":
        return sorted.sort((a, b) => b.priceNumeric - a.priceNumeric);
      case "handover":
        return sorted.sort((a, b) => a.handoverYear - b.handoverYear);
      case "roi":
        return sorted.sort((a, b) => b.roiNumeric - a.roiNumeric);
      case "newest":
        return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      case "popularity":
      default:
        return sorted.sort((a, b) => b.popularity - a.popularity);
    }
  }, [filteredProjects, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sortedProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = sortedProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedAreas([]);
    setSelectedDevelopers([]);
    setSelectedTypes([]);
    setSelectedStatuses([]);
    setSelectedTags([]);
    setSelectedHandoverYears([]);
    setSelectedBedrooms([]);
    setPriceRange([0, 30000000]);
    setHasPaymentPlan(null);
    setCurrentPage(1);
  };

  const activeFiltersCount = [
    selectedAreas.length,
    selectedDevelopers.length,
    selectedTypes.length,
    selectedStatuses.length,
    selectedTags.length,
    selectedHandoverYears.length,
    selectedBedrooms.length,
    priceRange[0] > 0 || priceRange[1] < 30000000 ? 1 : 0,
    hasPaymentPlan !== null ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  const toggleCompare = (projectId: string) => {
    if (compareList.includes(projectId)) {
      setCompareList(compareList.filter(id => id !== projectId));
    } else if (compareList.length < 4) {
      setCompareList([...compareList, projectId]);
    } else {
      toast({
        title: "Compare Limit Reached",
        description: "You can compare up to 4 projects at a time.",
        variant: "destructive",
      });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Our team will contact you shortly.",
    });
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in real estate projects in Dubai. Can you help me?");
    window.open(`https://wa.me/+971501234567?text=${message}`, "_blank");
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `AED ${(price / 1000000).toFixed(1)}M`;
    }
    return `AED ${(price / 1000).toFixed(0)}K`;
  };

  // Filter Panel Component
  const FilterPanel = ({ className = "" }: { className?: string }) => (
    <div className={`space-y-6 ${className}`}>
      {/* Search */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-2 block">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Project, developer, location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Separator />

      {/* Location */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">Location / Area</label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {areas.map((area) => (
            <label key={area} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedAreas.includes(area)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedAreas([...selectedAreas, area]);
                  } else {
                    setSelectedAreas(selectedAreas.filter(a => a !== area));
                  }
                  setCurrentPage(1);
                }}
              />
              <span className="text-sm text-foreground">{area}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Developer */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">Developer</label>
        <div className="space-y-2">
          {developers.map((developer) => (
            <label key={developer} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedDevelopers.includes(developer)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedDevelopers([...selectedDevelopers, developer]);
                  } else {
                    setSelectedDevelopers(selectedDevelopers.filter(d => d !== developer));
                  }
                  setCurrentPage(1);
                }}
              />
              <span className="text-sm text-foreground">{developer}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Property Type */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">Property Type</label>
        <div className="flex flex-wrap gap-2">
          {propertyTypes.map((type) => (
            <Badge
              key={type}
              variant={selectedTypes.includes(type) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => {
                if (selectedTypes.includes(type)) {
                  setSelectedTypes(selectedTypes.filter(t => t !== type));
                } else {
                  setSelectedTypes([...selectedTypes, type]);
                }
                setCurrentPage(1);
              }}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* Project Status */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">Project Status</label>
        <div className="flex flex-wrap gap-2">
          {projectStatuses.map((status) => (
            <Badge
              key={status}
              variant={selectedStatuses.includes(status) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => {
                if (selectedStatuses.includes(status)) {
                  setSelectedStatuses(selectedStatuses.filter(s => s !== status));
                } else {
                  setSelectedStatuses([...selectedStatuses, status]);
                }
                setCurrentPage(1);
              }}
            >
              {status}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">
          Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
        </label>
        <Slider
          value={priceRange}
          onValueChange={(value) => {
            setPriceRange(value as [number, number]);
            setCurrentPage(1);
          }}
          min={0}
          max={30000000}
          step={100000}
          className="mt-2"
        />
      </div>

      <Separator />

      {/* Handover Year */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">Handover Year</label>
        <div className="flex flex-wrap gap-2">
          {handoverYears.map((year) => (
            <Badge
              key={year}
              variant={selectedHandoverYears.includes(year) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => {
                if (selectedHandoverYears.includes(year)) {
                  setSelectedHandoverYears(selectedHandoverYears.filter(y => y !== year));
                } else {
                  setSelectedHandoverYears([...selectedHandoverYears, year]);
                }
                setCurrentPage(1);
              }}
            >
              {year}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* Bedrooms */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">Bedrooms</label>
        <div className="flex flex-wrap gap-2">
          {[0, 1, 2, 3, 4, 5].map((bed) => (
            <Badge
              key={bed}
              variant={selectedBedrooms.includes(bed) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => {
                if (selectedBedrooms.includes(bed)) {
                  setSelectedBedrooms(selectedBedrooms.filter(b => b !== bed));
                } else {
                  setSelectedBedrooms([...selectedBedrooms, bed]);
                }
                setCurrentPage(1);
              }}
            >
              {bed === 0 ? "Studio" : `${bed} BR`}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* Investment Tags */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">Investment Tags</label>
        <div className="flex flex-wrap gap-2">
          {investmentTagOptions.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer text-xs"
              onClick={() => {
                if (selectedTags.includes(tag)) {
                  setSelectedTags(selectedTags.filter(t => t !== tag));
                } else {
                  setSelectedTags([...selectedTags, tag]);
                }
                setCurrentPage(1);
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* Payment Plan */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">Payment Plan</label>
        <div className="flex gap-2">
          <Badge
            variant={hasPaymentPlan === true ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => {
              setHasPaymentPlan(hasPaymentPlan === true ? null : true);
              setCurrentPage(1);
            }}
          >
            Available
          </Badge>
          <Badge
            variant={hasPaymentPlan === false ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => {
              setHasPaymentPlan(hasPaymentPlan === false ? null : false);
              setCurrentPage(1);
            }}
          >
            Cash Only
          </Badge>
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <>
          <Separator />
          <Button variant="outline" onClick={clearAllFilters} className="w-full">
            <X className="w-4 h-4 mr-2" />
            Clear All Filters ({activeFiltersCount})
          </Button>
        </>
      )}
    </div>
  );

  // Project Card Component
  const ProjectCard = ({ project, isListView = false }: { project: Project; isListView?: boolean }) => {
    const isInCompareList = compareList.includes(project.id);
    
    if (isListView) {
      return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-80 aspect-video md:aspect-auto md:h-auto flex-shrink-0">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <Badge className={`absolute top-4 left-4 ${
                project.projectStatus === "Ready" ? "bg-green-500" :
                project.projectStatus === "Off-plan" ? "bg-primary" : "bg-orange-500"
              } text-white border-0`}>
                {project.projectStatus}
              </Badge>
            </div>
            <div className="flex-1 p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.investmentTags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">{project.developer}</p>
              <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Starting</span>
                  <p className="font-bold text-primary">{project.startingPrice}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Handover</span>
                  <p className="font-semibold">{project.handoverDate}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">ROI</span>
                  <p className="font-semibold text-green-600">{project.roi}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Payment</span>
                  <p className="font-semibold">{project.paymentPlan}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link to={`/project/${project.slug}`}>
                  <Button>View Project</Button>
                </Link>
                <Button variant="outline" onClick={handleWhatsApp}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Request Details
                </Button>
                <Button
                  variant={isInCompareList ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => toggleCompare(project.id)}
                >
                  {isInCompareList ? <Check className="w-4 h-4 mr-1" /> : null}
                  Compare
                </Button>
              </div>
            </div>
          </div>
        </Card>
      );
    }

    return (
      <Card className="overflow-hidden group hover:shadow-xl transition-all">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <Badge className={`${
              project.projectStatus === "Ready" ? "bg-green-500" :
              project.projectStatus === "Off-plan" ? "bg-primary" : "bg-orange-500"
            } text-white border-0`}>
              {project.projectStatus}
            </Badge>
            <Badge className="bg-[hsl(var(--luxury-gold))] text-white border-0">
              ROI {project.roi}
            </Badge>
          </div>
          <button
            onClick={() => toggleCompare(project.id)}
            className={`absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              isInCompareList ? "bg-primary text-primary-foreground" : "bg-background/80 text-foreground hover:bg-background"
            }`}
          >
            {isInCompareList ? <Check className="w-4 h-4" /> : <ArrowUpDown className="w-4 h-4" />}
          </button>
        </div>
        <div className="p-5">
          <div className="flex flex-wrap gap-1 mb-2">
            {project.investmentTags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>
          <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-1">{project.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{project.developer}</p>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
            <MapPin className="w-4 h-4" />
            {project.location}
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {project.handoverDate}
            </div>
            <div className="flex items-center gap-1">
              <Home className="w-3 h-3" />
              {project.propertyTypes.slice(0, 2).join(", ")}
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-bold text-primary">{project.startingPrice}</span>
            <Badge variant="outline" className="text-xs">{project.paymentPlan}</Badge>
          </div>
          <div className="flex gap-2">
            <Link to={`/project/${project.slug}`} className="flex-1">
              <Button className="w-full" size="sm">View Project</Button>
            </Link>
            <Button variant="outline" size="sm" onClick={handleWhatsApp}>
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-gradient-to-br from-card via-card to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-3 sm:mb-4" variant="secondary">Discover Premium Properties</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              All Real Estate Projects in Dubai
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
              Explore Dubai's finest off-plan and ready projects. Find your perfect investment with detailed insights, flexible payment plans, and Golden Visa eligibility.
            </p>
            <div className="relative max-w-xl mx-auto px-4 sm:px-0">
              <Search className="absolute left-6 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by project name or developer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 sm:h-14 text-base sm:text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24">
                <Card className="p-4 sm:p-6 max-h-[calc(100vh-120px)] overflow-y-auto">
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <Filter className="w-5 h-5 text-primary" />
                    <h2 className="font-bold text-lg text-foreground">Filters</h2>
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary">{activeFiltersCount}</Badge>
                    )}
                  </div>
                  <FilterPanel />
                </Card>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Button */}
                  <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden">
                        <Filter className="w-4 h-4 mr-2" />
                        Filters
                        {activeFiltersCount > 0 && (
                          <Badge variant="secondary" className="ml-2">{activeFiltersCount}</Badge>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[320px] overflow-y-auto">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterPanel />
                      </div>
                    </SheetContent>
                  </Sheet>

                  <span className="text-muted-foreground text-sm">
                    {sortedProjects.length} projects found
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort Dropdown */}
                  <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                    <SelectTrigger className="w-[180px]">
                      <ArrowUpDown className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popularity">Most Popular</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="handover">Handover Date</SelectItem>
                      <SelectItem value="roi">Highest ROI</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Toggle */}
                  <div className="hidden sm:flex border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-muted"}`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 ${viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-muted"}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Compare Bar */}
              {compareList.length > 0 && (
                <Card className="p-4 mb-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <ArrowUpDown className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">
                        Compare: {compareList.length}/4 selected
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button disabled={compareList.length < 2}>
                            Compare Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Compare Projects</DialogTitle>
                          </DialogHeader>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left p-3 font-semibold">Feature</th>
                                  {compareList.map((id) => {
                                    const project = projects.find(p => p.id === id);
                                    return (
                                      <th key={id} className="text-left p-3 font-semibold min-w-[150px]">
                                        {project?.name}
                                      </th>
                                    );
                                  })}
                                </tr>
                              </thead>
                              <tbody>
                                {[
                                  { label: "Starting Price", key: "startingPrice" },
                                  { label: "Location", key: "location" },
                                  { label: "Developer", key: "developer" },
                                  { label: "Status", key: "projectStatus" },
                                  { label: "Handover", key: "handoverDate" },
                                  { label: "Payment Plan", key: "paymentPlan" },
                                  { label: "ROI", key: "roi" },
                                  { label: "Down Payment", key: "downPayment" },
                                ].map((row) => (
                                  <tr key={row.key} className="border-b">
                                    <td className="p-3 font-medium text-muted-foreground">{row.label}</td>
                                    {compareList.map((id) => {
                                      const project = projects.find(p => p.id === id);
                                      return (
                                        <td key={id} className="p-3">
                                          {project?.[row.key as keyof Project] as string}
                                        </td>
                                      );
                                    })}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="ghost" onClick={() => setCompareList([])}>
                        Clear
                      </Button>
                    </div>
                  </div>
                </Card>
              )}

              {/* Projects Grid/List */}
              {paginatedProjects.length > 0 ? (
                <div className={viewMode === "grid" 
                  ? "grid sm:grid-cols-2 xl:grid-cols-3 gap-6" 
                  : "space-y-6"
                }>
                  {paginatedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} isListView={viewMode === "list"} />
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center">
                  <Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
                  <Button variant="outline" onClick={clearAllFilters}>Clear All Filters</Button>
                </Card>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {/* Need Help Section */}
              <Card className="p-4 sm:p-8 mt-8 sm:mt-12 bg-gradient-to-r from-primary/10 to-[hsl(var(--luxury-gold))]/10">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                      <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      <h3 className="text-lg sm:text-2xl font-bold text-foreground">Need Help Choosing a Project?</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Our expert consultants can help you find the perfect property investment based on your goals and budget.
                    </p>
                  </div>
                  <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                    <Button onClick={handleWhatsApp} className="flex-1 sm:flex-initial bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <a href="tel:+971501234567" className="flex-1 sm:flex-initial">
                      <Button variant="outline" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 sm:py-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground text-xs sm:text-base">RERA Certified</span>
              <span className="text-xs sm:text-sm text-muted-foreground">Licensed Agency</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[hsl(var(--luxury-gold))]/10 flex items-center justify-center">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[hsl(var(--luxury-gold))]" />
              </div>
              <span className="font-semibold text-foreground text-xs sm:text-base">Award Winning</span>
              <span className="text-xs sm:text-sm text-muted-foreground">2024 Excellence</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              </div>
              <span className="font-semibold text-foreground text-xs sm:text-base">DLD Compliant</span>
              <span className="text-xs sm:text-sm text-muted-foreground">Official Partner</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
              </div>
              <span className="font-semibold text-foreground text-xs sm:text-base">500+ Projects</span>
              <span className="text-xs sm:text-sm text-muted-foreground">Sold Successfully</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-8 sm:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Invest in Dubai Real Estate</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              Dubai's real estate market offers exceptional opportunities for international investors seeking high returns, 
              Golden Visa eligibility, and world-class lifestyle properties. From luxury waterfront developments on Palm 
              Jumeirah to modern apartments in Downtown Dubai, our curated collection features projects from top developers 
              including Emaar, Damac, Meraas, and more.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Whether you're looking for off-plan projects with attractive payment plans or ready-to-move properties, 
              our expert team provides personalized guidance to help you find the perfect investment. Contact us today 
              to explore exclusive opportunities and start your Dubai property journey.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6">
            <Link to="/agents">
              <Button variant="link" className="text-primary text-sm sm:text-base px-0">View Our Agents →</Button>
            </Link>
            <Link to="/#about">
              <Button variant="link" className="text-primary text-sm sm:text-base px-0">About Us →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
        <Button
          size="lg"
          onClick={handleWhatsApp}
          className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full shadow-lg w-12 h-12 sm:w-14 sm:h-14 p-0"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default AllProjectsPage;
