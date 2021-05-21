import "./RestaurantDetailedPage.css";
import { useParams } from "react-router-dom";
import restaurantImgOne from "../img/restaurant1.png";

import { ReactComponent as TakeAway } from "../icons/take-away.svg";
import { ReactComponent as Terrace } from "../icons/terrace.svg";
import { ReactComponent as Binoculars } from "../icons/binoculars.svg";
import { ReactComponent as Pin } from "../icons/pin.svg";
import { ReactComponent as Phone } from "../icons/phone.svg";
// import { ReactComponent as HeartFull } from "../icons/heart-full.svg";
// import { ReactComponent as HeartEmpty } from "../icons/heart-empty.svg";
import { ReactComponent as NoSmoking } from "../icons/no-smoking.svg";
import { ReactComponent as WWW } from "../icons/internet.svg";
import { ReactComponent as Vegetarian } from "../icons/vegetarian.svg";
import { ReactComponent as Delivery } from "../icons/delivery.svg";
import { ReactComponent as Size } from "../icons/size.svg";
import { ReactComponent as Euro } from "../icons/euro.svg";
import { ReactComponent as Email } from "../icons/at.svg";
import { ReactComponent as Michelin } from "../icons/michelin.svg";
import { displayTime } from "../utilities/displayTime";
import GoBackButton from "../components/GoBackButton";
import MainButton from "../components/MainButton";
import WeekdayDisplay from "../components/restaurantDetailed/WeekdayDisplay";
import Lunch from "../components/restaurantDetailed/Lunch";
import OpeningTimes from "../components/restaurantDetailed/OpeningTimes";

