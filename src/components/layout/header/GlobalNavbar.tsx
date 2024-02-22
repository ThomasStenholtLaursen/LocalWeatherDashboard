import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DASHBOARD_PAGE } from "@/lib/paths";
import { LayoutDashboard, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const GlobalNavbar = () => {
  return (
    <div className="fixed z-10 w-full bg-background/30 backdrop-blur-md">
      <div className="container flex items-center justify-between py-2 pl-6 pr-6">
        <div>
          <Link
            className="hidden pr-4 text-2xl font-extrabold text-foreground lg:block"
            to={DASHBOARD_PAGE}
          >
            LocalWeatherDashboard
          </Link>
          <Link
            className="pr-4 text-2xl font-extrabold text-foreground lg:hidden"
            to={DASHBOARD_PAGE}
          >
            LWD
          </Link>
        </div>
        <div className="flex">
          <div>
            <ModeToggle />
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="ghost">
                  <LayoutDashboard />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary">
                <Label className="text-xs text-foreground">
                  Weather Dashboard
                </Label>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="lg:hidden">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="ghost">
                  <Menu />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary">
                <Label className="text-xs text-foreground">Menu</Label>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default GlobalNavbar;
