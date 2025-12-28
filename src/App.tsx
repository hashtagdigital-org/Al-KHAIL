import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import EventLanding from "./pages/EventLanding";
import PropertyLanding from "./pages/PropertyLanding";
import PropertiesPage from "./pages/PropertiesPage";
import AgentLanding from "./pages/AgentLanding";
import AgentsPage from "./pages/AgentsPage";
import AllProjectsPage from "./pages/AllProjectsPage";
import AllEventsPage from "./pages/AllEventsPage";
import BlogsPage from "./pages/BlogsPage";
import BlogPage from "./pages/BlogPage";
import AcademyPage from "./pages/AcademyPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/projects" element={<AllProjectsPage />} />
            <Route path="/events" element={<AllEventsPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/course/:slug" element={<CourseDetailPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/event/:slug" element={<EventLanding />} />
            <Route path="/property/:slug" element={<PropertyLanding />} />
            <Route path="/agent/:agentId" element={<AgentLanding />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
