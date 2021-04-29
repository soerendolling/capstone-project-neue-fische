import "./RestaurantDetailedPage.css";
import restaurantImgOne from "../img/restaurant1.png";

export default function RestaurantDetailedPage() {
  return (
    <div className="RestaurantDetailedPage">
      <header className="detailed-header">
        <img
          src={restaurantImgOne}
          alt="the restaurant"
          className="detailed-header__image"
        />
      </header>
      <main>
        <h1 className="detailed-heading">I Vigneri</h1>
        <div className="detailed-subheading">
          <h2>italian</h2>
          <h2>-</h2>
          <h2>ambience</h2>
        </div>
        <div className="detailed-info__layout">
          <span>open</span>
          <span>pick-up</span>
          <span>terrace</span>
          <span>no view</span>
          <span>outside smokign allowed</span>
          <span>Address</span>
          <span>mobile</span>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
