import { ScrollArea } from "@/components/ui/scroll-area";
import ForecastListItem from "./ForecastListItem";
import { ForecastTimeStep, METJSONForecast } from "@/clients/metWeatherClient";
import { useMemo } from "react";

export type HourlyForecastsByDay = {
  key: string;
  hourlyForecasts: ForecastTimeStep[];
};

type ForecastScrollListProps = {
  weatherData: METJSONForecast;
};

const ForecastScrollList = (props: ForecastScrollListProps) => {
  const { weatherData } = props;

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
      {dailyForecasts &&
        dailyForecasts.map(({ key, hourlyForecasts }, index) => (
          <ForecastListItem
            key={index}
            date={new Date(key)}
            hourlyForecasts={hourlyForecasts}
          />
        ))}
    </ScrollArea>
  );
};

export default ForecastScrollList;
