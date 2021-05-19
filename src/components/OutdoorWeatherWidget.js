import { useEffect, useState } from "react";
import { ReactComponent as Sun } from "../icons/sun.svg";
import { ReactComponent as Cloudy } from "../icons/sun.svg";
import { ReactComponent as PartlyCloudy } from "../icons/cloud-sun.svg";
import { ReactComponent as Rain } from "../icons/cloud-rain.svg";
import { ReactComponent as Thunder } from "../icons/cloud-lightning.svg";

export default function OutdoorWeatherWidget() {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url =
      "https://api.weatherapi.com/v1/current.json?key=487e8af21edb4a54b1f142156211105&q=Hamburg&aqi=no";

    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((incomingData) => {
        const newWeather = incomingData.current;
        setWeather(newWeather);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function showWeatherIcon() {
    if (weather !== undefined) {
      if (weather.condition.text.includes("Partly cloudy")) {
        return <PartlyCloudy className="outdoor-weather__svg" />;
      } else if (weather.condition.text.includes("sunny")) {
        return <Sun className="outdoor-weather__svg" />;
      } else if (weather.condition.text.includes("rain")) {
        return <Rain className="outdoor-weather__svg" />;
      } else if (weather.condition.text.includes("Overcast")) {
        return <Cloudy className="outdoor-weather__svg" />;
      } else if (weather.condition.text.includes("thunder" || "lightning")) {
        return <Thunder className="outdoor-weather__svg" />;
      }
    }
  }

  function renderTemperature() {
    if (isLoading) {
      return "Loading...";
    } else if (error) {
      return "Ops...something happened";
    }
    return `${weather.temp_c}° degrees`;
  }

  return (
    <div className="outdoor-weather__layout">
      {showWeatherIcon()}
      <p className="outdoor-wheater__text">{renderTemperature()}</p>
    </div>
  );
}
