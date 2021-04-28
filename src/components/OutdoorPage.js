import "./OutdoorPage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/outdoor-progress.svg";
import { Link } from "react-router-dom";

export default function OutdoorPage() {
  return (
    <div className="app-grid">
      <header className="outdoor-header">
        <h1 className="outdoor-heading">outdoor</h1>
        <h2 className="outdoor-subheading">choose one or more</h2>
      </header>
      <main className="outdoor-main">
        <div className="outdoor-tag__layout">
          <FilterTag text="no outdoor seating" />
          <FilterTag text="terrace" />
          <FilterTag text="backyard" />
          <FilterTag text="rooftop" />
          <FilterTag text="park" />
        </div>
        <Link to={`/resultsPage`}>
          <p className="outdoor-main__amount">50</p>
        </Link>
      </main>
      <footer className="outdoor-footer">
        <Link to={`/viewPage`}>
          <LeftArrow />
        </Link>
        <Progress />
        <Link to={`/partOfTownPage`}>
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
