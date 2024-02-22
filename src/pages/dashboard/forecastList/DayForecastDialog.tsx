import { ForecastTimeStep } from "@/clients/metWeatherClient";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  formatDateMonthAndWeekday,
  formatDateToTime,
} from "@/helpers/dateFormatters";

type DayForecastDialogProps = {
  hourlyForecastsByDay: ForecastTimeStep[] | undefined;
  children: React.ReactNode;
};

export function DayForecastDialog(props: DayForecastDialogProps) {
  const { children, hourlyForecastsByDay } = props;

  return (
    <Dialog>
      {children}
      <DialogContent className="max-w-[350px] md:max-w-[600px]">
        <DialogHeader className="pb-2">
          <DialogTitle>
            {hourlyForecastsByDay &&
              formatDateMonthAndWeekday(hourlyForecastsByDay[0].time)}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[450px] px-4 pb-2">
          <table className="w-full table-auto">
            <thead className="">
              <tr className="border-b text-center">
                <th className="pb-2  text-xs md:text-base">
                  <p>Time</p>
                  <p className="text-muted-foreground">(Hour)</p>
                </th>
                <th className="pb-2 text-xs md:text-base">
                  <p>Temperature</p>
                  <p className="text-muted-foreground">(&deg;C)</p>
                </th>
                <th className=" pb-2 text-xs md:text-base">
                  <p>Precipitation</p>
                  <p className="text-muted-foreground">(mm)</p>
                </th>
                <th className="pb-2 text-xs md:text-base">
                  <p>Wind</p>
                  <p className="text-muted-foreground">(m/s)</p>
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {hourlyForecastsByDay &&
                hourlyForecastsByDay.map((forecast, index) => (
                  <tr className="border-b py-2" key={index}>
                    <td className="py-2 md:text-xl">
                      {formatDateToTime(forecast.time)}
                    </td>
                    <td className="py-2 md:text-xl">
                      {Math.round(
                        forecast.data.instant.details?.air_temperature ?? 0,
                      )}
                    </td>
                    <td className="py-2 md:text-xl">
                      {forecast.data.next_1_hours?.details
                        .precipitation_amount_min !== undefined &&
                      forecast.data.next_1_hours?.details
                        .precipitation_amount_max !== undefined
                        ? `${forecast.data.next_1_hours.details.precipitation_amount_min}-${forecast.data.next_1_hours.details.precipitation_amount_max}`
                        : ""}
                    </td>
                    <td className="py-2 md:text-xl">
                      {Math.round(
                        forecast.data.instant.details?.wind_speed ?? 0,
                      )}{" "}
                      (
                      {Math.round(
                        forecast.data.instant.details?.wind_speed_of_gust ?? 0,
                      )}
                      )
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default DayForecastDialog;
