import { Data } from "@/clients/weatherClient";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Thermometer, Umbrella } from "lucide-react";

type HourTabsProps = {
  forecastData: Data | undefined;
};

function HourTabs({ forecastData }: HourTabsProps) {
  return (
    <Tabs defaultValue="1H" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="1H">1 Hour</TabsTrigger>
        <TabsTrigger value="6H">6 Hours</TabsTrigger>
        <TabsTrigger value="12H">12 Hours</TabsTrigger>
      </TabsList>
      <TabsContent value="1H">
        <Card className="p-2">
          <div className="flex items-center space-x-2">
            <Thermometer size={20} />
            <Label className=" text-sm ">18&deg;</Label>
            <Label className="text-xs text-muted-foreground"></Label>
          </div>
          <div className="flex items-center space-x-2">
            <Umbrella size={20} />
            <Label className=" text-sm">
              {forecastData?.next_1_hours?.details.probability_of_precipitation}
              %
            </Label>
            <Label className="text-xs text-muted-foreground">
              Precipitation
            </Label>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="6H">
        <Card className="p-2">
          <div className="flex items-center space-x-2">
            <Thermometer size={20} />
            <Label className=" text-sm ">18&deg;</Label>
            <Label className="text-xs text-muted-foreground">
              Precipitation
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Umbrella size={20} />
            <Label className=" text-sm ">0mm</Label>
            <Label className="text-xs text-muted-foreground">
              Precipitation
            </Label>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="12H">
        <Card className="p-2">
          <div className="flex items-center space-x-2">
            <Thermometer size={20} />
            <Label className=" text-sm ">18&deg;</Label>
            <Label className="text-xs text-muted-foreground">
              Precipitation
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Umbrella size={20} />
            <Label className="text-sm">0mm</Label>
            <Label className="text-xs text-muted-foreground">
              Precipitation
            </Label>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default HourTabs;
