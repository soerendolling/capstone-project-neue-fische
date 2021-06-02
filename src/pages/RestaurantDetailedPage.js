import "./RestaurantDetailedPage.css";
import { Link, useParams } from "react-router-dom";
import restaurantImgOne from "../img/restaurant1.png";
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
import Website from "../components/restaurantDetailed/Website";
import Cuisine from "../components/restaurantDetailed/Cuisine";
import Ambience from "../components/restaurantDetailed/Ambience";

export default function RestaurantDetailedPage({ restaurantData }) {
  let { id } = useParams();
  const singleRestaurant = restaurantData.find(
    (restaurant) => restaurant.id === Number(id)
  );

  function showRestaurantImg() {
    if (singleRestaurant?.img === "") {
      return restaurantImgOne;
    } else {
      return singleRestaurant?.img;
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
          <Cuisine restaurant={singleRestaurant} />
          <Ambience restaurant={singleRestaurant} />
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
            <Website restaurant={singleRestaurant} />
          </div>
        </div>
      </main>
      <footer className="detailed-footer">
        <GoBackButton className="go-back-button__rdp" />

        <Link
          className="detailed-footer__gmaps"
          to={`https://www.google.com/maps/search/${singleRestaurant?.name}${singleRestaurant?.adress}`}
        >
          <MainButton text="open on gmaps" />
        </Link>
      </footer>
    </div>
  );
}
