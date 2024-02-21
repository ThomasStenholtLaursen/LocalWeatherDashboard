import { WeatherSymbol } from "@/clients/weatherClient";
import {
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  Cloudy,
  Moon,
  Snowflake,
  Sun,
} from "lucide-react";

type WeatherIconMapping = {
  [key in WeatherSymbol]: (size: number) => JSX.Element;
};

export const weatherIconMapping: WeatherIconMapping = {
  clearsky_day: (size) => <Sun size={size} />,
  clearsky_night: (size) => <Moon size={size} />,
  clearsky_polartwilight: (size) => <Moon size={size} />,
  fair_day: (size) => <CloudSun size={size} />,
  fair_night: (size) => <CloudMoon size={size} />,
  fair_polartwilight: (size) => <CloudMoon size={size} />,
  lightssnowshowersandthunder_day: (size) => <CloudLightning size={size} />,
  lightssnowshowersandthunder_night: (size) => <CloudLightning size={size} />,
  lightssnowshowersandthunder_polartwilight: (size) => (
    <CloudLightning size={size} />
  ),
  lightsnowshowers_day: (size) => <CloudSnow size={size} />,
  lightsnowshowers_night: (size) => <CloudSnow size={size} />,
  lightsnowshowers_polartwilight: (size) => <CloudSnow size={size} />,
  heavyrainandthunder: (size) => <CloudLightning size={size} />,
  heavysnowandthunder: (size) => <CloudLightning size={size} />,
  rainandthunder: (size) => <CloudLightning size={size} />,
  heavysleetshowersandthunder_day: (size) => <CloudRainWind size={size} />,
  heavysleetshowersandthunder_night: (size) => <CloudRainWind size={size} />,
  heavysleetshowersandthunder_polartwilight: (size) => (
    <CloudRainWind size={size} />
  ),
  heavysnow: (size) => <CloudSnow size={size} />,
  heavyrainshowers_day: (size) => <CloudSnow size={size} />,
  heavyrainshowers_night: (size) => <CloudSnow size={size} />,
  heavyrainshowers_polartwilight: (size) => <CloudSnow size={size} />,
  lightsleet: (size) => <CloudSnow size={size} />,
  heavyrain: (size) => <CloudRain size={size} />,
  lightrainshowers_day: (size) => <CloudDrizzle size={size} />,
  lightrainshowers_night: (size) => <CloudDrizzle size={size} />,
  lightrainshowers_polartwilight: (size) => <CloudDrizzle size={size} />,
  heavysleetshowers_day: (size) => <CloudRain size={size} />,
  heavysleetshowers_night: (size) => <CloudRain size={size} />,
  heavysleetshowers_polartwilight: (size) => <CloudRain size={size} />,
  lightsleetshowers_day: (size) => <CloudRain size={size} />,
  lightsleetshowers_night: (size) => <CloudRain size={size} />,
  lightsleetshowers_polartwilight: (size) => <CloudRain size={size} />,
  snow: (size) => <Snowflake size={size} />,
  heavyrainshowersandthunder_day: (size) => <CloudLightning size={size} />,
  heavyrainshowersandthunder_night: (size) => <CloudLightning size={size} />,
  heavyrainshowersandthunder_polartwilight: (size) => (
    <CloudLightning size={size} />
  ),
  snowshowers_day: (size) => <CloudSnow size={size} />,
  snowshowers_night: (size) => <CloudSnow size={size} />,
  snowshowers_polartwilight: (size) => <CloudSnow size={size} />,
  fog: (size) => <CloudFog size={size} />,
  snowshowersandthunder_day: (size) => <CloudSnow size={size} />,
  snowshowersandthunder_night: (size) => <CloudSnow size={size} />,
  snowshowersandthunder_polartwilight: (size) => <CloudSnow size={size} />,
  lightsnowandthunder: (size) => <CloudSnow size={size} />,
  heavysleetandthunder: (size) => <CloudSnow size={size} />,
  lightrain: (size) => <CloudRain size={size} />,
  rainshowersandthunder_day: (size) => <CloudLightning size={size} />,
  rainshowersandthunder_night: (size) => <CloudLightning size={size} />,
  rainshowersandthunder_polartwilight: (size) => <CloudLightning size={size} />,
  rain: (size) => <CloudRain size={size} />,
  lightsnow: (size) => <CloudSnow size={size} />,
  lightrainshowersandthunder_day: (size) => <CloudRain size={size} />,
  lightrainshowersandthunder_night: (size) => <CloudRain size={size} />,
  lightrainshowersandthunder_polartwilight: (size) => <CloudRain size={size} />,
  heavysleet: (size) => <CloudHail size={size} />,
  sleetandthunder: (size) => <CloudHail size={size} />,
  lightrainandthunder: (size) => <CloudHail size={size} />,
  sleet: (size) => <CloudHail size={size} />,
  lightssleetshowersandthunder_day: (size) => <CloudHail size={size} />,
  lightssleetshowersandthunder_night: (size) => <CloudHail size={size} />,
  lightssleetshowersandthunder_polartwilight: (size) => (
    <CloudHail size={size} />
  ),
  lightsleetandthunder: (size) => <CloudHail size={size} />,
  partlycloudy_day: (size) => <CloudSun size={size} />,
  partlycloudy_night: (size) => <CloudSun size={size} />,
  partlycloudy_polartwilight: (size) => <CloudSun size={size} />,
  sleetshowersandthunder_day: (size) => <CloudLightning size={size} />,
  sleetshowersandthunder_night: (size) => <CloudLightning size={size} />,
  sleetshowersandthunder_polartwilight: (size) => (
    <CloudLightning size={size} />
  ),
  rainshowers_day: (size) => <CloudRainWind size={size} />,
  rainshowers_night: (size) => <CloudRainWind size={size} />,
  rainshowers_polartwilight: (size) => <CloudRainWind size={size} />,
  snowandthunder: (size) => <CloudRainWind size={size} />,
  sleetshowers_day: (size) => <CloudHail size={size} />,
  sleetshowers_night: (size) => <CloudHail size={size} />,
  sleetshowers_polartwilight: (size) => <CloudHail size={size} />,
  cloudy: (size) => <Cloudy size={size} />,
  heavysnowshowersandthunder_day: (size) => <CloudSnow size={size} />,
  heavysnowshowersandthunder_night: (size) => <CloudSnow size={size} />,
  heavysnowshowersandthunder_polartwilight: (size) => <CloudSnow size={size} />,
  heavysnowshowers_day: (size) => <CloudSnow size={size} />,
  heavysnowshowers_night: (size) => <CloudSnow size={size} />,
  heavysnowshowers_polartwilight: (size) => <CloudSnow size={size} />,
};