
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";

import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Blog from "./pages/Blog";
import PressReleases from "./pages/PressReleases";
import Newsletter from "./pages/Newsletter";
import UserManagement from "./pages/UserManagement";
import ApplicationResults from "./pages/ApplicationResults";
import Auth from "./pages/Auth";
import AdminStats from "./pages/AdminStats";
import AdminBlog from "./pages/AdminBlog";
import AdminNewsletter from "./pages/AdminNewsletter";
import AdminPress from "./pages/AdminPress";
import AdminLogs from "./pages/AdminLogs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/news/blog" element={<Blog />} />
            <Route path="/news/press-releases" element={<PressReleases />} />
            <Route path="/news/newsletter" element={<Newsletter />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/application-results" element={<ApplicationResults />} />
            <Route path="/admin/stats" element={<AdminStats />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/blog" element={<AdminBlog />} />
            <Route path="/admin/newsletter" element={<AdminNewsletter />} />
            <Route path="/admin/press" element={<AdminPress />} />
            <Route path="/admin/logs" element={<AdminLogs />} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
