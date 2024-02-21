import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/provider/ThemeProvider";
import { Label } from "./label";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="ghost" onClick={handleClick}>
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-secondary">
        <Label className="text-xs text-foreground">Theme toggle</Label>
      </TooltipContent>
    </Tooltip>
  );
}
