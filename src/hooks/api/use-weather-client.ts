import { useContext } from "react";
import { YrWeatherClientContext } from "../../components/providers/provider/yr-weather-api-provider";

export function useWeatherClient() {
  const context = useContext(YrWeatherClientContext);
  if (context === undefined) {
    throw new Error(
      "useWeatherClient must be used within a WeatherClienProvider",
    );
  }
  return context;
}
