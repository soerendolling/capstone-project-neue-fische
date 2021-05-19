import "./TakeAwayPage.css";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/takeAway-progress.svg";
import { Link } from "react-router-dom";
import FilterTagsRender from "./FilterTagsGroup";

export default function TakeAwayPage({ restaurantData }) {
  const tags = ["take away", "delivery"];

  return (
    <div className="app-grid">
      <header className="takeAway-header">
        <h1 className="takeAway-heading">Take Away</h1>
        <h2 className="takeAway-subheading">choose one or none</h2>
      </header>
      <main className="takeAway-main">
        <div className="takeAway-tag__layout">
          <FilterTagsRender filterPage="takeAway" filterTags={tags} />
        </div>
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/results-page",
            };
          }}
        >
          <p className="takeAway-main__amount">{restaurantData.length}</p>
        </Link>
      </main>
      <footer className="takeAway-footer">
        <Link to="/bookmark-page">
          <LeftArrow />
        </Link>
        <Progress />
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/open-page",
            };
          }}
        >
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
