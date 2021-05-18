import "./BookmarkPage.css";
import RestaurantBox from "./RestaurantBox";
import { ReactComponent as Find } from "../icons/find.svg";
import { Link } from "react-router-dom";
import {
  getDataFromLocalStorage,
  getNameFromLocalStorage,
} from "../utilities/localStorage";

export default function BookmarkPage({ restaurantData }) {
  const bookmarkedRestaurants = getDataFromLocalStorage();
  const bookmarkedRestaurantsLength = bookmarkedRestaurants.length;
  const userName = getNameFromLocalStorage();

  function renderRestaurants() {
    const [openingTimes] = restaurantData.map(({ openingTimes }) => {
      return openingTimes;
    });

    if (bookmarkedRestaurantsLength === 0) {
      return (
        <div>
          <h2 className="bookmark-main__default-text">Nothing saved yet!</h2>
          <h2 className="bookmark-main__default-text">
            Click on start to beginn the journey
          </h2>
        </div>
      );
    } else {
      return bookmarkedRestaurants.map(
        ({ restaurantId, name, cuisine, area, isBookmarked }) => {
          return (
            <RestaurantBox
              key={restaurantId}
              restaurantId={restaurantId}
              name={name}
              cuisine={cuisine}
              area={area}
              getBookmarked={isBookmarked}
              openingTimes={openingTimes}
            />
          );
        }
      );
    }
  }

  return (
    <div className="app-grid">
      <header>
        <h1 className="bookmark-heading">{`Hi ${userName},`}</h1>
        <h2 className="bookmark-subheading">Bookmarks</h2>
      </header>
      <main
        className={
          bookmarkedRestaurantsLength === 0
            ? "bookmark-main__default"
            : "bookmark-main__list"
        }
      >
        {renderRestaurants()}
      </main>
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
