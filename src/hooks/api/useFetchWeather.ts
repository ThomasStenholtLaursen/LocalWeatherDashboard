import { useMetWeatherClient } from "@/hooks/clients/useMetWeatherClient";
import { useQuery } from "react-query";

export const useFetchWeather = (latitude: number, longitude: number) => {
  const weatherClient = useMetWeatherClient();

  return useQuery({
    queryFn: async () => {
      const response = await weatherClient.complete(
        undefined,
        latitude,
        longitude,
      );

      return response;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes before refetch
    cacheTime: 1000 * 60 * 20, // 20 minutes before cache expires
  });
};
