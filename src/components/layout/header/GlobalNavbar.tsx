import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DASHBOARD_PAGE, ROOT } from "@/lib/paths";
import { LayoutDashboard, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileSheet from "./MobileSheet";

const GlobalNavbar = () => {
  const [openMobileSheet, setOpenMobileSheet] = useState(false);

  const handleOpenMobileSheet = () => setOpenMobileSheet(true);
  const handleCloseMobileSheet = () => setOpenMobileSheet(false);

  return (
    <nav className="fixed  z-20 w-full bg-background/30 backdrop-blur-md">
      <div className="container flex flex-wrap items-center justify-between py-2">
        <Link to={ROOT}>
          <Label className="text-2xl font-bold">LWD</Label>
        </Link>
        <div className="flex md:order-2 md:space-x-0 rtl:space-x-reverse">
          <div>
            <ModeToggle />
          </div>
          <div className="md:hidden">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to={DASHBOARD_PAGE}>
                  <Button size="icon" variant="ghost">
                    <LayoutDashboard />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary">
                <Label className="text-xs text-foreground">
                  Weather Dashboard
                </Label>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="md:hidden">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleOpenMobileSheet}
                >
                  <Menu />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary">
                <Label className="text-xs text-foreground">Menu</Label>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
          <div className="flex flex-col md:flex-row md:space-x-10 ">
            <Link to={ROOT}>
              <Label className="cursor-pointer text-base">Home</Label>
            </Link>
            <div>
              <Separator orientation="vertical" />
            </div>
            <Link to={DASHBOARD_PAGE}>
              <Label className="cursor-pointer text-base">Dashboard</Label>
            </Link>
            <div>
              <Separator orientation="vertical" />
            </div>
            <Link to={DASHBOARD_PAGE}>
              <Label className="cursor-pointer text-base">About</Label>
            </Link>
          </div>
        </div>
      </div>
      <MobileSheet
        open={openMobileSheet}
        handleClose={handleCloseMobileSheet}
      />
      <Separator />
    </nav>
  );
};

export default GlobalNavbar;
