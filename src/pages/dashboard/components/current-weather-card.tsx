import { ForecastTimeStep, ForecastUnits } from "@/clients/weatherClient";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { calculateWindChill } from "@/helpers/calculateWindChill";
import { convertStringToDate } from "@/helpers/convertStringToDate";
import { weatherIconMapping } from "@/lib/weatherIcons";
import { Label } from "@radix-ui/react-label";
import { Droplets, Umbrella, Wind } from "lucide-react";
import { useMemo } from "react";
import HourTabs from "./hour-tabs";
import WeatherCardDetail from "./weather-card-detail";

type CurrentWeatherCardProps = {
  currentForecastTimestep: ForecastTimeStep | undefined;
  forecastUnits: ForecastUnits | undefined;
};

function CurrentWeatherCard(props: CurrentWeatherCardProps) {
  const { currentForecastTimestep, forecastUnits } = props;
  const temp =
    currentForecastTimestep?.data.instant.details?.air_temperature || 0;
  const wSpeed = currentForecastTimestep?.data.instant.details?.wind_speed || 0;
  const WeatherIcon =
    weatherIconMapping[
      currentForecastTimestep?.data.next_1_hours?.summary.symbol_code ?? "rain"
    ];

  const currentDate = useMemo(() => {
    return currentForecastTimestep?.time
      ? convertStringToDate(currentForecastTimestep?.time).toLocaleString(
          "da-DK",
          {
            dateStyle: "medium",
            timeStyle: "short",
          },
        )
      : undefined;
  }, [currentForecastTimestep?.time]);

  const windChill = useMemo(() => {
    return calculateWindChill(temp, wSpeed);
  }, [temp, wSpeed]);

  return (
    <Card className=" mx-3 bg-gradient-to-b from-primary/40 to-background">
      <CardHeader className="p-4">
        <CardTitle className="text-2xl">Today</CardTitle>
        <CardTitle className="text-lg">{currentDate}</CardTitle>
        <CardDescription>
          Current conditions @ Rosenkrantzgade 19B
        </CardDescription>
        <CardContent className="p-0 px-3">
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col justify-center space-y-2">
              <div className="flex items-center">
                <Label className="text-5xl">
                  {Math.round(temp)}
                  &deg;
                </Label>
                <div className="ml-2 mt-2">{WeatherIcon(35)}</div>
              </div>
              <div className="flex items-center space-x-1">
                <Label className="text-md text-muted-foreground ">
                  Feels like
                </Label>
                <Label className="text-md">
                  {windChill}
                  &deg;
                </Label>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <WeatherCardDetail
                key={"wind"}
                icon={Wind}
                information={`${Math.round(currentForecastTimestep?.data.instant.details?.wind_speed ?? 0)} (${Math.round(currentForecastTimestep?.data.instant.details?.wind_speed_of_gust ?? 0)})`}
                unit={`${forecastUnits?.wind_speed}`}
                description="Wind speed"
              />
              <WeatherCardDetail
                key={"humidity"}
                icon={Droplets}
                information={`${currentForecastTimestep?.data.instant.details?.relative_humidity}`}
                unit={`${forecastUnits?.relative_humidity}`}
                description="Humidity"
              />
              <WeatherCardDetail
                key={"precipitation"}
                icon={Umbrella}
                information={`${currentForecastTimestep?.data.next_1_hours?.details.precipitation_amount}`}
                unit={`${forecastUnits?.precipitation_amount}`}
                description="Precipitation"
              />
            </div>
          </div>
        </CardContent>
      </CardHeader>
      <CardFooter className="p-4 pt-0">
        <HourTabs forecastData={currentForecastTimestep?.data} />
      </CardFooter>
    </Card>
  );
}

export default CurrentWeatherCard;
