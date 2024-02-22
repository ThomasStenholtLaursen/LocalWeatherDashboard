import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { DASHBOARD_PAGE, ROOT } from "@/lib/paths";
import { Link } from "react-router-dom";

type MobileSheetProps = {
  open: boolean;
  handleClose: () => void;
};

function MobileSheet(props: MobileSheetProps) {
  const { open, handleClose } = props;

  return (
    <>
      <Sheet open={open} onOpenChange={handleClose}>
        <SheetContent>
          <SheetHeader className="space-y-0 pb-5 pt-5">
            <SheetTitle className="text-center text-lg">
              Local Weather Dashboard
            </SheetTitle>
            <Separator />
            <SheetDescription className="pt-2 text-center text-xs">
              Current coditions and forecast for a specific location. Enjoy!
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 ">
            <Link
              to={ROOT}
              className="rounded p-2 hover:bg-primary/20"
              onClick={handleClose}
            >
              <Label className="cursor-pointer text-base">Home</Label>
            </Link>
            <Link
              to={DASHBOARD_PAGE}
              className="rounded p-2 hover:bg-primary/20"
              onClick={handleClose}
            >
              <Label className="cursor-pointer text-base">Dashboard</Label>
            </Link>
            <Link
              to={ROOT}
              className="rounded p-2 hover:bg-primary/20"
              onClick={handleClose}
            >
              <Label className="cursor-pointer text-base">About</Label>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileSheet;
