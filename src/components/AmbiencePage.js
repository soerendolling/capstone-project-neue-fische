import "./AmbiencePage.css";

import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/ambience-progress.svg";
import { Link } from "react-router-dom";

import FilterTagsRender from "./FilterTagsGroup";

export default function AmbiencePage({ restaurantData }) {
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

  return (
    <div className="app-grid">
      <header className="ambience-header">
        <h1 className="ambience-heading">Ambience</h1>
        <h2 className="ambience-subheading">choose one or more</h2>
      </header>
      <main className="ambience-main">
        <div className="ambience-tag__layout">
          <FilterTagsRender filterPage="ambience" filterTags={tags} />
        </div>
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
