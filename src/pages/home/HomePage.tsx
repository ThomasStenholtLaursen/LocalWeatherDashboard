import { Label } from "@/components/ui/label";

export function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 md:container">
      <Label className="text-center text-xl sm:text-3xl md:text-4xl">
        Home
      </Label>
      <Label className="text-mg text-center sm:text-xl md:text-2xl">
        Wassup
      </Label>
    </div>
  );
}
