import "./OutdoorPage.css";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/outdoor-progress.svg";
import OutdoorWeatherWidget from "../components/OutdoorWeatherWidget";
import FilterTagsGroup from "../components/FilterTagsGroup";

export default function OutdoorPage({ restaurantData }) {
  const tags = ["terrace", "backyard", "rooftop", "park"];

  return (
    <div className="app-grid">
      <header className="outdoor-header">
        <h1 className="outdoor-heading">Outdoor</h1>
        <h2 className="outdoor-subheading">choose one or more</h2>
      </header>
      <main className="outdoor-main">
        <OutdoorWeatherWidget />
        <div className="outdoor-tag__layout">
          <FilterTagsGroup filterPage="outdoor" filterTags={tags} />
        </div>
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/results-page",
            };
          }}
        >
          <p className="outdoor-main__amount">{restaurantData.length}</p>
        </Link>
      </main>
      <footer className="outdoor-footer">
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/view-page",
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
              pathname: "/part-of-town-page",
            };
          }}
        >
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
