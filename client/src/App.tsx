import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import LiveDrops from "@/pages/live-drops";
import ClubKits from "@/pages/club-kits";
import Apparel from "@/pages/apparel";
import Accessories from "@/pages/accessories";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/live-drops" component={LiveDrops} />
      <Route path="/club-kits" component={ClubKits} />
      <Route path="/apparel" component={Apparel} />
      <Route path="/accessories" component={Accessories} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
