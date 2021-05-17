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
import { ReactComponent as WWW } from "../icons/internet.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Vegetarian } from "../icons/vegetarian.svg";
import { ReactComponent as Delivery } from "../icons/delivery.svg";
import { ReactComponent as Lunch } from "../icons/lunch.svg";
import { ReactComponent as Size } from "../icons/size.svg";
import { ReactComponent as Euro } from "../icons/euro.svg";
import { ReactComponent as Email } from "../icons/at.svg";
import { ReactComponent as Michelin } from "../icons/michelin.svg";

export default function RestaurantDetailedPage({ restaurantData }) {
  let { id } = useParams();
  const singleRestaurant = restaurantData.find(
    (restaurant) => restaurant.id === Number(id)
  );

  let currentDate = new Date();
  let options = { weekday: "long" };
  const getDay = new Intl.DateTimeFormat("en-US", options).format(currentDate);
  const today = getDay.toLowerCase();

  let classForMonday;
  let classForTuesday;
  let classForWednesday;
  let classForThursday;
  let classForFriday;
  let classForSaturday;
  let classForSunday;

  singleRestaurant.openingTimes.monday.general.open > 0
    ? (classForMonday = " open")
    : (classForMonday = " closed");

  singleRestaurant.openingTimes.tuesday.general.open > 0
    ? (classForTuesday = " open")
    : (classForTuesday = " closed");

  singleRestaurant.openingTimes.wednesday.general.open > 0
    ? (classForWednesday = " open")
    : (classForWednesday = " closed");

  singleRestaurant.openingTimes.thursday.general.open > 0
    ? (classForThursday = " open")
    : (classForThursday = " closed");

  singleRestaurant.openingTimes.friday.general.open > 0
    ? (classForFriday = " open")
    : (classForFriday = " closed");

  singleRestaurant.openingTimes.saturday.general.open > 0
    ? (classForSaturday = " open")
    : (classForSaturday = " closed");

  singleRestaurant.openingTimes.sunday.general.open > 0
    ? (classForSunday = " open")
    : (classForSunday = " closed");

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
        : "no meatless options";

    return (
      <span className="info-line">
        <Vegetarian className="info-svg" />
        <p className="info-text">{showMeatlessOptions}</p>
      </span>
    );
  }

  function showOpeningTimes() {
    const openingToday = singleRestaurant.openingTimes[today].general.open;
    const closingToday = singleRestaurant.openingTimes[today].general.close;
    const openingTimesInfo =
      openingToday > 0
        ? `${openingToday} until ${closingToday}`
        : "Closed Today";
    return (
      <span className="info-line">
        <Clock className="info-svg" />
        <p className="info-text">{openingTimesInfo}</p>
      </span>
    );
  }

  function showLunch() {
    const lunchTodayOpen = singleRestaurant.openingTimes[today].lunch.open;
    const lunchTodayClose = singleRestaurant.openingTimes[today].lunch.close;
    if (lunchTodayOpen > 0) {
      return (
        <span className="info-line">
          <Lunch className="info-svg" />
          <p className="info-text">{`${lunchTodayOpen} until ${lunchTodayClose}`}</p>
        </span>
      );
    }
  }

  function showView() {
    const view = singleRestaurant.location.view;
    if (view !== "") {
      return (
        <span className="info-line">
          <Binoculars className="info-svg" />
          <p className="info-text">{view}</p>
        </span>
      );
    }
  }

  function showTakeAwayOptions() {
    const takeAwayOptions = singleRestaurant.takeAway;
    const takeAwayDetails = singleRestaurant.takeAwayDetails;
    const takeAwayOpen = singleRestaurant.openingTimes[today].takeAway.open;
    const takeAwayClose = singleRestaurant.openingTimes[today].takeAway.close;
    const takeAwayInfo = `${takeAwayDetails} from  ${
      takeAwayOpen ? takeAwayOpen : ""
    }  ${takeAwayClose ? takeAwayClose : ""}`;
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
      const outdoorInfo = !outdoorSeating ? "At the Bar" : outdoorDetail;
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
    const size = singleRestaurant.size;
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
    const priceInfo = `${priceBottom} - ${priceTop}`;
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
    const michelinInfo = `${michelin[0]} ${michelin[1]}`;
    if (michelin.lenght !== 0) {
      return (
        <span className="info-line">
          <Michelin className="info-svg" />
          <p className="info-text">{michelinInfo}</p>
        </span>
      );
    }
  }

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
          <h2>{` ${singleRestaurant.cuisine[0]}  ${singleRestaurant.cuisine[1]} `}</h2>
          <h2>{` ${singleRestaurant.ambience[0]}  ${singleRestaurant.ambience[1]} `}</h2>
        </div>
        <div className="headline-weekday__layout">
          <div className={`headline-weekday__day${classForMonday}`}>M</div>
          <div className={`headline-weekday__day${classForTuesday}`}>T</div>
          <div className={`headline-weekday__day${classForWednesday}`}>W</div>
          <div className={`headline-weekday__day${classForThursday}`}>T</div>
          <div className={`headline-weekday__day${classForFriday}`}>F</div>
          <div className={`headline-weekday__day${classForSaturday}`}>S</div>
          <div className={`headline-weekday__day${classForSunday}`}>S</div>
        </div>
        <div className="detailed-info__layout">
          <div className="detailed-info__text-top">
            {showLunch()}
            {showOpeningTimes()}
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
