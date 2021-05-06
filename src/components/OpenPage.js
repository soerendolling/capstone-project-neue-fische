import "./OpenPage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/open-progress.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { stringify, parse } from "../utilities/queryString";
import { toggleValueInArray } from "../models/toggleValueInArray";

export default function OpenPage({ restaurantData }) {
  const location = useLocation();
  const history = useHistory();
  const parsedQueryString = parse(location.search);

  const selectedFilters = parsedQueryString.openingTimes || [];

  function handleFilterClick(name) {
    const newFilters = toggleValueInArray(selectedFilters, name);
    const parsedOldQueryString = parse(location.search);

    const newQueryString = stringify({
      ...parsedOldQueryString,
      openingTimes: newFilters,
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
      <header className="open-header">
        <h1 className="open-heading">Open</h1>
        <h2 className="open-subheading">choose one or more</h2>
      </header>
      <main className="open-main">
        <div className="open-tag__layout">
          <FilterTag
            text="now"
            onClick={handleFilterClick}
            isToggled={isTagToggled("now")}
          />
          <FilterTag
            text="today"
            onClick={handleFilterClick}
            isToggled={isTagToggled("today")}
          />
          <FilterTag
            text="monday"
            onClick={handleFilterClick}
            isToggled={isTagToggled("monday")}
          />
          <FilterTag
            text="tuesday"
            onClick={handleFilterClick}
            isToggled={isTagToggled("tuesday")}
          />
          <FilterTag
            text="wednesday"
            onClick={handleFilterClick}
            isToggled={isTagToggled("wednesday")}
          />
          <FilterTag
            text="thursday"
            onClick={handleFilterClick}
            isToggled={isTagToggled("thursday")}
          />
          <FilterTag
            text="friday"
            onClick={handleFilterClick}
            isToggled={isTagToggled("friday")}
          />
          <FilterTag
            text="saturday"
            onClick={handleFilterClick}
            isToggled={isTagToggled("saturday")}
          />
          <FilterTag
            text="sunday"
            onClick={handleFilterClick}
            isToggled={isTagToggled("sunday")}
          />
        </div>
        <Link to={`/results-page`}>
          <p className="takeAway-main__amount">{restaurantData.length}</p>
        </Link>
      </main>
      <footer className="open-footer">
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/take-away-page",
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
              pathname: "/ambience-page",
            };
          }}
        >
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
