import "./PartOfTownPage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/partOfTown-progress.svg";
import { Link } from "react-router-dom";

export default function PartOfTownPage() {
  return (
    <div className="app-grid">
      <header className="partOfTown-header">
        <h1 className="partOfTown-heading">Suburb</h1>
        <h2 className="partOfTown-subheading">choose one or more</h2>
      </header>
      <main className="partOfTown-main">
        <div className="partOfTown-tag__layout">
          <FilterTag text="take me anywhere" />
          <FilterTag text="alstadt" />
          <FilterTag text="st. georg" />
          <FilterTag text="uhlenhorst" />
          <FilterTag text="altona" />
          <FilterTag text="sternschanze" />
          <FilterTag text="winterhude" />
          <FilterTag text="neustadt" />
          <FilterTag text="rotherbaum" />
          <FilterTag text="habor" />
          <FilterTag text="hafencity" />
          <FilterTag text="st. pauli" />
          <FilterTag text="groß flottbek" />
          <FilterTag text="eppendorf" />
          <FilterTag text="michel" />
        </div>
        <Link to={`/results-page`}>
          <p className="partOfTown-main__amount">50</p>
        </Link>
      </main>
      <footer className="partOfTown-footer">
        <Link to={`/outdoor-page`}>
          <LeftArrow />
        </Link>
        <Progress />
        <Link to={`/results-page`}>
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
