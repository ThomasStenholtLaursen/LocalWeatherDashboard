export const calculateWindChill = (temp: number, wSpeed: number) => {
  const wSpeedKmh = wSpeed * 3.6; // Convert m/s to km/h
  const wSpeedMph = wSpeedKmh * 0.62; // Convert km/h to mph

  const temperatureFahrenheit = temp * 1.8 + 32; // Convert Celsius to Fahrenheit

  const windChillFahrenheit =
    35.74 +
    0.6215 * temperatureFahrenheit -
    35.75 * Math.pow(wSpeedMph, 0.16) +
    0.4275 * temperatureFahrenheit * Math.pow(wSpeedMph, 0.16); // Formula: 35.74 + 0.6215T – 35.75(V^0.16) + 0.4275T(V^0.16).
  const windChillCelcius = (windChillFahrenheit - 32) / 1.8; // Convert Fahrenheit back to Celsius

  return wSpeedKmh < 5.0 ? Math.round(temp) : Math.round(windChillCelcius);
};
