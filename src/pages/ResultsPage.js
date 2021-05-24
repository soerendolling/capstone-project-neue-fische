import "./ResultsPage.css";
import { Link } from "react-router-dom";
import { ReactComponent as Heart } from "../icons/heart-empty-button.svg";
import MainButton from "../components/MainButton";
import GoBackButton from "../components/GoBackButton";
import RestaurantBox from "../components/RestaurantBox";
import { getDataFromLocalStorage } from "../utilities/localStorage";

export default function ResultsPage({ restaurantData }) {
  const bookmarkedRestaurants = getDataFromLocalStorage();

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
        <GoBackButton />
        <Link to={`/take-away-page`}>
          <MainButton className="results-footer__button" text="start again" />
        </Link>
        <Link to={`/bookmark-page`}>
          <button className="results-footer__bookmark-button">
            <Heart className="results-footer__bookmark-svg" />
          </button>
        </Link>
      </footer>
    </div>
  );
}
