import "./ResultsPage.css";
import RestaurantBox from "./RestaurantBox";
import { ReactComponent as Heart } from "../icons/heart-empty-button.svg";
import { Link, useHistory } from "react-router-dom";
import MainButton from "./MainButton";
import { getDataFromLocalStorage } from "../utilities/localStorage";
import { ReactComponent as ArrowLeft } from "../icons/arrow-left.svg";

export default function ResultsPage({ restaurantData }) {
  const bookmarkedRestaurants = getDataFromLocalStorage();
  const history = useHistory();

  function checkIfBookmarked(id) {
    const theBookmarkedRestaurant = bookmarkedRestaurants.find((restaurant) => {
      return restaurant.restaurantId === id;
    });

    if (theBookmarkedRestaurant) {
      return true;
    } else {
      return false;
    }
  }

  function renderRestaurants() {
    return restaurantData.map((restaurant) => {
      const { id, name, cuisine, location, openingTimes, img } = restaurant;
      const firstCuisine = cuisine[0];
      const area = location.area[0];
      return (
        <RestaurantBox
          key={id}
          restaurantId={id}
          name={name}
          cuisine={firstCuisine}
          area={area}
          getBookmarked={checkIfBookmarked(id)}
          openingTimes={openingTimes}
          img={img}
        />
      );
    });
  }

  return (
    <div className="app-grid">
      <header className="results-header">
        <h1 className="results-heading">Results</h1>
        <h2 className="results-subheading">your results</h2>
      </header>
      <main className="results-main">{renderRestaurants()}</main>
      <footer className="results-footer">
        <button className="results-footer__back">
          <ArrowLeft onClick={() => history.goBack()} />
        </button>
        <Link to={`/take-away-page`}>
          <MainButton className="results-footer__button" text="start again" />
        </Link>
        <Link to={`/bookmark-page`}>
          <button className="results-footer__back">
            <Heart className="results-footer__bookmark" />
          </button>
        </Link>
      </footer>
    </div>
  );
}
