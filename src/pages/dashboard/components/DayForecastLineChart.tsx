import { Separator } from "@/components/ui/separator";
import {
  Bar,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { Forecast } from "../DashboardPage";
import { useMemo } from "react";
import { METJSONForecast } from "@/clients/metWeatherClient";
import { formatDateToTime } from "@/helpers/dateFormatters";

type DayForecastLineChartProps = {
  data: METJSONForecast;
};
const DayForecastLineChart = (props: DayForecastLineChartProps) => {
  const { data } = props;

  const chartForecastData = useMemo(() => {
    if (data) {
      const result: Forecast[] = [];
      const currentTime = new Date();
      const nextDayTime = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000); // Get the time 24 hours from now

      data.properties.timeseries.forEach((forecastTimeStep) => {
        const forecastTime = new Date(forecastTimeStep.time);

        // Only forecasts that are in the future and within the next 24 hours
        if (forecastTime > currentTime && forecastTime <= nextDayTime) {
          const time = formatDateToTime(forecastTimeStep.time);

          const temp = forecastTimeStep.data.instant.details?.air_temperature;
          const pre =
            forecastTimeStep.data.next_1_hours?.details
              .precipitation_amount_max;

          result.push({
            time,
            temp,
            pre,
          });
        }
      });

      return result;
    }
    return undefined;
  }, [data]);

  const maxPrecipitationValue = Math.max(
    ...(chartForecastData ?? []).map((item) => item.pre ?? 0),
  );
  const roundedMaxDataValue = Math.round(maxPrecipitationValue);

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<ValueType, NameType>) => {
    if (active) {
      return (
        <div className="space-y-1  rounded-md  border bg-card p-2 text-center text-card-foreground shadow">
          <p className="text-base font-bold text-foreground">{label}</p>
          <Separator orientation="horizontal" />
          <div>
            <p className="label">{payload?.[1].value}&deg;C</p>
            <p className="label">{payload?.[0].value} mm</p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={chartForecastData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
        }}
      >
        <XAxis dataKey="time" tickLine={false} />
        <YAxis yAxisId="left" dataKey="temp" unit="°C" />
        <YAxis
          yAxisId="right"
          dataKey="pre"
          unit="mm"
          orientation="right"
          domain={[0, roundedMaxDataValue + 5]}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar yAxisId="right" dataKey="pre" barSize={20} fill="#348AA7" />
        <Line
          isAnimationActive={false}
          strokeWidth={3}
          dot={false}
          yAxisId="left"
          type="basis"
          dataKey="temp"
          stroke="#EF767A"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default DayForecastLineChart;
