import "./BookmarkPage.css";
import { Link } from "react-router-dom";
import RestaurantBox from "../components/RestaurantBox";
import GoBackButton from "../components/GoBackButton";
import { ReactComponent as Find } from "../icons/find.svg";
import {
  getDataFromLocalStorage,
  getNameFromLocalStorage,
} from "../utilities/localStorage";

export default function BookmarkPage({ restaurantData }) {
  const bookmarkedRestaurants = getDataFromLocalStorage();
  const bookmarkedRestaurantsLength = bookmarkedRestaurants.length;
  const name = getNameFromLocalStorage();

  function renderName() {
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    const userName = capName === "" ? "there" : capName;
    return userName;
  }

  function renderRestaurants() {
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
        ({
          restaurantId,
          name,
          cuisine,
          area,
          isBookmarked,
          openingTimes,
          img,
        }) => {
          return (
            <RestaurantBox
              key={restaurantId}
              restaurantId={restaurantId}
              name={name}
              cuisine={cuisine}
              area={area}
              getBookmarked={isBookmarked}
              openingTimes={openingTimes}
              img={img}
            />
          );
        }
      );
    }
  }

  return (
    <div className="app-grid">
      <header>
        <h1 className="bookmark-heading">{`Hi ${renderName()},`}</h1>
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
        <GoBackButton />
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
