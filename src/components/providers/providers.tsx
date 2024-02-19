import { TooltipProvider } from "../ui/tooltip";
import { ThemeProvider } from "./provider/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}

export default Providers;
