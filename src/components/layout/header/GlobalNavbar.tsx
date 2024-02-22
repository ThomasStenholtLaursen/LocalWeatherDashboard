import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
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
    <header className=" sticky top-0 z-50 w-full border-b border-border/80 backdrop-blur-md">
      <div className="ml-3 mr-3 flex flex-wrap items-center justify-between py-2 md:container">
        <Link to={ROOT}>
          <Label className="cursor-pointer text-2xl font-bold">LWD</Label>
        </Link>
        <div className="flex md:order-2 md:space-x-4 rtl:space-x-reverse">
          <div>
            <ModeToggle />
          </div>
          <div>
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
          <div className="lg:hidden">
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
      </div>
      <MobileSheet
        open={openMobileSheet}
        handleClose={handleCloseMobileSheet}
      />
    </header>
  );
};

export default GlobalNavbar;
