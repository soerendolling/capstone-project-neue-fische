import "./ViewPage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/view-progress.svg";
import { Link } from "react-router-dom";

export default function ViewPage() {
  return (
    <div className="app-grid">
      <header className="view-header">
        <h1 className="view-heading">View</h1>
        <h2 className="view-subheading">choose one or more</h2>
      </header>
      <main className="view-main">
        <div className="view-tag__layout">
          <FilterTag text="no view" />
          <FilterTag text="habor" />
          <FilterTag text="parc view" />
          <FilterTag text="canal view" />
          <FilterTag text="alster lake view" />
        </div>
        <Link to={`/resultsPage`}>
          <p className="view-main__amount">50</p>
        </Link>
      </main>
      <footer className="view-footer">
        <Link to={`/cuisinePage`}>
          <LeftArrow />
        </Link>
        <Progress />
        <Link to={`/outdoorPage`}>
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
