import { MetWeatherClient } from "@/clients/metWeatherClient";
import { createContext } from "react";

export const MetWeatherApiContext = createContext<MetWeatherClient | undefined>(
  undefined,
);

export function MetWeatherClientProvider({
  client,
  children,
}: {
  client: MetWeatherClient;
  children: React.ReactNode;
}) {
  return (
    <MetWeatherApiContext.Provider value={client}>
      {children}
    </MetWeatherApiContext.Provider>
  );
}
