import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { formatDateFullDateAndTime } from "@/helpers/dateFormatters";
import { useFetchWeather } from "@/hooks/api/useFetchWeather";
import { BD_LATITUDE, BD_LONGITUDE } from "@/lib/defaults";
import { LineChart } from "lucide-react";
import { useMemo } from "react";
import DayForecastLineChart from "./components/DayForecastLineChart";
import ForecastScrollList from "./components/ForecastScrollList";
import WeatherDetailCards from "./components/WeatherDetailCards";

export interface Forecast {
  time: string | undefined;
  temp: number | undefined;
  pre: number | undefined;
}

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

  const currentDateAndTime = useMemo(() => {
    return formatDateFullDateAndTime(currentDateTimeData?.time);
  }, [currentDateTimeData?.time]);

  if (!weatherData) {
    return (
      <>
        <div>Error...</div>
      </>
    );
  }

  return (
    <div className="container mx-auto pb-10 pt-24 sm:px-6">
      <Card className="bg-transparent from-primary/10 to-background px-4 pb-4 md:block md:rounded-lg md:border md:bg-gradient-to-t">
        <CardHeader className="px-2 py-6">
          <CardTitle className="text-4xl">Rosenkrantzgade 19B</CardTitle>
          <CardDescription className="text-md flex flex-col space-y-2">
            <Label>Current conditions</Label>
            <Label className="lg:hidden">{currentDateAndTime}</Label>
          </CardDescription>
        </CardHeader>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-5">
          {weatherData && currentDateTimeData && (
            <WeatherDetailCards
              currentForecastTimestep={currentDateTimeData}
              forecastUnits={weatherData.properties.meta.units}
            />
          )}
          <Card className="col-span-2 md:col-span-2 lg:col-span-2">
            {weatherData && <ForecastScrollList weatherData={weatherData} />}
          </Card>
          <Card className="col-span-2 flex-col justify-end lg:col-span-3 lg:block">
            <div className="flex items-center justify-between p-5 ">
              <Label className="text-md text-muted-foreground md:text-lg">
                Next 24 hours
              </Label>
              <div className="text-muted-foreground">
                <LineChart size={25} />
              </div>
            </div>
            <div className="h-5/6">
              {weatherData && <DayForecastLineChart data={weatherData} />}
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}

export default DashboardPage;
