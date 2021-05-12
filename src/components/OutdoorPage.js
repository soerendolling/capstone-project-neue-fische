import "./OutdoorPage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/outdoor-progress.svg";
import { ReactComponent as Sun } from "../icons/sun.svg";
import { ReactComponent as Cloudy } from "../icons/sun.svg";
import { ReactComponent as PartlyCloudy } from "../icons/cloud-sun.svg";
import { ReactComponent as Rain } from "../icons/cloud-rain.svg";
import { ReactComponent as Thunder } from "../icons/cloud-lightning.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { stringify, parse } from "../utilities/queryString";
import { toggleValueInArray } from "../models/toggleValueInArray";

export default function OutdoorPage({ restaurantData }) {
  const location = useLocation();
  const history = useHistory();
  const [weather, setWeather] = useState();

  useEffect(() => {
    const url =
      "http://api.weatherapi.com/v1/current.json?key=487e8af21edb4a54b1f142156211105&q=Hamburg&aqi=no";

    fetch(url)
      .then((res) => res.json())
      .then((incomingData) => {
        const newWeather = incomingData.current;
        setWeather(newWeather);
      })
      .catch((error) => {
        console.log(error);
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

  function showTemp() {
    if (weather !== undefined) {
      return weather.temp_c;
    } else {
      return -100;
    }
  }

  const parsedQueryString = parse(location.search);
  const selectedFilters = parsedQueryString.outdoor || [];

  function handleFilterClick(name) {
    const newFilters = toggleValueInArray(selectedFilters, name);
    const parsedOldQueryString = parse(location.search);

    const newQueryString = stringify({
      ...parsedOldQueryString,
      outdoor: newFilters,
    });
    history.replace({
      ...location,
      search: newQueryString,
    });
  }

  function isTagToggled(tagName) {
    return selectedFilters.includes(tagName);
  }

  return (
    <div className="app-grid">
      <header className="outdoor-header">
        <h1 className="outdoor-heading">Outdoor</h1>
        <h2 className="outdoor-subheading">choose one or more</h2>
      </header>
      <main className="outdoor-main">
        <div className="outdoor-weather__layout">
          {showWeatherIcon()}
          <p className="outdoor-wheater__text">{`${showTemp()}° degrees`}</p>
        </div>
        <div className="outdoor-tag__layout">
          <FilterTag
            text="terrace"
            onClick={handleFilterClick}
            isToggled={isTagToggled("terrace")}
          />
          <FilterTag
            text="backyard"
            onClick={handleFilterClick}
            isToggled={isTagToggled("backyard")}
          />
          <FilterTag
            text="rooftop"
            onClick={handleFilterClick}
            isToggled={isTagToggled("rooftop")}
          />
          <FilterTag
            text="park"
            onClick={handleFilterClick}
            isToggled={isTagToggled("park")}
          />
        </div>
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/results-page",
            };
          }}
        >
          <p className="outdoor-main__amount">{restaurantData.length}</p>
        </Link>
      </main>
      <footer className="outdoor-footer">
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/view-page",
            };
          }}
        >
          <LeftArrow />
        </Link>
        <Progress />
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/part-of-town-page",
            };
          }}
        >
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
