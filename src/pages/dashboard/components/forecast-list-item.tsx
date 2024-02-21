import { ForecastTimeStep } from "@/clients/weatherClient";
import { Card } from "@/components/ui/card";
import { DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import { useMemo } from "react";
import ForecastsDialog from "./forecasts-dialog";

type ForecastListItemProps = {
  date: Date;
  hourlyForecasts: ForecastTimeStep[];
};

const ForecastListItem = (props: ForecastListItemProps) => {
  const { date, hourlyForecasts } = props;

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const temperatureRange = useMemo(() => {
    if (hourlyForecasts.length > 0) {
      let highest = hourlyForecasts[0].data.instant.details?.air_temperature;
      let lowest = hourlyForecasts[0].data.instant.details?.air_temperature;

      hourlyForecasts.forEach((forecast) => {
        const temperature = forecast.data.instant.details?.air_temperature ?? 0;
        highest = Math.max(highest ?? 0, temperature);
        lowest = Math.min(lowest ?? 0, temperature);
      });
      highest = Math.round(highest ?? 0);
      lowest = Math.round(lowest ?? 0);

      return { highest, lowest };
    }
    return { highest: null, lowest: null };
  }, [hourlyForecasts]);

  const totalPrecipitation = useMemo(() => {
    return hourlyForecasts.reduce((total, forecast) => {
      const precipitation =
        forecast.data.next_1_hours?.details.precipitation_amount || 0;
      return Math.round(total + precipitation);
    }, 0);
  }, [hourlyForecasts]);

  const meanWindspeed = useMemo(() => {
    const totalWindspeed = hourlyForecasts.reduce((total, forecast) => {
      const windspeed = forecast.data.instant.details?.wind_speed || 0;
      return total + windspeed;
    }, 0);
    const averageWindspeed = totalWindspeed / hourlyForecasts.length;
    return Math.round(averageWindspeed);
  }, [hourlyForecasts]);

  return (
    <ForecastsDialog hourlyForecastsByDay={hourlyForecasts}>
      <DialogTrigger asChild>
        <Card className="mb-2 cursor-pointer p-3 hover:pointer-events-auto hover:bg-primary/10">
          <div className="flex items-center space-x-4">
            <div className="flex w-10 flex-col">
              <Label className="text-md">
                {isToday(date)
                  ? "Today"
                  : date.toLocaleDateString("en-GB", {
                      weekday: "short",
                    })}
              </Label>
              <Label className="text-xs">
                {date.toLocaleDateString("en-GB", {
                  month: "short",
                  day: "numeric",
                })}
              </Label>
            </div>
            <div className="flex flex-grow items-center justify-center space-x-3">
              <div className="flex items-center">
                <Label className="text-sm">
                  {temperatureRange.highest}&deg; / {temperatureRange.lowest}
                  &deg;
                </Label>
              </div>
              <Separator orientation="vertical" className="h-7" />
              <div className="flex items-center space-x-1">
                <Label className="text-sm">{totalPrecipitation} mm</Label>
              </div>
              <Separator orientation="vertical" className="h-7" />
              <div className="flex items-center space-x-1">
                <Label className="text-sm">{meanWindspeed} m/s</Label>
              </div>
            </div>
            <div className="flex justify-end">
              <ChevronRight />
            </div>
          </div>
        </Card>
      </DialogTrigger>
    </ForecastsDialog>
  );
};

export default ForecastListItem;
