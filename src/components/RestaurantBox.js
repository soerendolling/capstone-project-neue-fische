import "./RestaurantBox.css";
import restaurantImgOne from "../img/restaurant1.png";
import { ReactComponent as Clock } from "../icons/clock.svg";
import { ReactComponent as Tray } from "../icons/tray.svg";
import { ReactComponent as Pin } from "../icons/pin.svg";
import { ReactComponent as HeartFull } from "../icons/heart-full.svg";
import { ReactComponent as HeartEmpty } from "../icons/heart-empty.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  sendDataToLocalStorage,
  removeDataFromLocalStorageById,
} from "../utilities/localStorage";

export default function RestaurantBox({
  restaurantId,
  name,
  cuisine,
  area,
  getBookmarked,
  openingTimes,
  img,
}) {
  const [bookmarked, setBookmarked] = useState(getBookmarked);

  const isBookmarked = true;
  const restaurantBookmarked = {
    restaurantId,
    name,
    cuisine,
    area,
    isBookmarked,
    img,
  };

  function handleBookmarked() {
    if (!bookmarked) {
      setBookmarked(true);
      sendDataToLocalStorage(restaurantBookmarked);
    } else {
      setBookmarked(false);
      removeDataFromLocalStorageById(restaurantId);
    }
  }

  function renderBookmark() {
    if (bookmarked) {
      return (
        <HeartFull
          className="restaurant-box-bookmark__svg"
          onClick={handleBookmarked}
        />
      );
    } else {
      return (
        <HeartEmpty
          className="restaurant-box-bookmark__svg"
          onClick={handleBookmarked}
        />
      );
    }
  }

  function getOpeningTime() {
    let currentDate = new Date();
    let options = { weekday: "long" };
    const getDay = new Intl.DateTimeFormat("en-US", options).format(
      currentDate
    );
    const today = getDay.toLowerCase();
    const hour = currentDate.getHours();

    if (
      (openingTimes[today].general.open < hour &&
        openingTimes[today].general.close > hour) ||
      (openingTimes[today].lunch.open < hour &&
        openingTimes[today].lunch.close > hour)
    ) {
      return "open";
    } else {
      return "closed";
    }
  }

  function showRestaurantImg() {
    if (img === "") {
      return restaurantImgOne;
    } else {
      return img;
    }
  }

  return (
    <div className="restaurant-box">
      <Link
        to={(location) => {
          return {
            ...location,
            pathname: `/restaurant-detailed-page/${restaurantId}`,
          };
        }}
      >
        <article className="restaurant-box__content">
          <img
            src={showRestaurantImg()}
            alt="a restaurant"
            className="restaurant-box__image"
          />
          <section className="restaurant-box__description">
            <h1 className="description-heading">{name}</h1>
            <span className="description-cuisine">
              <Tray className="description-cuisine__svg" />
              <p className="description-text">{cuisine}</p>
            </span>
            <span className="description-location">
              <Pin className="description-location__svg" />
              <p className="description-text">{area}</p>
            </span>
            <span className="description-opening-hours">
              <Clock className="description-opening-hours__svg" />
              <p className="description-text">{getOpeningTime()}</p>
            </span>
          </section>
        </article>
      </Link>
      {renderBookmark()}
    </div>
  );
}
