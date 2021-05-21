import "./RestaurantDetailedPage.css";
import { useParams } from "react-router-dom";
import restaurantImgOne from "../img/restaurant1.png";

// import { ReactComponent as HeartFull } from "../icons/heart-full.svg";
// import { ReactComponent as HeartEmpty } from "../icons/heart-empty.svg";
import { ReactComponent as WWW } from "../icons/internet.svg";

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
import Smoking from "../components/restaurantDetailed/Smoking";
import Adress from "../components/restaurantDetailed/Adress";
import Phone from "../components/restaurantDetailed/Phone";
import Email from "../components/restaurantDetailed/Email";

export default function RestaurantDetailedPage({ restaurantData }) {
  let { id } = useParams();
  const singleRestaurant = restaurantData.find(
    (restaurant) => restaurant.id === Number(id)
  );

  function showWebsite() {
    const website = singleRestaurant?.contact?.website;
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

  function showRestaurantImg() {
    if (singleRestaurant?.img === "") {
      return restaurantImgOne;
    } else {
      return singleRestaurant?.img;
    }
  }

  function showCuisine() {
    const cuisineZero =
      singleRestaurant?.cuisine[0] === undefined
        ? ""
        : singleRestaurant?.cuisine[0];
    const cuisineOne =
      singleRestaurant?.cuisine[1] === undefined
        ? ""
        : singleRestaurant?.cuisine[1];
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
        <h1 className="detailed-heading">{singleRestaurant?.name}</h1>
        <div className="detailed-subheading">
          <h2>{showCuisine()}</h2>
          <h2>{` ${singleRestaurant?.ambience[0]}  ${singleRestaurant?.ambience[1]} `}</h2>
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
            <Smoking restaurant={singleRestaurant} />
          </div>
          <div className="detailed-info__text-bottom">
            <Adress restaurant={singleRestaurant} />
            <Phone restaurant={singleRestaurant} />
            <Email restaurant={singleRestaurant} />
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
