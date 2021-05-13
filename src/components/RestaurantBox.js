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
  getDataFromLocalStorage,
  removeDataFromLocalStorageById,
} from "../utilities/localStorage";

export default function RestaurantBox({
  restaurantId,
  name,
  cuisine,
  area,
  bookmarked,
}) {
  const [clicked, setClicked] = useState(false);

  const restaurantBookmarked = { restaurantId, name, cuisine, area };
  function handleBookmarked() {
    if (!clicked) {
      setClicked(true);
      sendDataToLocalStorage(restaurantBookmarked);
    } else {
      setClicked(false);
      removeDataFromLocalStorageById(restaurantId);
    }
  }
  console.log(clicked);

  function renderBookmark() {
    if (clicked) {
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

  return (
    <div key={restaurantId}>
      <Link
        to={(location) => {
          return {
            ...location,
            pathname: `/restaurant-detailed-page/${restaurantId}`,
          };
        }}
      >
        <article className="restaurant-box">
          <img
            src={restaurantImgOne}
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
              <p className="description-text">Open</p>
            </span>
          </section>
        </article>
      </Link>
      {renderBookmark()}
    </div>
  );
}
