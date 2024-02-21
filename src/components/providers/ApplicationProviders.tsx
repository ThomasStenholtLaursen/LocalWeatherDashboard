import { MetWeatherClient } from "@/clients/metWeatherClient";
import { QueryClient, QueryClientProvider } from "react-query";
import { TooltipProvider } from "../ui/tooltip";
import { MetWeatherClientProvider } from "./provider/MetWeatherApiProvider";
import { ThemeProvider } from "./provider/ThemeProvider";

const metWeatherClient = new MetWeatherClient(
  import.meta.env.VITE_WEATHER_API_URL,
);
const queryClient = new QueryClient();

export function ApplicationProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <MetWeatherClientProvider client={metWeatherClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </MetWeatherClientProvider>
    </QueryClientProvider>
  );
}

export default ApplicationProviders;
