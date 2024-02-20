import { createContext } from "react";
import { YrWeatherClient } from "../../../clients/weatherClient";

export const YrWeatherClientContext = createContext<
  YrWeatherClient | undefined
>(undefined);

export function YrWeatherClientProvider({
  client,
  children,
}: {
  client: YrWeatherClient;
  children: React.ReactNode;
}) {
  return (
    <YrWeatherClientContext.Provider value={client}>
      {children}
    </YrWeatherClientContext.Provider>
  );
}
