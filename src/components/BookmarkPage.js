import "./BookmarkPage.css";
import RestaurantBox from "./RestaurantBox";
import { ReactComponent as Find } from "../icons/find.svg";
import { Link } from "react-router-dom";
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorageById,
} from "../utilities/localStorage";

export default function BookmarkPage({ restaurantData }) {
  const bookmarkedRestaurants = getDataFromLocalStorage();

  console.log(bookmarkedRestaurants);

  function renderRestaurants() {
    return bookmarkedRestaurants.map(
      ({ restaurantId, name, cuisine, area, ambience }) => {
        return (
          <RestaurantBox
            restaurantId={restaurantId}
            name={name}
            cuisine={cuisine}
            area={area}
            atmosphere={ambience}
          />
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
