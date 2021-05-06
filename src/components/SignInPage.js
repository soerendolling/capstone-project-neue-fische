import "./SignInPage.css";
import { ReactComponent as SignInHeadline } from "../icons/name.svg";
import MainButton from "./MainButton";
import { Link } from "react-router-dom";

export default function SignInPage() {
  return (
    <div className="app-grid">
      <header className="signIn-header">
        <SignInHeadline className="signIn-headline__svg" />
      </header>
      <main>
        <form className="signIn-image">
          <input
            id="name"
            className="signIn-input"
            type="text"
            placeholder="fill in your name"
          />
        </form>
      </main>
      <footer>
        <Link to={`/bookmark-page`}>
          <MainButton text="sign in" />
        </Link>
      </footer>
    </div>
  );
}
