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
      <main className="takeAway-main">
        <div className="takeAway-main__tag-content">
          <div className="takeAway-tag">eat in</div>
          <div className="takeAway-tag">take Away</div>
          <div className="takeAway-tag">pick up</div>
          <div className="takeAway-tag">delivery</div>
        </div>
        <div className="takeAway-main__amount">50</div>
      </main>
      <footer className="takeAway-footer">
        <Link to={`/bookmarkPage`}>
          <LeftArrow />
        </Link>
        <Progress />
        <Link to={`/openPage`}>
          <RightArrow />
        </Link>
      </footer>
    </div>
  );
}
