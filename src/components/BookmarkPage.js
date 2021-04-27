import "./BookmarkPage.css";
import MainButton from "./MainButton";

export default function BookmarkPage() {
  return (
    <div className="app-grid">
      <header className="bookmark-header">
        <h1 className="bookmark-headline">Hi Soeren</h1>
        <h2 className="bookmark-title">Bookmarks</h2>
      </header>
      <main className="bookmark-main"></main>
      <footer>
        <MainButton />
      </footer>
    </div>
  );
}
