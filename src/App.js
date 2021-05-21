import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SignInPage from "./pages/SignInPage";
import BookmarkPage from "./pages/BookmarkPage";
import ResultsPage from "./pages/ResultsPage";
import TakeAwayPage from "./pages/TakeAwayPage";
import OpenPage from "./pages/OpenPage";
import AmbiencePage from "./pages/AmbiencePage";
import CuisinePage from "./pages/CuisinePage";
import ViewPage from "./pages/ViewPage";
import OutdoorPage from "./pages/OutdoorPage";
import PartOfTownPage from "./pages/PartOfTownPage";
import RestaurantDetailedPage from "./pages/RestaurantDetailedPage";
import LoadingPage from "./pages/LoadingPage";
import { parse } from "./utilities/queryString";
import { takeAwayFilter } from "./utilities/filters/takeAwayFilter";
import { openingTimesFilter } from "./utilities/filters/openingTimesFilter";
import { ambienceFilter } from "./utilities/filters/ambienceFilter";
import { cuisineFilter } from "./utilities/filters/cuisineFilter";
import { viewFilter } from "./utilities/filters/viewFilter";
import { outdoorFilter } from "./utilities/filters/outdoorFilter";
import { partOfTownFilter } from "./utilities/filters/partOfTownFilter";

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
