import "./BookmarkPage.css";
import MainButton from "./MainButton";
import RestaurantBox from "./RestaurantBox";

export default function BookmarkPage() {
  return (
    <div className="app-grid">
      <header className="bookmark-header">
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
        <MainButton text="start filtering" />
      </footer>
    </div>
  );
}
