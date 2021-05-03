import "./LoadingPage.css";
import { Link } from "react-router-dom";
import { ReactComponent as LoadingPageName } from "../icons/eten.svg";

export default function LoadingPage() {
  return (
    <Link to={"/signInPage"} className="loading-grid">
      <main className="loading-main">
        <LoadingPageName className="loading-svg" />
      </main>
    </Link>
  );
}
