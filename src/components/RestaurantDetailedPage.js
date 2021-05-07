import "./RestaurantDetailedPage.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import restaurantImgOne from "../img/restaurant1.png";
import { ReactComponent as Clock } from "../icons/clock.svg";
import { ReactComponent as TakeAway } from "../icons/take-away.svg";
import { ReactComponent as Terrace } from "../icons/terrace.svg";
import { ReactComponent as Binoculars } from "../icons/binoculars.svg";
import { ReactComponent as Pin } from "../icons/pin.svg";
import { ReactComponent as Phone } from "../icons/phone.svg";
import { ReactComponent as Heart } from "../icons/heart-full.svg";
import { ReactComponent as NoSmoking } from "../icons/no-smoking.svg";
// import { ReactComponent as WWW } from "../icons/internet.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Vegetarian } from "../icons/vegetarian.svg";

export default function RestaurantDetailedPage({ restaurantData }) {
  let { id } = useParams();
  const singleRestaurant = restaurantData.find(
    (restaurant) => restaurant.id === Number(id)
  );
  console.log(singleRestaurant);
  const monday = singleRestaurant.openingTimes.monday.general.open > 0;
  const tuesday = singleRestaurant.openingTimes.tuesday.general.open > 0;
  const wednesday = singleRestaurant.openingTimes.wednesday.general.open > 0;
  const thursday = singleRestaurant.openingTimes.thursday.general.open > 0;
  const friday = singleRestaurant.openingTimes.friday.general.open > 0;
  const saturday = singleRestaurant.openingTimes.saturday.general.open > 0;
  const sunday = singleRestaurant.openingTimes.sunday.general.open > 0;

  let classForWeekday;
  if (sunday) {
    classForWeekday = " open";
  } else {
    classForWeekday = " closed";
  }

  console.log(monday);

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
        <h1 className="detailed-heading">{singleRestaurant.name}</h1>
        <div className="detailed-subheading">
          <h2>{singleRestaurant.cuisine[0]}</h2>
          <h2>-</h2>
          <h2>{singleRestaurant.ambience[0]}</h2>
        </div>
        <div className="headline-weekday__layout">
          <div className={`headline-weekday__day${classForWeekday}`}>M</div>
          <div className={`headline-weekday__day${classForWeekday}`}>T</div>
          <div className={`headline-weekday__day${classForWeekday}`}>W</div>
          <div className={`headline-weekday__day${classForWeekday}`}>T</div>
          <div className={`headline-weekday__day${classForWeekday}`}>F</div>
          <div className={`headline-weekday__day${classForWeekday}`}>S</div>
          <div className={`headline-weekday__day${classForWeekday}`}>S</div>
        </div>
        <div className="detailed-info__layout">
          <div className="detailed-info__text-layout">
            <span className="info-line">
              <Clock className="info-svg" />
              <p className="info-text">open</p>
            </span>

            <span className="info-line">
              <Terrace className="info-svg" />
              <p className="info-text">
                {singleRestaurant.location.restaurantOutdoorDetailed}
              </p>
            </span>
            <span className="info-line">
              <Binoculars className="info-svg" />
              <p className="info-text">{singleRestaurant.location.view}</p>
            </span>
            <span className="info-line">
              <NoSmoking className="info-svg" />
              <p className="info-text">smoking outside</p>
            </span>
          </div>
          <div className="detailed-info__text-layout">
            <span className="info-line">
              <TakeAway className="info-svg" />
              <p className="info-text">pick-up</p>
            </span>
            <span className="info-line">
              <Vegetarian className="info-svg" />
              <p className="info-text">veg</p>
            </span>
            <span className="info-line">
              <Pin className="info-svg" />
              <p className="info-text">{singleRestaurant.contact.adress}</p>
            </span>
            <span className="info-line">
              <Phone className="info-svg" />
              <p className="info-text">{singleRestaurant.contact.number}</p>
            </span>
          </div>
        </div>
      </main>
      <footer className="detailed-footer">
        <Link
          to={(location) => {
            return {
              ...location,
              pathname: "/results-page",
            };
          }}
        >
          <LeftArrow />
        </Link>
        <Heart className="header-bookmark" />
      </footer>
    </div>
  );
}
