"use client";

import { useState, useEffect } from "react";
import { Cloud, Sun, CloudRain, CloudSnow, Loader2 } from "lucide-react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState<{ temp: number; condition: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        // Escanaba coordinates: 45.7452° N, 87.0640° W
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=45.7452&longitude=-87.0640&current_weather=true&temperature_unit=fahrenheit"
        );
        const data = await res.json();
        
        if (data.current_weather) {
           // Map WMO codes to conditions
           // 0: Clear sky, 1-3: Mainly clear, partly cloudy, overcast
           // 45, 48: Fog
           // 51-57: Drizzle
           // 61-67: Rain
           // 71-77: Snow
           // 80-82: Rain showers
           // 85-86: Snow showers
           // 95-99: Thunderstorm
           let condition = "Clear";
           const code = data.current_weather.weathercode;
           
           if (code >= 1 && code <= 3) condition = "Cloudy";
           if (code >= 51 && code <= 67) condition = "Rain";
           if (code >= 71 && code <= 77) condition = "Snow";
           if (code >= 80 && code <= 82) condition = "Rain";
           if (code >= 85 && code <= 86) condition = "Snow";
           
           setWeather({
             temp: Math.round(data.current_weather.temperature),
             condition: condition
           });
        }
      } catch (error) {
        console.error("Failed to fetch weather", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  if (loading) return <div className="text-xs text-white/80 flex items-center gap-1"><Loader2 size={14} className="animate-spin" /> Escanaba</div>;
  if (!weather) return null;

  const Icon = () => {
    switch (weather.condition) {
      case "Rain": return <CloudRain size={16} className="text-blue-300" />;
      case "Snow": return <CloudSnow size={16} className="text-white" />;
      case "Cloudy": return <Cloud size={16} className="text-gray-300" />;
      default: return <Sun size={16} className="text-yellow-400" />;
    }
  };

  return (
    <div className="flex items-center gap-2 text-sm font-medium bg-primary/20 px-3 py-1 rounded-full border border-primary/10 backdrop-blur-sm">
      <Icon />
      <span>{weather.temp}°F</span>
      <span className="hidden sm:inline text-xs opacity-75">| Escanaba, MI</span>
    </div>
  );
}
