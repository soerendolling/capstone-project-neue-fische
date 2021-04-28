import "./AmbiencePage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/ambience-progress.svg";
import { Link } from "react-router-dom";

export default function AmbiencePage() {
  return (
    <div className="app-grid">
      <header className="ambience-header">
        <h1 className="ambience-heading">Ambience</h1>
        <h2 className="ambience-subheading">choose one or more</h2>
      </header>
      <main className="ambience-main">
        <div className="ambience-tag__layout">
          <FilterTag text="fine with all" />
          <FilterTag text="elegant" />
          <FilterTag text="cosy" />
          <FilterTag text="modern" />
          <FilterTag text="busy" />
          <FilterTag text="traditional" />
          <FilterTag text="trendy" />
          <FilterTag text="rustic" />
          <FilterTag text="alternative" />
          <FilterTag text="warm" />
          <FilterTag text="hanseatic" />
          <FilterTag text="posh" />
        </div>
        <Link to={`/resultsPage`}>
          <p className="ambience-main__amount">50</p>
        </Link>
      </main>
      <footer className="ambience-footer">
        <Link to={`/openPage`}>
          <LeftArrow />
        </Link>
        <Progress />
        <Link to={`/cuisinePage`}>
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
