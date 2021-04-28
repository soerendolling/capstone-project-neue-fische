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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
