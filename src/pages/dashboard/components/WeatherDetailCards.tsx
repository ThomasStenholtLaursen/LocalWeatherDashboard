import { ForecastTimeStep, ForecastUnits } from "@/clients/metWeatherClient";
import { calculateWindChill } from "@/helpers/calculateWindChill";
import {
  formatDateFullDateAndTime,
  formatDateWeekday,
} from "@/helpers/dateFormatters";
import { WeatherIconMapping } from "@/utils/WeatherIconMapping";
import { Label } from "@radix-ui/react-label";
import { Calendar, Droplets, Thermometer, Umbrella, Wind } from "lucide-react";
import { useMemo } from "react";
import WeatherDetailCard from "./WeatherDetailCard";

type WeatherDetailCardsProps = {
  currentForecastTimestep: ForecastTimeStep;
  forecastUnits: ForecastUnits;
};

const WeatherDetailCards = (props: WeatherDetailCardsProps) => {
  const { currentForecastTimestep, forecastUnits } = props;
  const temp =
    currentForecastTimestep?.data.instant.details?.air_temperature || 0;
  const wSpeed = currentForecastTimestep?.data.instant.details?.wind_speed || 0;
  const WeatherIcon =
    WeatherIconMapping[
      currentForecastTimestep?.data.next_1_hours?.summary.symbol_code ?? "rain"
    ];

  const windChill = useMemo(() => {
    return calculateWindChill(temp, wSpeed);
  }, [temp, wSpeed]);

  const currentWeekday = useMemo(() => {
    return formatDateWeekday(currentForecastTimestep?.time);
  }, [currentForecastTimestep?.time]);

  const currentDateAndTime = useMemo(() => {
    return formatDateFullDateAndTime(currentForecastTimestep?.time);
  }, [currentForecastTimestep?.time]);

  return (
    <>
      {/* Date Card */}
      <WeatherDetailCard
        title="Today"
        footer={currentDateAndTime}
        className="hidden"
        icon={Calendar}
      >
        <div className="flex items-center">
          <Label className="min-h-12 text-center text-2xl font-bold md:text-3xl">
            {currentWeekday}
          </Label>
        </div>
      </WeatherDetailCard>

      {/* Temperature Card */}
      <WeatherDetailCard
        title="Temperature"
        footer={`Feels like ${windChill}°C`}
        icon={Thermometer}
      >
        <div className="flex items-center">
          <Label className="text-4xl font-bold md:text-5xl">
            {Math.round(temp)}&deg;
          </Label>
          <div className="ml-2 hidden text-muted-foreground md:block">
            {WeatherIcon(40)}
          </div>
          <div className="ml-2 md:hidden">{WeatherIcon(30)}</div>
        </div>
      </WeatherDetailCard>
      <WeatherDetailCard
        title="Precipitation"
        footer="In the next hour"
        icon={Umbrella}
      >
        <div className="flex items-center">
          <Label className="text-4xl font-bold md:text-5xl">
            {
              currentForecastTimestep?.data.next_1_hours?.details
                .precipitation_amount
            }
          </Label>
          <Label className="ml-2 text-lg text-muted-foreground md:text-xl">
            {forecastUnits?.precipitation_amount}
          </Label>
        </div>
      </WeatherDetailCard>

      {/* WindSpeed Card */}
      <WeatherDetailCard
        title="Wind speed"
        footer={`Gusts of ${Math.round(
          currentForecastTimestep?.data.instant.details?.wind_speed_of_gust ??
            0,
        )} m/s`}
        icon={Wind}
      >
        <div className="flex items-center gap-x-1.5">
          <Label className="text-4xl font-bold md:text-5xl">
            {Math.round(
              currentForecastTimestep?.data.instant.details?.wind_speed ?? 0,
            )}
          </Label>

          <Label className="text-lg text-muted-foreground md:text-xl">
            {forecastUnits?.wind_speed}
          </Label>
        </div>
      </WeatherDetailCard>

      {/* Humidity Card */}
      <WeatherDetailCard
        title="Humidity"
        footer="Relative humidity"
        icon={Droplets}
      >
        <div className="flex items-center">
          <Label className="text-4xl font-bold md:text-5xl">
            {Math.round(
              currentForecastTimestep?.data.instant.details
                ?.relative_humidity ?? 0,
            )}
          </Label>
          <Label className="ml-2 text-lg text-muted-foreground md:text-xl">
            {forecastUnits?.relative_humidity}
          </Label>
        </div>
      </WeatherDetailCard>
    </>
  );
};

export default WeatherDetailCards;
