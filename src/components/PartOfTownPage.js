import "./PartOfTownPage.css";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/partOfTown-progress.svg";
import { Link } from "react-router-dom";
import FilterTagsRender from "./FilterTagsRender";

export default function PartOfTownPage({ restaurantData }) {
  const tags = [
    "altstadt",
    "st.georg",
    "uhlenhorst",
    "altona",
    "sternschanze",
    "winterhude",
    "neustadt",
    "rotherbaum",
    "habor",
    "hafencity",
    "st. pauli",
    "eppendorf",
    "michel",
  ];

  return (
    <div className="app-grid">
      <header className="partOfTown-header">
        <h1 className="partOfTown-heading">Part of Town</h1>
        <h2 className="partOfTown-subheading">choose one or more</h2>
      </header>
      <main className="partOfTown-main">
        <div className="partOfTown-tag__layout">
          <FilterTagsRender filterPage="partOfTown" filterTags={tags} />
        </div>
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/results-page",
            };
          }}
        >
          <p className="partOfTown-main__amount">{restaurantData.length}</p>
        </Link>
      </main>
      <footer className="partOfTown-footer">
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/outdoor-page",
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
              pathname: "/results-page",
            };
          }}
        >
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
