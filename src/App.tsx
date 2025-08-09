import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./components/Contact"; 
import AllProjects from './pages/AllProjects';
import ProjectDetails from './pages/ProjectDetails';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {AIAssistant} from "./components/AIAssistant";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter basename="/nezha-ai-folio">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AIAssistant" element={<AIAssistant/>}/>
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
