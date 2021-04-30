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
            <SignInPage />
          </Route>
          <Route exact path="/bookmarkPage">
            <BookmarkPage />
          </Route>
          <Route exact path="/takeAwayPage">
            <TakeAwayPage />
          </Route>
          <Route exact path="/openPage">
            <OpenPage />
          </Route>
          <Route exact path="/ambiencePage">
            <AmbiencePage />
          </Route>
          <Route exact path="/cuisinePage">
            <CuisinePage />
          </Route>
          <Route exact path="/viewPage">
            <ViewPage />
          </Route>
          <Route exact path="/outdoorPage">
            <OutdoorPage />
          </Route>
          <Route exact path="/partOfTownPage">
            <PartOfTownPage />
          </Route>
          <Route exact path="/resultsPage">
            <ResultsPage restaurantData={restaurants} />
          </Route>
          <Route exact path="/restaurantDetailedPage/:id">
            <RestaurantDetailedPage restaurantData={restaurants} />
          </Route>
          <Route exact path="/loadingPage"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
