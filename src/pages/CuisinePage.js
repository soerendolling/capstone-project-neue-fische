import "./CuisinePage.css";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/cuisine-progress.svg";
import { Link } from "react-router-dom";
import FilterTagsGroup from "../components/FilterTagsGroup";

export default function CuisinePage({ restaurantData }) {
  const tags = [
    "modern",
    "creative",
    "vegan",
    "vegetarian",
    "local",
    "german",
    "fish",
    "austrian",
    "italian",
    "pizza",
    "french",
    "spanish",
    "international",
    "vietnamese",
    "japanese",
    "korean",
    "steak",
    "syrian",
    "middle eastern",
    "peruvian",
  ];

  return (
    <div className="app-grid">
      <header className="cuisine-header">
        <h1 className="cuisine-heading">Cuisine</h1>
        <h2 className="cuisine-subheading">choose one or more</h2>
      </header>
      <main className="cuisine-main">
        <div className="cuisine-tag__layout">
          <FilterTagsGroup filterPage="cuisine" filterTags={tags} />
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
          to={(location) => {
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
