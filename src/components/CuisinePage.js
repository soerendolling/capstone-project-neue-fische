import "./ambiencePage.css";
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
          <FilterTag text="modern" />
          <FilterTag text="classic" />
          <FilterTag text="creative" />
          <FilterTag text="vegan" />
          <FilterTag text="vegetarian" />
          <FilterTag text="local" />
          <FilterTag text="german" />
          <FilterTag text="hanseatic" />
          <FilterTag text="fish" />
          <FilterTag text="austrian" />
          <FilterTag text="italian" />
          <FilterTag text="pizza" />
          <FilterTag text="french" />
          <FilterTag text="spanish" />
          <FilterTag text="international" />
          <FilterTag text="vietnamese" />
          <FilterTag text="japanese" />
          <FilterTag text="korean" />
          <FilterTag text="steak" />
          <FilterTag text="syrian" />
          <FilterTag text="middle eastern" />
          <FilterTag text="peruvian" />
        </div>
        <Link to={`/ResultsPage`}>
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
