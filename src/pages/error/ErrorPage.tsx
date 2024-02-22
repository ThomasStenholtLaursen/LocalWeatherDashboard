import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ROOT } from "@/lib/paths";
import { useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Clicked home button.");
    navigate(ROOT);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 md:container">
      <Label className="text-center text-xl sm:text-3xl md:text-4xl">
        Oops! 😭
      </Label>
      <Label className="text-mg text-center sm:text-xl md:text-2xl">
        Something went terribly wrong.
      </Label>
      <Button onClick={handleClick}>Go back to homepage</Button>
    </div>
  );
}
