import { Toaster as Sonner } from "@/components/ui/sonner";

import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { TooltipProvider } from "./components/ui/tooltip";

import { ThemeProvider } from "./components/layout/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import "./index.css";
import Index from "./pages";
import LoginPage from "./pages/auth/login";
import SignupPage from "./pages/auth/signup";
import { FineProvider } from "./hooks/use-fine";
import { AuthenticatedRoute, GuestRoute } from "./components/auth/route-components";
import LogoutPage from "./pages/auth/logout";
import GamePage from "./pages/game";
import ProfilePage from "./pages/profile";
import LeaderboardPage from "./pages/leaderboard";
import MatchmakingPage from "./pages/matchmaking";
import { ChessProvider } from "./hooks/use-chess";
import DepositPage from "./pages/deposit";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <FineProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="dark">
          <ChessProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/logout' element={<LogoutPage />} />
                <Route path='/game/:id?' element={<GamePage />} />
                <Route path='/profile/:id?' element={<ProfilePage />} />
                <Route path='/leaderboard' element={<LeaderboardPage />} />
                <Route path='/matchmaking' element={<MatchmakingPage />} />
                <Route path='/deposit' element={<DepositPage />} />
              </Routes>
            </BrowserRouter>
            <Sonner />
            <Toaster />
          </ChessProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </FineProvider>
);
