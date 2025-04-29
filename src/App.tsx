
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LearnPage from "./pages/modules/learn/LearnPage";
import TutorialDetail from "./pages/modules/learn/TutorialDetail";
import TutorialCompleted from "./pages/modules/learn/TutorialCompleted";
import AssistancePage from "./pages/modules/assistance/AssistancePage";
import SOSPage from "./pages/modules/assistance/SOSPage";
import VideocallPage from "./pages/modules/assistance/VideocallPage";
import ChatHelpPage from "./pages/modules/assistance/ChatHelpPage";
import SchedulePage from "./pages/modules/assistance/SchedulePage";
import SecurityPage from "./pages/modules/security/SecurityPage";
import VerifyLinksPage from "./pages/modules/security/VerifyLinksPage";
import PasswordsPage from "./pages/modules/security/PasswordsPage";
import ServicesPage from "./pages/modules/tips/ServicesPage";
import HealthPage from "./pages/modules/tips/HealthPage";
import FinancesPage from "./pages/modules/tips/FinancesPage";
import CommunicationPage from "./pages/modules/tips/CommunicationPage";
import EntertainmentPage from "./pages/modules/tips/EntertainmentPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/learn/tutorial/:id" element={<TutorialDetail />} />
          <Route path="/learn/tutorial/completed" element={<TutorialCompleted />} />
          <Route path="/assistance" element={<AssistancePage />} />
          <Route path="/assistance/sos" element={<SOSPage />} />
          <Route path="/assistance/videocall" element={<VideocallPage />} />
          <Route path="/assistance/chat" element={<ChatHelpPage />} />
          <Route path="/assistance/schedule" element={<SchedulePage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/security/verify-links" element={<VerifyLinksPage />} />
          <Route path="/security/passwords" element={<PasswordsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/health" element={<HealthPage />} />
          <Route path="/services/finances" element={<FinancesPage />} />
          <Route path="/services/communication" element={<CommunicationPage />} />
          <Route path="/services/entertainment" element={<EntertainmentPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
