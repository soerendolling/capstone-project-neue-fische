import "./TakeAwayPage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/takeAway-progress.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { stringify, parse } from "../utilities/queryString";

function toggleValueInArray(array, value) {
  if (array.includes(value)) {
    return array.filter((filter) => {
      return filter !== value;
    });
  } else {
    return [...array, value];
  }
}

export default function TakeAwayPage({ restaurantData }) {
  const location = useLocation();
  const history = useHistory();
  const parsedQueryString = parse(location.search);

  const selectedFilters = parsedQueryString.takeAway || [];

  function handleFilterClick(name) {
    const newFilters = toggleValueInArray(selectedFilters, name);
    const parsedOldQueryString = parse(location.search);

    const newQueryString = stringify({
      ...parsedOldQueryString,
      takeAway: newFilters,
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
      <header className="takeAway-header">
        <h1 className="takeAway-heading">Take Away</h1>
        <h2 className="takeAway-subheading">choose one or more</h2>
      </header>
      <main className="takeAway-main">
        <div className="takeAway-tag__layout">
          <FilterTag
            text="eat in"
            onClick={handleFilterClick}
            isToggled={isTagToggled("eat in")}
          />
          <FilterTag
            text="pre order"
            onClick={handleFilterClick}
            isToggled={isTagToggled("pre order")}
          />
          <FilterTag
            text="pick up"
            onClick={handleFilterClick}
            isToggled={isTagToggled("pick up")}
          />
          <FilterTag
            text="delivery"
            onClick={handleFilterClick}
            isToggled={isTagToggled("delivery")}
          />
        </div>
        <Link to={`/resultsPage`}>
          <p className="takeAway-main__amount">{restaurantData.length}</p>
        </Link>
      </main>
      <footer className="takeAway-footer">
        <Link to="/bookmarkPage">
          <LeftArrow />
        </Link>
        <Progress />
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/openPage",
            };
          }}
        >
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
