import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import BookmarkPage from "./components/BookmarkPage";

function App() {
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
          <Route exact path="/takeAwayPage"></Route>
          <Route exact path="/openPage"></Route>
          <Route exact path="/ambiencePage"></Route>
          <Route exact path="/cuisinePage"></Route>
          <Route exact path="/viewPage"></Route>
          <Route exact path="/outdoorPage"></Route>
          <Route exact path="/partOfTownPage"></Route>
          <Route exact path="/resultPage"></Route>
          <Route exact path="/restaurantDetailedPage"></Route>
          <Route exact path="/loadingPage"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
