# Local Weather Dashoard

Local weather application that shows the forecast 10 days using MET weather API.

- Shows data live
- Responsive
- Temperature + windspeed and windspeed of gust + precipitation + humidity
- Shows chart for the next 24 hours
- Hourly forecast for today and the following days
- Dark/Light mode

# Setup

### **Clone the GitHub project to desired local folder with:**

```
git clone https://github.com/ThomasStenholtLaursen/LocalWeatherDashboard
```

### **Navigate to root folder and run locally with:**

```
npm run dev
```

**_NOTE:_** No API-Key is required for the MET Weather API.

> Please note that due to licensing issues the MET Weather API can only distribute model data for the Nordic and Arctic regions, see [docs](https://api.met.no/weatherapi/locationforecast/2.0/documentation "Vite getting started").

### **To update the YrWeatherClient with NSwag run:**

```
npm run generate-yr-weather-client
```

**_NOTE:_** This is not necessary when cloning and running the project for this first time. It's provided to be able to update the client if the MET Weather API changes.

## Tech Stack

- [Vite](https://vitejs.dev/guide/ "Vite getting started") (React + TS template) as build tool.
- [React router](https://reactrouter.com/en/main/start/overview "React Router feature overview") for routing and navigation.
- [Tailwindcss](https://tailwindcss.com/docs/installation "Get started with Tailwind CSS") for styling.
- [Shadcn/ui](https://ui.shadcn.com/docs "shadcn/ui docs") for re-usable components.
- [Lucide React](https://lucide.dev/icons/ "Lucide React Icons") for icons.
- [React Query](https://tanstack.com/query/v3/docs/framework/react/overview "TanStack Query v3 - Overview") as fetching library.
- [Meteorologisk institutt Weather API](https://developer.yr.no/doc/GettingStarted/ "MET Weather API - Getting Started") to provide data, used by Yr.no.
- [NSwag ](https://github.com/RicoSuter/NSwag "Vite getting started") to generate TypeScript Client. The [MET OpenAPI Swagger](https://api.met.no/weatherapi/locationforecast/2.0/swagger "Schema for the JSON format included in the OpenAPI spec") provides schema.
