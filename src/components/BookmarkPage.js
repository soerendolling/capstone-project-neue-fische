import "./BookmarkPage.css";
import RestaurantBox from "./RestaurantBox";
import { ReactComponent as Find } from "../icons/find.svg";
import { Link } from "react-router-dom";

export default function BookmarkPage({ restaurantData }) {
  const bookmarkedRestaurants = restaurantData.filter(
    (restaurants) => restaurants.isBookmarked === true
  );

  function renderRestaurants() {
    return bookmarkedRestaurants.map(
      ({ id, name, cuisine, location, ambience, isBookmarked }) => {
        const [firstCuisine] = cuisine;
        const [area] = location.area;
        const [firstAmbience] = ambience;

        return (
          <Link to={`/restaurant-detailed-page/${id}`}>
            <RestaurantBox
              key={id}
              name={name}
              cuisine={firstCuisine}
              area={area}
              atmosphere={firstAmbience}
              bookmarked={isBookmarked}
            />
          </Link>
        );
      }
    );
  }

  return (
    <div className="app-grid">
      <header>
        <h1 className="bookmark-heading">Hi Soeren,</h1>
        <h2 className="bookmark-subheading">Bookmarks</h2>
      </header>
      <main className="bookmark-main">{renderRestaurants()}</main>
      <footer className="bookmark-footer">
        <Link to={`/take-away-page`}>
          <button className="bookmark-footer__button" type="submit">
            <Find className="bookmark-footer__svg" />
            start
          </button>
        </Link>
      </footer>
    </div>
  );
}
