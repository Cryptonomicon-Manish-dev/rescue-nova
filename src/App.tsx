import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Alerts from "./pages/Alerts";
import AdminDashboard from "./pages/AdminDashboard";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Pages
import EmergencyResponse from "./pages/services/EmergencyResponse";
import Support from "./pages/services/Support";

// Layouts
import ProtectedLayout from "./components/ProtectedLayout";

// Components
import AIChatbot from "./components/AIChatbot";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  React.useEffect(() => {
    // Add dark class to html element based on system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <main className="min-h-screen bg-background text-foreground antialiased">
            <React.Suspense
              fallback={
                <div className="flex h-screen items-center justify-center">
                  Loading...
                </div>
              }
            >
              <Routes>
                {/* Public routes */}
                <Route path="/auth" element={<Auth />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Services routes */}
                <Route path="/services" element={<Services />} />
                <Route path="/services/emergency-response" element={<EmergencyResponse />} />
                <Route path="/services/support" element={<Support />} />
                
                {/* Protected routes */}
                <Route element={<ProtectedLayout />}>
                  <Route path="/" element={<Index />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                </Route>

                {/* Fallback routes */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <AIChatbot />
              <Toaster />
              <Sonner />
            </React.Suspense>
          </main>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
