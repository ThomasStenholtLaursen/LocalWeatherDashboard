import { QueryClient, QueryClientProvider } from "react-query";
import { TooltipProvider } from "../ui/tooltip";
import { ThemeProvider } from "./provider/theme-provider";
import { YrWeatherClientProvider } from "@/components/providers/provider/yr-weather-api-provider";
import { YrWeatherClient } from "@/clients/weatherClient";

const yrWeatherClient = new YrWeatherClient(
  import.meta.env.VITE_WEATHER_API_URL,
);
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <YrWeatherClientProvider client={yrWeatherClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </YrWeatherClientProvider>
    </QueryClientProvider>
  );
}

export default Providers;