export default function RestaurantDetailedPage({ restaurantData }) {
  let { id } = useParams();
  const singleRestaurant = restaurantData.find(
    (restaurant) => restaurant.id === Number(id)
  );

  let currentDate = new Date();
  let options = { weekday: "long" };
  const getDay = new Intl.DateTimeFormat("en-US", options).format(currentDate);
  const today = getDay.toLowerCase();

  function showMeatlessOptions() {
    const vegetarian = singleRestaurant.meatless.vegetarianOptions;
    const vegan = singleRestaurant.meatless.veganOptions;
    const showMeatlessOptions =
      vegetarian && vegan
        ? "vegetarian & vegan"
        : vegan
        ? "vegan options"
        : vegetarian
        ? "vegetarian options"
        : "no vegetarian options on the menu";

    return (
      <span className="info-line">
        <Vegetarian className="info-svg" />
        <p className="info-text">{showMeatlessOptions}</p>
      </span>
    );
  }

  function showView() {
    const view = singleRestaurant.location.view;
    const viewInfo = `${view} view`;
    if (view !== "") {
      return (
        <span className="info-line">
          <Binoculars className="info-svg" />
          <p className="info-text">{viewInfo}</p>
        </span>
      );
    }
  }

  function showTakeAwayOptions() {
    const takeAwayOptions = singleRestaurant.takeAway;
    const takeAwayDetails = singleRestaurant.takeAwayDetails;
    const open = singleRestaurant.openingTimes[today].takeAway.open;
    const close = singleRestaurant.openingTimes[today].takeAway.close;
    const takeAwayInfo = `${takeAwayDetails} from ${displayTime(open, close)}`;
    if (takeAwayOptions) {
      return (
        <span className="info-line">
          <TakeAway className="info-svg" />
          <p className="info-text">{takeAwayInfo}</p>
        </span>
      );
    }
  }

  function showDelivery() {
    const delivery = singleRestaurant.delivery;
    const deliveryDetails = singleRestaurant.deliveryDetails;
    const deliveryInfo = deliveryDetails;
    if (delivery) {
      return (
        <span className="info-line">
          <Delivery className="info-svg" />
          <p className="info-text">{deliveryInfo}</p>
        </span>
      );
    }
  }

  function showOutdoor() {
    const outdoorDetail = singleRestaurant.location.restaurantOutdoorDetail;
    const outdoorSeating = singleRestaurant.location.restaurantOutdoor;
    const outdoorSeatingBar = singleRestaurant.location.barOutdoor;
    if (outdoorSeating || outdoorSeatingBar) {
      const outdoorInfo = !outdoorSeating
        ? "Outdoor seating at the Bar"
        : outdoorDetail;
      return (
        <span className="info-line">
          <Terrace className="info-svg" />
          <p className="info-text">{outdoorInfo}</p>
        </span>
      );
    }
  }

  function showAdress() {
    const adress = singleRestaurant.contact.adress;
    const adressLink = `https://www.google.com/maps/search/${singleRestaurant.name}${adress}`;
    if (adress !== "") {
      return (
        <span className="info-line">
          <Pin className="info-svg" />
          <a href={adressLink}>
            <p className="info-text">{adress}</p>
          </a>
        </span>
      );
    }
  }

  function showNumber() {
    const number = singleRestaurant.contact.number;
    if (number !== "") {
      return (
        <span className="info-line">
          <Phone className="info-svg" />
          <a href={`tel://${number}`}>
            <p className="info-text">{singleRestaurant.contact.number}</p>
          </a>
        </span>
      );
    }
  }

  function showSmoking() {
    const smokingInside = singleRestaurant.smoking.inside;
    const smokingOutside = singleRestaurant.smoking.outside;
    const smoking = `${
      smokingInside
        ? "smoking allowed"
        : smokingOutside
        ? "smoking outside"
        : "non smoking"
    }`;

    return (
      <span className="info-line">
        <NoSmoking className="info-svg" />
        <p className="info-text">{smoking}</p>
      </span>
    );
  }

  function showSize() {
    const size = `${singleRestaurant.size} space`;
    if (size !== "") {
      return (
        <span className="info-line">
          <Size className="info-svg" />
          <p className="info-text">{size}</p>
        </span>
      );
    }
  }

  function showPrice() {
    const priceTop = singleRestaurant.averagePrice.top;
    const priceBottom = singleRestaurant.averagePrice.bottom;
    const priceInfo = `mains from ${priceBottom}€ to ${priceTop}€`;
    if (priceTop > 0) {
      return (
        <span className="info-line">
          <Euro className="info-svg" />
          <p className="info-text">{priceInfo}</p>
        </span>
      );
    }
  }

  function showWebsite() {
    const website = singleRestaurant.contact.website;
    if (website !== "") {
      return (
        <span className="info-line">
          <WWW className="info-svg" />
          <a href={website}>
            <p className="info-text">{website}</p>
          </a>
        </span>
      );
    }
  }

  function showEmail() {
    const email = singleRestaurant.contact.email;
    if (email !== "") {
      return (
        <span className="info-line">
          <Email className="info-svg" />
          <a href={`mailto:${email}`}>
            <p className="info-text">{email}</p>
          </a>
        </span>
      );
    }
  }

  function showMichelin() {
    const michelin = singleRestaurant.michelinAwarded;
    const michelinInfo = `${michelin[0]} - ${michelin[1]}`;
    if (michelin !== "") {
      return (
        <span className="info-line">
          <Michelin className="info-svg" />
          <p className="info-text">{michelinInfo}</p>
        </span>
      );
    }
  }

  function showRestaurantImg() {
    if (singleRestaurant.img === "") {
      return restaurantImgOne;
    } else {
      return singleRestaurant.img;
    }
  }

  function showCuisine() {
    const cuisineZero =
      singleRestaurant.cuisine[0] === undefined
        ? ""
        : singleRestaurant.cuisine[0];
    const cuisineOne =
      singleRestaurant.cuisine[1] === undefined
        ? ""
        : singleRestaurant.cuisine[1];
    if (cuisineZero || cuisineOne) {
      return ` ${cuisineZero}  ${cuisineOne} `;
    }
  }

  return (
    <div className="RestaurantDetailedPage">
      <header className="detailed-header">
        <img
          src={showRestaurantImg()}
          alt="the restaurant"
          className="detailed-header__image"
        />
      </header>
      <main>
        <h1 className="detailed-heading">{singleRestaurant.name}</h1>
        <div className="detailed-subheading">
          <h2>{showCuisine()}</h2>
          <h2>{` ${singleRestaurant.ambience[0]}  ${singleRestaurant.ambience[1]} `}</h2>
        </div>
        <WeekdayDisplay singleRestaurant={singleRestaurant} />
        <div className="detailed-info__layout">
          <div className="detailed-info__text-top">
            <Lunch restaurant={singleRestaurant} />
            <OpeningTimes restaurant={singleRestaurant} />
            {showMeatlessOptions()}
            {showMichelin()}
            {showOutdoor()}
            {showView()}
            {showPrice()}
            {showSize()}
            {showTakeAwayOptions()}
            {showDelivery()}
            {showSmoking()}
          </div>
          <div className="detailed-info__text-bottom">
            {showAdress()}
            {showNumber()}
            {showEmail()}
            {showWebsite()}
          </div>
        </div>
      </main>
      <footer className="detailed-footer">
        <GoBackButton className="go-back-button__rdp" />
        <MainButton text="open on gmaps" />
        {/* <HeartFull className="header-bookmark" /> */}
      </footer>
    </div>
  );
}
