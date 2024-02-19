import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { DASHBOARD_PAGE } from "@/lib/paths";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fixed w-full bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between py-2 pl-6 pr-6">
        <div>
          <Link
            className="pr-4 text-2xl font-extrabold text-foreground"
            to={DASHBOARD_PAGE}
          >
            LWD
          </Link>
        </div>

        <div className="flex">
          <ModeToggle />
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default NavBar;
