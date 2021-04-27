import "./SignInPage.css";
import { ReactComponent as SignInHeadline } from "../icons/name.svg";

export default function SignInPage() {
  return (
    <div className="app-grid">
      <header className="header-content">
        <SignInHeadline className="signIn-headline__svg" />
      </header>
      <main>
        <form className="signIn-image">
          <input
            className="signIn-input"
            type="text"
            placeholder="fill in your name"
          />
        </form>
      </main>
      <footer>
        <button className="signIn-button" type="submit">
          sign in
        </button>
      </footer>
    </div>
  );
}
