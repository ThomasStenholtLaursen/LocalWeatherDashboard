import { Data } from "@/clients/metWeatherClient";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CloudRain, Thermometer, Umbrella } from "lucide-react";

type HourTabsProps = {
  forecastData: Data | undefined;
};

function CurrentHourTabs({ forecastData }: HourTabsProps) {
  return (
    <Tabs defaultValue="1H" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="1H">1 Hour</TabsTrigger>
        <TabsTrigger value="6H">6 Hours</TabsTrigger>
        <TabsTrigger value="12H">12 Hours</TabsTrigger>
      </TabsList>
      <TabsContent value="1H">
        <Card className="p-3 pl-5 pr-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Thermometer size={20} />
              <Label className="text-md">
                {`${Math.round(forecastData?.instant.details?.air_temperature ?? 0)}`}
                &deg;
              </Label>
              <Label className="text-xs text-muted-foreground"></Label>
            </div>
            <div className="flex items-center space-x-2">
              <Umbrella size={20} />
              <Label className="text-md">
                {`${Math.round(forecastData?.next_1_hours?.details.precipitation_amount_min ?? 0)}-${Math.round(forecastData?.next_1_hours?.details.precipitation_amount_max ?? 0)} mm`}
              </Label>
              <Label className="text-xs text-muted-foreground"></Label>
            </div>
            <div className="flex items-center space-x-2">
              <CloudRain size={20} />
              <Label className="text-md">
                {`${Math.round(forecastData?.next_1_hours?.details.probability_of_precipitation ?? 0)} %`}
              </Label>
              <Label className="text-xs text-muted-foreground"></Label>
            </div>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="6H">
        <Card className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Thermometer size={20} />
              <Label className="text-md">
                {`${Math.round(forecastData?.next_6_hours?.details.air_temperature_min ?? 0)}-${Math.round(forecastData?.next_6_hours?.details.air_temperature_max ?? 0)}`}
                &deg;
              </Label>
              <Label className="text-xs text-muted-foreground"></Label>
            </div>
            <div className="flex items-center space-x-1">
              <Umbrella size={20} />
              <Label className="text-md">
                {`${Math.round(forecastData?.next_6_hours?.details.precipitation_amount_min ?? 0)}-${Math.round(forecastData?.next_6_hours?.details.precipitation_amount_max ?? 0)} mm`}
              </Label>
              <Label className="text-xs text-muted-foreground"></Label>
            </div>
            <div className="flex items-center space-x-2">
              <CloudRain size={20} />
              <Label className="text-md">
                {`${Math.round(forecastData?.next_6_hours?.details.probability_of_precipitation ?? 0)} %`}
              </Label>
              <Label className="text-xs text-muted-foreground"></Label>
            </div>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="12H">
        <Card className="p-3 ">
          <div className="flex items-center justify-center space-x-2">
            <CloudRain size={20} />
            <Label className="text-md">
              {`${Math.round(forecastData?.next_12_hours?.details.probability_of_precipitation ?? 0)} %`}
            </Label>
            <Label className="text-xs text-muted-foreground"></Label>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default CurrentHourTabs;
