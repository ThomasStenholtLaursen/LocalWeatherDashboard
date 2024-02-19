import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  CloudRainWind,
  Cloudy,
  Droplets,
  Thermometer,
  Umbrella,
  Wind,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="mx-auto h-screen max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div>
          <Card className="bg-gradient-to-t from-primary/20 to-background">
            <CardHeader>
              <CardTitle className="text-2xl">Today 19. feb</CardTitle>
              <CardDescription>
                Current conditions @ Rosenkrantzgade 19B
              </CardDescription>
              <CardContent className="p-0 pt-3">
                <div className="flex items-center justify-between ">
                  <div className="flex items-center">
                    <Label className="text-5xl">18&deg;</Label>
                    <Cloudy className="ml-2 mt-2" size={30} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1">
                      <Wind size={22} />
                      <Label className="text-sm ">5.2 m/s</Label>
                      <Label className="text-xs text-muted-foreground">
                        Wind speed
                      </Label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Droplets size={20} />
                      <Label className=" text-sm ">93.8 %</Label>
                      <Label className="text-xs text-muted-foreground">
                        Humidity
                      </Label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Umbrella size={20} />
                      <Label className=" text-sm ">0 mm</Label>
                      <Label className="text-xs text-muted-foreground">
                        Precipitation
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CardHeader>
            <CardFooter>
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
            </CardFooter>
          </Card>
          <Card className="mt-2 p-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-xl">Today</Label>
                <div className="flex items-center space-x-2">
                  <Label className="text-xs text-muted-foreground">
                    19. feb 2024
                  </Label>
                </div>
              </div>
              <div className="">
                <div className="flex items-center space-x-2">
                  <Thermometer size={20} />
                  <Label className="text-md">18&deg;</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <CloudRainWind size={20} />
                  <Label className="text-md">0-9 mm</Label>
                </div>
              </div>
              <ChevronRight size={25} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
