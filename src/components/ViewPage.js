import "./ViewPage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/view-progress.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { stringify, parse } from "../utilities/queryString";
import { toggleValueInArray } from "../models/toggleValueInArray";

export default function ViewPage({ restaurantData }) {
  const location = useLocation();
  const history = useHistory();

  const parsedQueryString = parse(location.search);
  const selectedFilters = parsedQueryString.view || [];

  function handleFilterClick(name) {
    const newFilters = toggleValueInArray(selectedFilters, name);
    const parsedOldQueryString = parse(location.search);

    const newQueryString = stringify({
      ...parsedOldQueryString,
      view: newFilters,
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
      <header className="view-header">
        <h1 className="view-heading">View</h1>
        <h2 className="view-subheading">choose one or more</h2>
      </header>
      <main className="view-main">
        <div className="view-tag__layout">
          <FilterTag
            text="habor view"
            onClick={handleFilterClick}
            isToggled={isTagToggled("habor view")}
          />
          <FilterTag
            text="park view"
            onClick={handleFilterClick}
            isToggled={isTagToggled("park view")}
          />
          <FilterTag
            text="canal view"
            onClick={handleFilterClick}
            isToggled={isTagToggled("canal view")}
          />
          <FilterTag
            text="alster lake view"
            onClick={handleFilterClick}
            isToggled={isTagToggled("alster lake view")}
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
          <p className="view-main__amount">{restaurantData.length}</p>
        </Link>
      </main>
      <footer className="view-footer">
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/cuisine-page",
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
              pathname: "/outdoor-page",
            };
          }}
        >
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
