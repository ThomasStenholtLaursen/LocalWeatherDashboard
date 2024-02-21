import { useContext } from "react";
import { MetWeatherApiContext } from "../../components/providers/provider/MetWeatherApiProvider";

export function useMetWeatherClient() {
  const context = useContext(MetWeatherApiContext);
  if (context === undefined) {
    throw new Error(
      "useWeatherClient must be used within a WeatherClienProvider",
    );
  }
  return context;
}
