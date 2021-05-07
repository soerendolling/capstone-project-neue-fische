import "./CuisinePage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/cuisine-progress.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { stringify, parse } from "../utilities/queryString";
import { toggleValueInArray } from "../models/toggleValueInArray";

export default function CuisinePage({ restaurantData }) {
  const location = useLocation();
  const history = useHistory();

  const parsedQueryString = parse(location.search);
  const selectedFilters = parsedQueryString.cuisine || [];

  function handleFilterClick(name) {
    const newFilters = toggleValueInArray(selectedFilters, name);
    const parsedOldQueryString = parse(location.search);

    const newQueryString = stringify({
      ...parsedOldQueryString,
      cuisine: newFilters,
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
      <header className="cuisine-header">
        <h1 className="cuisine-heading">Cuisine</h1>
        <h2 className="cuisine-subheading">choose one or more</h2>
      </header>
      <main className="cuisine-main">
        <div className="cuisine-tag__layout">
          <FilterTag
            text="modern"
            onClick={handleFilterClick}
            isToggled={isTagToggled("modern")}
          />
          <FilterTag
            text="classic"
            onClick={handleFilterClick}
            isToggled={isTagToggled("classic")}
          />
          <FilterTag
            text="creative"
            onClick={handleFilterClick}
            isToggled={isTagToggled("creative")}
          />
          <FilterTag
            text="vegan"
            onClick={handleFilterClick}
            isToggled={isTagToggled("vegan")}
          />
          <FilterTag
            text="vegetarian"
            onClick={handleFilterClick}
            isToggled={isTagToggled("vegetarian")}
          />
          <FilterTag
            text="local"
            onClick={handleFilterClick}
            isToggled={isTagToggled("local")}
          />
          <FilterTag
            text="german"
            onClick={handleFilterClick}
            isToggled={isTagToggled("german")}
          />
          <FilterTag
            text="hanseatic"
            onClick={handleFilterClick}
            isToggled={isTagToggled("hanseatic")}
          />
          <FilterTag
            text="fish"
            onClick={handleFilterClick}
            isToggled={isTagToggled("fish")}
          />
          <FilterTag
            text="austrian"
            onClick={handleFilterClick}
            isToggled={isTagToggled("austrian")}
          />
          <FilterTag
            text="italian"
            onClick={handleFilterClick}
            isToggled={isTagToggled("italian")}
          />
          <FilterTag
            text="pizza"
            onClick={handleFilterClick}
            isToggled={isTagToggled("pizza")}
          />
          <FilterTag
            text="french"
            onClick={handleFilterClick}
            isToggled={isTagToggled("french")}
          />
          <FilterTag
            text="spanish"
            onClick={handleFilterClick}
            isToggled={isTagToggled("spanish")}
          />
          <FilterTag
            text="international"
            onClick={handleFilterClick}
            isToggled={isTagToggled("international")}
          />
          <FilterTag
            text="vietnamese"
            onClick={handleFilterClick}
            isToggled={isTagToggled("vietnamese")}
          />
          <FilterTag
            text="japanese"
            onClick={handleFilterClick}
            isToggled={isTagToggled("japanese")}
          />
          <FilterTag
            text="korean"
            onClick={handleFilterClick}
            isToggled={isTagToggled("korean")}
          />
          <FilterTag
            text="steak"
            onClick={handleFilterClick}
            isToggled={isTagToggled("steak")}
          />
          <FilterTag
            text="syrian"
            onClick={handleFilterClick}
            isToggled={isTagToggled("syrian")}
          />
          <FilterTag
            text="middle eastern"
            onClick={handleFilterClick}
            isToggled={isTagToggled("middle eastern")}
          />
          <FilterTag
            text="peruvian"
            onClick={handleFilterClick}
            isToggled={isTagToggled("peruvian")}
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
          <p className="cuisine-main__amount">{restaurantData.length}</p>
        </Link>
      </main>
      <footer className="cuisine-footer">
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/ambience-page",
            };
          }}
        >
          <LeftArrow />
        </Link>
        <Progress />
        <Link
          to={(lovation) => {
            return {
              ...location,
              pathname: "/view-page",
            };
          }}
        >
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
