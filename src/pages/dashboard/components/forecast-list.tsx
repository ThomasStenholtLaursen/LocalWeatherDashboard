import { ScrollArea } from "@/components/ui/scroll-area";
import { HourlyForecastsByDay } from "../dashboard";
import ForecastListItem from "./forecast-list-item";

type ForecastListProps = {
  hourlyForecastsForMultipleDays: HourlyForecastsByDay[] | undefined;
};

const ForecastList = (props: ForecastListProps) => {
  const { hourlyForecastsForMultipleDays } = props;

  return (
    <ScrollArea className="mt-2 h-[450px] px-3">
      {hourlyForecastsForMultipleDays &&
        hourlyForecastsForMultipleDays.map(
          ({ key, hourlyForecasts }, index) => (
            <ForecastListItem
              key={index}
              date={new Date(key)}
              hourlyForecasts={hourlyForecasts}
            />
          ),
        )}
    </ScrollArea>
  );
};

export default ForecastList;
