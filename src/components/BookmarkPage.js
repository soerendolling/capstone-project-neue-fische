import "./BookmarkPage.css";
import RestaurantBox from "./RestaurantBox";
import { ReactComponent as Find } from "../icons/find.svg";
import { Link } from "react-router-dom";

export default function BookmarkPage({ restaurantData }) {
  const bookmarkedRestaurants = restaurantData.filter(
    (savedRestaurants) => savedRestaurants.isBookmarked === true
  );

  function renderRestaurants() {
    return bookmarkedRestaurants.map((restaurant) => {
      const {
        id,
        name,
        kitchen,
        location,
        atmosphere,
        isBookmarked,
      } = restaurant;
      const cuisine = kitchen[0];
      const area = location.area[0];
      const ambience = atmosphere[0];

      return (
        <Link to={`/restaurantDetailedPage/${id}`}>
          <RestaurantBox
            key={id}
            name={name}
            cuisine={cuisine}
            area={area}
            atmosphere={ambience}
            bookmark={isBookmarked}
          />
        </Link>
      );
    });
  }

  return (
    <div className="app-grid">
      <header>
        <h1 className="bookmark-heading">Hi Soeren,</h1>
        <h2 className="bookmark-subheading">Bookmarks</h2>
      </header>
      <main className="bookmark-main">{renderRestaurants()}</main>
      <footer className="bookmark-footer">
        <Link to={`/takeAwayPage`}>
          <button className="bookmark-footer__button" type="submit">
            <Find className="bookmark-footer__svg" />
            start
          </button>
        </Link>
      </footer>
    </div>
  );
}
