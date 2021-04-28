import "./BookmarkPage.css";
import RestaurantBox from "./RestaurantBox";
import { ReactComponent as Find } from "../icons/find.svg";

export default function BookmarkPage() {
  return (
    <div className="app-grid">
      <header>
        <h1 className="bookmark-heading">Hi Soeren,</h1>
        <h2 className="bookmark-subheading">Bookmarks</h2>
      </header>
      <main className="bookmark-main">
        <RestaurantBox />
        <RestaurantBox />
        <RestaurantBox />
        <RestaurantBox />
        <RestaurantBox />
      </main>
      <footer className="bookmark-footer">
        <button className="bookmark-footer__button" type="submit">
          <Find className="bookmark-footer__svg" />
          start
        </button>
      </footer>
    </div>
  );
}
