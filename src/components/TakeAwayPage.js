import "./TakeAwayPage.css";
import FilterTag from "./FilterTag";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/takeAway-progress.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TakeAwayPage({ restaurantData }) {
  const [filter, setFilter] = useState(restaurantData);

  let filteredRestaurants;
  if (filter === "pre order") {
    filteredRestaurants = restaurantData.filter(
      (restaurantInfo) =>
        restaurantInfo.takeAway === true ||
        restaurantInfo.takeAwayDetails === "pre order" ||
        restaurantInfo.deliveryDetails === "pre order"
    );
  } else if (filter === "pick up") {
    filteredRestaurants = restaurantData.filter(
      (restaurantInfo) =>
        restaurantInfo.takeAway === true ||
        restaurantInfo.takeAwayDetails === "pick up"
    );
  } else if (filter === "delivery") {
    filteredRestaurants = restaurantData.filter(
      (restaurantInfo) => restaurantInfo.delivery === true
    );
  } else {
    filteredRestaurants = restaurantData;
  }

  function handleEatInFilter() {
    setFilter("");
  }

  function handlePickUpFilter() {
    setFilter("pick up");
  }

  function handleDeliveryFilter() {
    setFilter("delivery");
  }

  function handlePreOrderFilter() {
    setFilter("pre order");
  }

  console.log(filter);

  const currentResults = filteredRestaurants.length;

  return (
    <div className="app-grid">
      <header className="takeAway-header">
        <h1 className="takeAway-heading">Take Away</h1>
        <h2 className="takeAway-subheading">choose one or more</h2>
      </header>
      <main className="takeAway-main">
        <div className="takeAway-tag__layout">
          <FilterTag text="eat in" handleClick={handleEatInFilter} />
          <FilterTag text="pre order" handleClick={handlePreOrderFilter} />
          <FilterTag text="pick up" handleClick={handlePickUpFilter} />
          <FilterTag text="delivery" handleClick={handleDeliveryFilter} />
        </div>
        <Link to={`/resultsPage`}>
          <p className="takeAway-main__amount">{currentResults}</p>
        </Link>
      </main>
      <footer className="takeAway-footer">
        <Link to={`/bookmark-page`}>
          <LeftArrow />
        </Link>
        <Progress />
        <Link to={`/open-page`}>
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
