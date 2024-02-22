import { ScrollArea } from "@/components/ui/scroll-area";
import ForecastListItem from "./ForecastListItem";
import { ForecastTimeStep, METJSONForecast } from "@/clients/metWeatherClient";
import { useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export type HourlyForecastsByDay = {
  key: string;
  hourlyForecasts: ForecastTimeStep[];
};

type ForecastScrollListProps = {
  weatherData: METJSONForecast | undefined;
  isLoading: boolean;
};

const ForecastScrollList = (props: ForecastScrollListProps) => {
  const { weatherData, isLoading } = props;

  // Forecasts by day and each hour
  const dailyForecasts = useMemo(() => {
    if (weatherData) {
      const forecastsByDay: Record<string, ForecastTimeStep[]> = {};
      const result: HourlyForecastsByDay[] = [];

      const currentTime = new Date();

      weatherData.properties.timeseries.forEach((forecastTimeStep) => {
        const forecastTime = new Date(forecastTimeStep.time);

        if (forecastTime.getHours() === currentTime.getHours()) {
          return;
        }

        const date = forecastTime.toISOString().split("T")[0];

        if (!forecastsByDay[date]) {
          forecastsByDay[date] = [];
        }

        forecastsByDay[date].push(forecastTimeStep);
      });

      for (const key in forecastsByDay) {
        result.push({
          key,
          hourlyForecasts: forecastsByDay[key],
        });
      }

      return result;
    }
    return undefined;
  }, [weatherData]);

  return (
    <ScrollArea className="h-[500px]">
      {isLoading ? (
        <>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="my-3 w-full rounded-lg px-3">
              <Skeleton className="h-14 flex-grow "></Skeleton>
            </div>
          ))}
        </>
      ) : (
        dailyForecasts &&
        dailyForecasts.map(({ key, hourlyForecasts }, index) => (
          <ForecastListItem
            key={index}
            date={new Date(key)}
            hourlyForecasts={hourlyForecasts}
          />
        ))
      )}
    </ScrollArea>
  );
};

export default ForecastScrollList;
