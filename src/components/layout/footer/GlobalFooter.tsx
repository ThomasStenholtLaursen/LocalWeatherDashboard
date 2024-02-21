import { Separator } from "@/components/ui/separator";
import { Github, Info, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function GlobalFooter() {
  return (
    <footer>
      <Separator />
      <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to={"www.linkedin.com/in/thomas-stenholt-laursen-697b3721a"}>
            <Linkedin className="text-muted-foreground" />
          </Link>

          <Link
            to={
              "https://github.com/ThomasStenholtLaursen/LocalWeatherDashboard"
            }
          >
            <Github className="text-muted-foreground" />
          </Link>

          <Link to={""}>
            <Info className="text-muted-foreground" />
          </Link>
        </div>
        <div className="mt-5 md:order-1 md:mt-0">
          <p className="text-center text-xs font-medium text-muted-foreground">
            &copy; 2024 Local Weather Dashboard.
          </p>
        </div>
      </div>
    </footer>
  );
}
