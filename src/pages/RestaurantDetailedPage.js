import "./RestaurantDetailedPage.css";
import { useParams } from "react-router-dom";
import restaurantImgOne from "../img/restaurant1.png";
import { ReactComponent as Pin } from "../icons/pin.svg";
import { ReactComponent as Phone } from "../icons/phone.svg";
// import { ReactComponent as HeartFull } from "../icons/heart-full.svg";
// import { ReactComponent as HeartEmpty } from "../icons/heart-empty.svg";
import { ReactComponent as NoSmoking } from "../icons/no-smoking.svg";
import { ReactComponent as WWW } from "../icons/internet.svg";
import { ReactComponent as Email } from "../icons/at.svg";

import GoBackButton from "../components/GoBackButton";
import MainButton from "../components/MainButton";
import WeekdayDisplay from "../components/restaurantDetailed/WeekdayDisplay";
import Lunch from "../components/restaurantDetailed/Lunch";
import OpeningTimes from "../components/restaurantDetailed/OpeningTimes";
import Meatless from "../components/restaurantDetailed/Meatless";
import Michelin from "../components/restaurantDetailed/Michelin";
import Outdoor from "../components/restaurantDetailed/Outdoor";
import View from "../components/restaurantDetailed/View";
import Price from "../components/restaurantDetailed/Price";
import Size from "../components/restaurantDetailed/Size";
import TakeAway from "../components/restaurantDetailed/TakeAway";
import Delivery from "../components/restaurantDetailed/Delivery";

export default function RestaurantDetailedPage({ restaurantData }) {
  let { id } = useParams();
  const singleRestaurant = restaurantData.find(
    (restaurant) => restaurant.id === Number(id)
  );

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
            <Meatless restaurant={singleRestaurant} />
            <Michelin restaurant={singleRestaurant} />
            <Outdoor restaurant={singleRestaurant} />
            <View restaurant={singleRestaurant} />
            <Price restaurant={singleRestaurant} />
            <Size restaurant={singleRestaurant} />
            <TakeAway restaurant={singleRestaurant} />
            <Delivery restaurant={singleRestaurant} />
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
