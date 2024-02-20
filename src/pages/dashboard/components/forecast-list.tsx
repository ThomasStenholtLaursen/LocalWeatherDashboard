import { METJSONForecast } from "@/clients/weatherClient";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { convertStringToDate } from "@/helpers/convertStringToDate";
import { ChevronRight, CloudRainWind, Thermometer } from "lucide-react";
import { useMemo } from "react";

type ForecastListProps = {
  data: METJSONForecast | undefined;
};

const ForecastList = (props: ForecastListProps) => {
  const { data } = props;

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const uniqueDates = useMemo(() => {
    const dateStrings = data?.properties.timeseries.reduce(
      (dates: string[], forecastTimeStep) => {
        const date = forecastTimeStep.time.split("T")[0];
        if (!dates.includes(date)) {
          dates.push(date);
        }
        return dates;
      },
      [] as string[],
    );

    return dateStrings?.map((dateString) => convertStringToDate(dateString));
  }, [data]);

  return (
    <ScrollArea className="mt-1 h-96">
      {uniqueDates?.map((item, index) => (
        <Card key={index} className="mx-4 mt-0 p-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-xl">
                {isToday(item)
                  ? "Today"
                  : item.toLocaleDateString("en-GB", {
                      weekday: "long",
                    })}
              </Label>
              <div className="flex items-center space-x-2">
                <Label>
                  {item.toLocaleDateString("en-GB", {
                    month: "long",
                    day: "numeric",
                  })}
                </Label>
              </div>
            </div>
            <div className="">
              <div className="flex items-center space-x-2">
                <Thermometer size={20} />
                <Label className="text-md">18&deg;</Label>
              </div>
              <div className="flex items-center space-x-2">
                <CloudRainWind size={20} />
                <Label className="text-md">0-9 mm</Label>
              </div>
            </div>
            <ChevronRight size={25} />
          </div>
        </Card>
      ))}
    </ScrollArea>
  );
};

export default ForecastList;
