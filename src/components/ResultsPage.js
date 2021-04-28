import "./ResultsPage.css";
import RestaurantBox from "./RestaurantBox";
import { ReactComponent as SaveHeart } from "../icons/save-heart.svg";
import { Link } from "react-router-dom";

export default function ResultsPage() {
  return (
    <div className="app-grid">
      <header className="results-header">
        <h1 className="results-heading">Results</h1>
        <h2 className="results-subheading">your results</h2>
      </header>
      <main className="results-main">
        <RestaurantBox />
        <RestaurantBox />
        <RestaurantBox />
        <RestaurantBox />
        <RestaurantBox />
      </main>
      <footer className="results-footer">
        <Link to={`/bookmarkPage`}>
          <button className="results-footer__button">
            <SaveHeart className="results-footer__bookmark" />
          </button>
        </Link>
        <Link to={`/takeAwayPage`}>
          <button className="results-footer__button" type="submit">
            start again
          </button>
        </Link>
      </footer>
    </div>
  );
}
