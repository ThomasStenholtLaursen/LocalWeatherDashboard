import { ForecastTimeStep } from "@/clients/metWeatherClient";
import { useFetchWeather } from "@/hooks/api/useFetchWeather";
import { BD_LATITUDE, BD_LONGITUDE } from "@/lib/defaults";
import { useMemo } from "react";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ForecastList from "./components/ForecastList";

export type HourlyForecastsByDay = {
  key: string;
  hourlyForecasts: ForecastTimeStep[];
};

function DashboardPage() {
  const { data: weatherData } = useFetchWeather(BD_LATITUDE, BD_LONGITUDE);

  const currentDateTimeData = useMemo(() => {
    if (weatherData) {
      const today = new Date();

      const forecast = weatherData.properties.timeseries.find((item) => {
        const itemDate = new Date(item.time);

        return (
          itemDate.getFullYear() === today.getFullYear() &&
          itemDate.getMonth() === today.getMonth() &&
          (itemDate.getDate() === today.getDate() ||
            (today.getHours() === 23 &&
              itemDate.getDate() === today.getDate() + 1 &&
              itemDate.getHours() === 0)) &&
          (itemDate.getHours() === today.getHours() ||
            (today.getHours() === 23 && itemDate.getHours() === 0))
        );
      });

      return forecast;
    }
    return undefined;
  }, [weatherData]);

  const dailyForecasts = useMemo(() => {
    if (weatherData) {
      const forecastsByDay: Record<string, ForecastTimeStep[]> = {};
      const result: HourlyForecastsByDay[] = [];

      weatherData.properties.timeseries.forEach((forecastTimeStep) => {
        const date = forecastTimeStep.time.split("T")[0];

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
    <div className="mx-auto max-w-7xl px-3 pb-2 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <CurrentWeatherCard
          currentForecastTimestep={currentDateTimeData}
          forecastUnits={weatherData?.properties.meta.units}
        />
        <ForecastList hourlyForecastsForMultipleDays={dailyForecasts} />
      </div>
    </div>
  );
}

export default DashboardPage;
