import "./OpenPage.css";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/open-progress.svg";
import { Link } from "react-router-dom";
import FilterTagsRender from "./FilterTagsGroup";

export default function OpenPage({ restaurantData }) {
  const tags = [
    "now",
    "today",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return (
    <div className="app-grid">
      <header className="open-header">
        <h1 className="open-heading">Open</h1>
        <h2 className="open-subheading">choose one or more</h2>
      </header>
      <main className="open-main">
        <div className="open-tag__layout">
          <FilterTagsRender filterPage="openingTimes" filterTags={tags} />
        </div>
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/results-page",
            };
          }}
        >
          <p className="open-main__amount">{restaurantData.length}</p>
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
