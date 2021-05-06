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
            text="mondays"
            onClick={handleFilterClick}
            isToggled={isTagToggled("mondays")}
          />
          <FilterTag
            text="tuesdays"
            onClick={handleFilterClick}
            isToggled={isTagToggled("tuesdays")}
          />
          <FilterTag
            text="wednesdays"
            onClick={handleFilterClick}
            isToggled={isTagToggled("wednesdays")}
          />
          <FilterTag
            text="thursdays"
            onClick={handleFilterClick}
            isToggled={isTagToggled("thursdays")}
          />
          <FilterTag
            text="fridays"
            onClick={handleFilterClick}
            isToggled={isTagToggled("fridays")}
          />
          <FilterTag
            text="saturdays"
            onClick={handleFilterClick}
            isToggled={isTagToggled("saturdays")}
          />
          <FilterTag
            text="sundays"
            onClick={handleFilterClick}
            isToggled={isTagToggled("sundays")}
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
