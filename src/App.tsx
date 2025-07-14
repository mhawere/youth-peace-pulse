
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";

// Lazy load components for better performance
import { lazy, Suspense } from "react";

const OptimizedIndex = lazy(() => import("./pages/OptimizedIndex"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const GetInvolved = lazy(() => import("./pages/GetInvolved"));
const Contact = lazy(() => import("./pages/Contact"));
const Donate = lazy(() => import("./pages/Donate"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PressReleases = lazy(() => import("./pages/PressReleases"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const UserManagement = lazy(() => import("./pages/UserManagement"));
const ApplicationResults = lazy(() => import("./pages/ApplicationResults"));
const Auth = lazy(() => import("./pages/Auth"));
const AdminStats = lazy(() => import("./pages/AdminStats"));
const AdminBlog = lazy(() => import("./pages/AdminBlog"));
const AdminNewsletter = lazy(() => import("./pages/AdminNewsletter"));
const AdminPress = lazy(() => import("./pages/AdminPress"));
const AdminLogs = lazy(() => import("./pages/AdminLogs"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Optimized query client with better caching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime)
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<OptimizedIndex />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/news/blog" element={<Blog />} />
              <Route path="/news/blog/:id" element={<BlogPost />} />
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
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
