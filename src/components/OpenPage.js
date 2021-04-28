import "./OpenPage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/open-progress.svg";
import { Link } from "react-router-dom";

export default function OpenPage() {
  return (
    <div className="app-grid">
      <header className="open-header">
        <h1 className="open-heading">Open</h1>
        <h2 className="open-subheading">choose one or more</h2>
      </header>
      <main className="open-main">
        <div className="open-tag__layout">
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
        <Link to={`/ResultsPage`}>
          <p className="open-main__amount">50</p>
        </Link>
      </main>
      <footer className="open-footer">
        <Link to={`/takeAwayPage`}>
          <LeftArrow />
        </Link>
        <Progress />
        <Link to={`/ambiencePage`}>
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
