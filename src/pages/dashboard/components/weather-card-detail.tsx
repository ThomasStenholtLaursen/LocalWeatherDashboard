import { Label } from "@/components/ui/label";
import React from "react";

type WeatherCardDetailProps = {
  icon: React.ComponentType<{ size?: string | number }>;
  information: string | undefined;
  unit: string | undefined;
  description: string | undefined;
};

function WeatherCardDetail({
  icon: Icon,
  information,
  unit,
  description,
}: WeatherCardDetailProps) {
  return (
    <div className="flex items-center space-x-2">
      <Icon size={25} />
      <Label className="text-sm ">
        {information} {unit}
      </Label>
      <Label className="hidden text-xs text-muted-foreground sm:block">
        {description}
      </Label>
    </div>
  );
}

export default WeatherCardDetail;
