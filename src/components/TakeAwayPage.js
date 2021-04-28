import "./TakeAwayPage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/takeAway-progress.svg";
import { Link } from "react-router-dom";

export default function TakeAwayPage() {
  return (
    <div className="app-grid">
      <header className="takeAway-header">
        <h1 className="takeAway-heading">Take Away</h1>
        <h2 className="takeAway-subheading">choose from 1</h2>
      </header>
      <main className="takeAway-main">
        <div className="takeAway-tag__layout">
          <FilterTag text="eat in" />
          <FilterTag text="pre order" />
          <FilterTag text="pick up" />
          <FilterTag text="delivery" />
        </div>
        <Link to={`/ResultsPage`}>
          <p className="takeAway-main__amount">50</p>
        </Link>
      </main>
      <footer className="takeAway-footer">
        <Link to={`/bookmarkPage`}>
          <LeftArrow />
        </Link>
        <Progress />
        <Link to={`/openPage`}>
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
