import "./RestaurantBox.css";
import restaurantImgOne from "../img/restaurant1.png";
import { ReactComponent as Clock } from "../icons/clock.svg";
import { ReactComponent as Tray } from "../icons/tray.svg";
import { ReactComponent as Pin } from "../icons/pin.svg";
import { ReactComponent as Heart } from "../icons/heart.svg";

export default function RestaurantBox() {
  return (
    <article className="restaurant-box">
      <img
        src={restaurantImgOne}
        alt="a restaurant"
        className="restaurant-box__image"
      />
      <section className="restaurant-box__description">
        <h1 className="description-heading">I Vigneri</h1>
        <span className="description-cuisine">
          <Tray className="description-cuisine__svg" />
          <p className="description-text">italian</p>
        </span>
        <span className="description-location">
          <Pin className="description-location__svg" />
          <p className="description-text">Neustadt</p>
        </span>
        <span className="description-opening-hours">
          <Clock className="description-opening-hours__svg" />
          <p className="description-text">Open</p>
        </span>
      </section>
      <Heart className="restaurant-box-bookmark__svg" />
    </article>
  );
}
