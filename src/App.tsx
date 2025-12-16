import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EventLanding from "./pages/EventLanding";
import PropertyLanding from "./pages/PropertyLanding";
import PropertiesPage from "./pages/PropertiesPage";
import AgentLanding from "./pages/AgentLanding";
import AgentsPage from "./pages/AgentsPage";
import AllProjectsPage from "./pages/AllProjectsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
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
);

export default App;
