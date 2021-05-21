import "./ViewPage.css";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/view-progress.svg";
import { Link } from "react-router-dom";
import FilterTagsGroup from "../components/FilterTagsGroup";

export default function ViewPage({ restaurantData }) {
  const tags = ["habor view", "park view", "canal view", "alster lake view"];

  return (
    <div className="app-grid">
      <header className="view-header">
        <h1 className="view-heading">View</h1>
        <h2 className="view-subheading">choose one or more</h2>
      </header>
      <main className="view-main">
        <div className="view-tag__layout">
          <FilterTagsGroup filterPage="view" filterTags={tags} />
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
