import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = () => {
      return fetch("restaurants.json")
        .then((response) => response.json())
        .then((restaurantData) => {
          const newData = restaurantData.results;
          setRestaurants(newData);
        });
    };
    fetchRestaurants();
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoadingPage />
          </Route>
          <Route exact path="/sign-in-page">
            <SignInPage />
          </Route>
          <Route exact path="/bookmark-page">
            <BookmarkPage restaurantData={restaurants} />
          </Route>
          <Route exact path="/take-away-page">
            <TakeAwayPage />
          </Route>
          <Route exact path="/open-page">
            <OpenPage />
          </Route>
          <Route exact path="/ambience-page">
            <AmbiencePage />
          </Route>
          <Route exact path="/cuisine-page">
            <CuisinePage />
          </Route>
          <Route exact path="/view-page">
            <ViewPage />
          </Route>
          <Route exact path="/outdoor-page">
            <OutdoorPage />
          </Route>
          <Route exact path="/part-of-town-page">
            <PartOfTownPage />
          </Route>
          <Route exact path="/results-page">
            <ResultsPage restaurantData={restaurants} />
          </Route>
          <Route exact path="/restaurant-detailed-page/:id">
            <RestaurantDetailedPage restaurantData={restaurants} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
