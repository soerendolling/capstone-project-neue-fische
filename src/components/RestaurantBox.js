import "./RestaurantBox.css";
import Picture from "../img/restaurant1.png";

export default function RestaurantBox() {
  return (
    <article className="restaurant-box">
      <img src={Picture} alt="a restaurant" className="restaurant-box__image" />
      <section className="restaurant-box__description">
        <h1 className="description-heading">I Vigneri</h1>
        <span className="descriptiion-cuisine">italian</span>
        <span className="description-location">Neustadt</span>
        <span className="description-opening-hours">Open</span>
      </section>
    </article>
  );
}
