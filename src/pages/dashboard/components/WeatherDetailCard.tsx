import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";

type WeatherDetailCardProps = {
  title: string;
  footer: string | undefined;
  children: React.ReactNode;
  icon: React.ComponentType<{ size?: string | number }>;
  hideFooter?: boolean;
  className?: string;
};

const WeatherDetailCard = React.forwardRef<
  HTMLDivElement,
  WeatherDetailCardProps & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const {
    title,
    children,
    footer,
    className,
    hideFooter,
    icon: Icon,
    ...rest
  } = props;

  return (
    <Card ref={ref} className={cn("lg:block", className)} {...rest}>
      <CardHeader className="p-3">
        <div className="flex items-center justify-between">
          <Label className="text-md text-muted-foreground md:text-lg">
            {title}
          </Label>
          <div className="text-muted-foreground md:hidden">
            <Icon size={16} />
          </div>
          <div className=" mr-1 hidden text-muted-foreground md:block">
            <Icon size={20} />
          </div>
        </div>
      </CardHeader>
      <div className="flex items-center justify-center">{children}</div>
      {!hideFooter && (
        <CardFooter className=" items-baseline p-4 pb-2">
          <Label className="text-xs text-muted-foreground md:text-sm">
            {footer}
          </Label>
        </CardFooter>
      )}
    </Card>
  );
});

export default WeatherDetailCard;
