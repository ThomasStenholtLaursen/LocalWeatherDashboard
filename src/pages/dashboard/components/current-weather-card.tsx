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
import { Label } from "@radix-ui/react-label";
import { Cloudy, Droplets, Umbrella, Wind } from "lucide-react";
import { useMemo } from "react";
import HourTabs from "./hour-tabs";
import WeatherCardDetail from "./weather-card-detail";

type CurrentWeatherCardProps = {
  forecastTimeStep: ForecastTimeStep | undefined;
  forecastUnits: ForecastUnits | undefined;
};

function CurrentWeatherCard(props: CurrentWeatherCardProps) {
  const { forecastTimeStep, forecastUnits } = props;
  const temp = forecastTimeStep?.data.instant.details?.air_temperature || 0;
  const wSpeed = forecastTimeStep?.data.instant.details?.wind_speed || 0;

  function convertStringToDate(dateString: string): Date {
    return new Date(dateString);
  }

  const currentDate = useMemo(() => {
    return forecastTimeStep?.time
      ? convertStringToDate(forecastTimeStep.time).toLocaleString("en-GB", {
          dateStyle: "medium",
        })
      : null;
  }, [forecastTimeStep?.time]);

  const windChill = useMemo(() => {
    return calculateWindChill(temp, wSpeed);
  }, [temp, wSpeed]);

  return (
    <>
      <Card className="bg-gradient-to-t from-primary/20 to-background">
        <CardHeader>
          <CardTitle className="text-2xl">Today</CardTitle>
          <CardTitle className="text-lg">{currentDate}</CardTitle>
          <CardDescription>
            Current conditions @ Rosenkrantzgade 19B
          </CardDescription>
          <CardContent className="p-0 pt-5">
            <div className="flex flex-row justify-between ">
              <div className="flex flex-col justify-center space-y-2">
                <div className="flex items-center">
                  <Label className="text-5xl">
                    {Math.round(temp)}
                    &deg;
                  </Label>
                  <Cloudy className="ml-2 mt-2" size={35} />
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
              <div className="flex flex-col space-y-3">
                <WeatherCardDetail
                  key={"wind"}
                  icon={Wind}
                  information={`${forecastTimeStep?.data.instant.details?.wind_speed} (${forecastTimeStep?.data.instant.details?.wind_speed_of_gust})`}
                  unit={`${forecastUnits?.wind_speed}`}
                  description="Wind speed"
                />
                <WeatherCardDetail
                  key={"humidity"}
                  icon={Droplets}
                  information={`${forecastTimeStep?.data.instant.details?.relative_humidity}`}
                  unit={`${forecastUnits?.relative_humidity}`}
                  description="Humidity"
                />
                <WeatherCardDetail
                  key={"precipitation"}
                  icon={Umbrella}
                  information={`${forecastTimeStep?.data.next_1_hours?.details.precipitation_amount}`}
                  unit={`${forecastUnits?.precipitation_amount}`}
                  description="Precipitation"
                />
              </div>
            </div>
          </CardContent>
        </CardHeader>
        <CardFooter>
          <HourTabs forecastData={forecastTimeStep?.data} />
        </CardFooter>
      </Card>
    </>
  );
}

export default CurrentWeatherCard;
