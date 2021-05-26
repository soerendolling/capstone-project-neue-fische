import { useFetch } from "../hooks/useFetch";
import { ReactComponent as Sun } from "../icons/sun.svg";
import { ReactComponent as Cloudy } from "../icons/sun.svg";
import { ReactComponent as PartlyCloudy } from "../icons/cloud-sun.svg";
import { ReactComponent as Rain } from "../icons/cloud-rain.svg";
import { ReactComponent as Thunder } from "../icons/cloud-lightning.svg";

export default function OutdoorWeatherWidget() {
  const { data, isLoading, isError } = useFetch(
    "https://api.weatherapi.com/v1/current.json?key=487e8af21edb4a54b1f142156211105&q=Hamburg&aqi=no"
  );

  function showWeatherIcon() {
    if (data !== undefined) {
      if (data.current?.condition.text.includes("Partly cloudy")) {
        return <PartlyCloudy className="outdoor-weather__svg" />;
      } else if (data.current?.condition.text.includes("Sunny")) {
        return <Sun className="outdoor-weather__svg" />;
      } else if (data.current?.condition.text.includes("Clear")) {
        return <Sun className="outdoor-weather__svg" />;
      } else if (data.current?.condition.text.includes("Moderate rain")) {
        return <Rain className="outdoor-weather__svg" />;
      } else if (data.current?.condition.text.includes("Rain")) {
        return <Rain className="outdoor-weather__svg" />;
      } else if (data.current?.condition.text.includes("Overcast")) {
        return <Cloudy className="outdoor-weather__svg" />;
      } else if (
        data.current?.condition.text.includes("thunder" || "lightning")
      ) {
        return <Thunder className="outdoor-weather__svg" />;
      }
    }
  }

  function renderTemperature() {
    if (isLoading) {
      return "";
    } else if (isError) {
      return "Ops...something happened";
    }
    return `${data?.current?.temp_c}° degrees`;
  }

  return (
    <div className="outdoor-weather__layout">
      {showWeatherIcon()}
      <p className="outdoor-wheater__text">{renderTemperature()}</p>
    </div>
  );
}
