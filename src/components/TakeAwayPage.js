import "./TakeAwayPage.css";
import { ReactComponent as RightArrow } from "../icons/arrow-right-thin.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Progress } from "../icons/takeAway-progress.svg";
import { Link } from "react-router-dom";

export default function TakeAwayPage() {
  return (
    <div className="app-grid">
      <header className="takeAway-header">
        <h1 className="takeAway-heading">Take Away</h1>
        <h2 className="takeAway-subheading">Bookmarks</h2>
      </header>
      <main className="takeAway-main"></main>
      <footer className="takeAway-footer">
        <Link>
          <LeftArrow />
        </Link>
        <Link>
          <Progress />
        </Link>
        <Link>
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
