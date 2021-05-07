import "./OutdoorPage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/outdoor-progress.svg";
import { ReactComponent as Sun } from "../icons/sun.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { stringify, parse } from "../utilities/queryString";
import { toggleValueInArray } from "../models/toggleValueInArray";

export default function OutdoorPage({ restaurantData }) {
  const location = useLocation();
  const history = useHistory();

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
          <Sun className="outdoor-weather__svg" />
          <p className="outdoor-wheater__text">26° degrees</p>
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
