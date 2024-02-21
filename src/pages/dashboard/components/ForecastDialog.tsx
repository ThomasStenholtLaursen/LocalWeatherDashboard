import { ForecastTimeStep } from "@/clients/metWeatherClient";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type ForecastsDialogProps = {
  hourlyForecastsByDay: ForecastTimeStep[] | undefined;
  children: React.ReactNode;
};

export function ForecastsDialog(props: ForecastsDialogProps) {
  const { children, hourlyForecastsByDay } = props;
  return (
    <Dialog>
      {children}
      <DialogContent className="max-w-[350px] md:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Hourly</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[450px]">
          {hourlyForecastsByDay &&
            hourlyForecastsByDay.map((forecast, index) => (
              <div className="flex" key={index}>
                {forecast.time}
              </div>
            ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default ForecastsDialog;
