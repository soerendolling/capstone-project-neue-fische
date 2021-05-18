import "./AmbiencePage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/ambience-progress.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { stringify, parse } from "../utilities/queryString";
import { toggleValueInArray } from "../models/toggleValueInArray";

export default function AmbiencePage({ restaurantData }) {
  const location = useLocation();
  const history = useHistory();
  const parsedQueryString = parse(location.search);
  const selectedFilters = parsedQueryString.ambience || [];

  function handleFilterClick(name) {
    const newFilters = toggleValueInArray(selectedFilters, name);
    const parsedOldQueryString = parse(location.search);
    const newQueryString = stringify({
      ...parsedOldQueryString,
      ambience: newFilters,
    });
    history.replace({
      ...location,
      search: newQueryString,
    });
  }

  function isTagToogled(tagName) {
    return selectedFilters.includes(tagName);
  }

  function renderFilterTags() {
    const tags = [
      "elegant",
      "cosy",
      "modern",
      "busy",
      "traditional",
      "trendy",
      "rustic",
      "alternative",
      "warm",
      "hanseatic",
    ];
    return tags.map((tag) => {
      return (
        <FilterTag
          text={tag}
          onClick={handleFilterClick}
          isToggled={isTagToogled(tag)}
        />
      );
    });
  }

  return (
    <div className="app-grid">
      <header className="ambience-header">
        <h1 className="ambience-heading">Ambience</h1>
        <h2 className="ambience-subheading">choose one or more</h2>
      </header>
      <main className="ambience-main">
        <div className="ambience-tag__layout">{renderFilterTags()}</div>
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/results-page",
            };
          }}
        >
          <p className="ambience-main__amount">{restaurantData.length}</p>
        </Link>
      </main>
      <footer className="ambience-footer">
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/open-page",
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
              pathname: "/cuisine-page",
            };
          }}
        >
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
