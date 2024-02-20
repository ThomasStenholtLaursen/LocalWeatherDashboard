import { useFetchWeather } from "@/hooks/api/use-fetch-weather";
import { BD_LATITUDE, BD_LONGITUDE } from "@/lib/defaults";
import { useMemo } from "react";
import CurrentWeatherCard from "./components/current-weather-card";
import ForecastList from "./components/forecast-list";

function Dashboard() {
  const { data: weatherData } = useFetchWeather(BD_LATITUDE, BD_LONGITUDE);

  const currentDateTimeData = useMemo(() => {
    if (weatherData) {
      let today = new Date();
      let roundedHour =
        today.getMinutes() > 30 ? today.getHours() + 1 : today.getHours();
      if (roundedHour === 24) {
        roundedHour = 0;
        today = new Date(today.getTime() + 1000 * 60 * 60 * 24); // add 24 hours to today
      }
      const forecast = weatherData.properties.timeseries.find((item) => {
        const itemDate = new Date(item.time);
        return (
          itemDate.getHours() === roundedHour &&
          itemDate.getDate() === today.getDate() &&
          itemDate.getMonth() === today.getMonth() &&
          itemDate.getFullYear() === today.getFullYear()
        );
      });
      return forecast;
    }
    return undefined;
  }, [weatherData]);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <CurrentWeatherCard
          forecastTimeStep={currentDateTimeData}
          forecastUnits={weatherData?.properties.meta.units}
        />
        <ForecastList data={weatherData} />
      </div>
    </div>
  );
}

export default Dashboard;
