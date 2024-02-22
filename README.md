# Local Weather Dashoard

Local weather application that shows the forecast 10 days using MET weather API.

- Shows data live
- Responsive
- Temperature + windspeed and windspeed of gust + precipitation + humidity
- Shows chart for the next 24 hours
- Hourly forecast for today and the following days
- Dark/Ligt mode

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

- Vite (React + TS template) as build tool, see [docs](https://vitejs.dev/guide/ "Vite getting started").
- React router for routing and navigation, see [docs](https://reactrouter.com/en/main/start/overview "React Router feature overview").
- Tailwindcss for styling, see [docs](https://tailwindcss.com/docs/installation "Get started with Tailwind CSS").
- Shadcn/ui for re-usable component templates, see [installation](https://ui.shadcn.com/docs/installation/vite "Vite + shadcn/ui installation").
- Icons from [Lucide React](https://lucide.dev/icons/ "Lucide React Icons").
- React Query as fetching library, see [docs](https://tanstack.com/query/v3/docs/framework/react/overview "TanStack Query v3 - Overview").
- Meteorologisk institutt Weather API, see [Yr.no introduction](https://developer.yr.no/doc/GettingStarted/ "MET Weather API - Getting Started").
- NSwag to generate TypeScript Client (see [NSwag GitHub](https://github.com/RicoSuter/NSwag "Vite getting started")). The MET API provides schema with Swagger OpenAPI (see [MET API Swagger json](https://api.met.no/weatherapi/locationforecast/2.0/swagger "Schema for the JSON format included in the OpenAPI spec")) ,
