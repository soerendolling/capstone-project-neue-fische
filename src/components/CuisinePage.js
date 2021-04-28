import "./CuisinePage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/cuisine-progress.svg";
import { Link } from "react-router-dom";

export default function CuisinePage() {
  return (
    <div className="app-grid">
      <header className="cuisine-header">
        <h1 className="cuisine-heading">Cuisine</h1>
        <h2 className="cuisine-subheading">choose one or more</h2>
      </header>
      <main className="cuisine-main">
        <div className="cuisine-tag__layout">
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
        <Link to={`/resultsPage`}>
          <p className="cuisine-main__amount">50</p>
        </Link>
      </main>
      <footer className="cuisine-footer">
        <Link to={`/ambiencePage`}>
          <LeftArrow />
        </Link>
        <Progress />
        <Link to={`/viewPage`}>
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
