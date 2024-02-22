import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DASHBOARD_PAGE } from "@/lib/paths";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="flex-1">
      <div className="flex h-[90vh] items-center justify-center px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl text-center">
          <div className="mb-2">
            <Label className="text-3xl font-bold sm:text-4xl">
              Local Weather Dashboard
            </Label>
          </div>
          <div>
            <Label className="text-3xl font-semibold sm:text-4xl">
              Always keep track of the weather
            </Label>
          </div>
          <br />
          <div className="mt-2">
            <Label className="text-lg font-normal text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Label>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Link to={DASHBOARD_PAGE}>
              <Button>Explore dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
