import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Agenda from "./pages/Agenda";
import Dashboard from "./pages/Dashboard";
import Noticias from "./pages/Noticias";
import Gamificacao from "./pages/Gamificacao";
import Comunidade from "./pages/Comunidade";
import Perfil from "./pages/Perfil";
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
          <Route path="/auth" element={<Auth />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/gamificacao" element={<Gamificacao />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
