import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SignInPage from "./components/SignInPage";
import BookmarkPage from "./components/BookmarkPage";
import ResultsPage from "./components/ResultsPage";
import TakeAwayPage from "./components/TakeAwayPage";
import OpenPage from "./components/OpenPage";
import AmbiencePage from "./components/AmbiencePage";
import CuisinePage from "./components/CuisinePage";
import ViewPage from "./components/ViewPage";
import OutdoorPage from "./components/OutdoorPage";
import PartOfTownPage from "./components/PartOfTownPage";
import RestaurantDetailedPage from "./components/RestaurantDetailedPage";
import LoadingPage from "./components/LoadingPage";
import { parse } from "./utilities/queryString";
import { takeAwayFilter } from "./models/takeAwayFilter";
import { openingTimesFilter } from "./models/openingTimesFilter";
import { ambienceFilter } from "./models/ambienceFilter";
import { cuisineFilter } from "./models/cuisineFilter";
import { viewFilter } from "./models/viewFilter";
import { outdoorFilter } from "./models/outdoorFilter";
import { partOfTownFilter } from "./models/partOfTownFilter";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const location = useLocation();
  const filters = parse(location.search);
  const filteredByTakeAway = takeAwayFilter(restaurants, filters);
  const filteredByOpeningTimes = openingTimesFilter(
    filteredByTakeAway,
    filters
  );
  const filteredByAmbience = ambienceFilter(filteredByOpeningTimes, filters);
  const filteredByCuisine = cuisineFilter(filteredByAmbience, filters);
  const filteredByView = viewFilter(filteredByCuisine, filters);
  const filteredByOutdoor = outdoorFilter(filteredByView, filters);
  const filteredByPartOfTown = partOfTownFilter(filteredByOutdoor, filters);

  useEffect(() => {
    const fetchRestaurants = () => {
      return fetch("/restaurants.json")
        .then((response) => response.json())
        .then((restaurantData) => {
          const newData = restaurantData.results;
          setRestaurants(newData);
        });
    };
    fetchRestaurants();
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/sign-in-page">
          <SignInPage />
        </Route>
        <Route exact path="/bookmark-page">
          <BookmarkPage restaurantData={restaurants} />
        </Route>
        <Route exact path="/take-away-page">
          <TakeAwayPage restaurantData={filteredByTakeAway} />
        </Route>
        <Route exact path="/open-page">
          <OpenPage restaurantData={filteredByOpeningTimes} />
        </Route>
        <Route exact path="/ambience-page">
          <AmbiencePage restaurantData={filteredByAmbience} />
        </Route>
        <Route exact path="/cuisine-page">
          <CuisinePage restaurantData={filteredByCuisine} />
        </Route>
        <Route exact path="/view-page">
          <ViewPage restaurantData={filteredByView} />
        </Route>
        <Route exact path="/outdoor-page">
          <OutdoorPage restaurantData={filteredByOutdoor} />
        </Route>
        <Route exact path="/part-of-town-page">
          <PartOfTownPage restaurantData={filteredByPartOfTown} />
        </Route>
        <Route exact path="/results-page">
          <ResultsPage restaurantData={filteredByPartOfTown} />
        </Route>
        <Route exact path="/restaurant-detailed-page/:id">
          <RestaurantDetailedPage restaurantData={filteredByPartOfTown} />
        </Route>
        <Route exact path="/">
          <LoadingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
