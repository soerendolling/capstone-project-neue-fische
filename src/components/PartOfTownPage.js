import "./PartOfTownPage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/partOfTown-progress.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { stringify, parse } from "../utilities/queryString";
import { toggleValueInArray } from "../models/toggleValueInArray";

export default function PartOfTownPage({ restaurantData }) {
  const location = useLocation();
  const history = useHistory();

  const parsedQueryString = parse(location.search);
  const selectedFilters = parsedQueryString.partOfTown || [];

  function handleFilterClick(name) {
    const newFilters = toggleValueInArray(selectedFilters, name);
    const parsedOldQueryString = parse(location.search);

    const newQueryString = stringify({
      ...parsedOldQueryString,
      partOfTown: newFilters,
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
      <header className="partOfTown-header">
        <h1 className="partOfTown-heading">Part of Town</h1>
        <h2 className="partOfTown-subheading">choose one or more</h2>
      </header>
      <main className="partOfTown-main">
        <div className="partOfTown-tag__layout">
          <FilterTag
            text="altstadt"
            onClick={handleFilterClick}
            isToggled={isTagToggled("altstadt")}
          />
          <FilterTag
            text="st. georg"
            onClick={handleFilterClick}
            isToggled={isTagToggled("st. georg")}
          />
          <FilterTag
            text="uhlenhorst"
            onClick={handleFilterClick}
            isToggled={isTagToggled("uhlenhorst")}
          />
          <FilterTag
            text="altona"
            onClick={handleFilterClick}
            isToggled={isTagToggled("altona")}
          />
          <FilterTag
            text="sternschanze"
            onClick={handleFilterClick}
            isToggled={isTagToggled("sternschanze")}
          />
          <FilterTag
            text="winterhude"
            onClick={handleFilterClick}
            isToggled={isTagToggled("winterhude")}
          />
          <FilterTag
            text="neustadt"
            onClick={handleFilterClick}
            isToggled={isTagToggled("neustadt")}
          />
          <FilterTag
            text="rotherbaum"
            onClick={handleFilterClick}
            isToggled={isTagToggled("rotherbaum")}
          />
          <FilterTag
            text="habor"
            onClick={handleFilterClick}
            isToggled={isTagToggled("habor")}
          />
          <FilterTag
            text="hafencity"
            onClick={handleFilterClick}
            isToggled={isTagToggled("hafencity")}
          />
          <FilterTag
            text="st. pauli"
            onClick={handleFilterClick}
            isToggled={isTagToggled("st. pauli")}
          />

          <FilterTag
            text="eppendorf"
            onClick={handleFilterClick}
            isToggled={isTagToggled("eppendorf")}
          />
          <FilterTag
            text="michel"
            onClick={handleFilterClick}
            isToggled={isTagToggled("michel")}
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
          <p className="partOfTown-main__amount">{restaurantData.length}</p>
        </Link>
      </main>
      <footer className="partOfTown-footer">
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/outdoor-page",
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
              pathname: "/results-page",
            };
          }}
        >
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
