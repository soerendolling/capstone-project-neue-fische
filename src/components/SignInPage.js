import "./SignInPage.css";
import { ReactComponent as SignInHeadline } from "../icons/name.svg";
import MainButton from "./MainButton";

export default function SignInPage() {
  return (
    <div className="app-grid">
      <header className="signIn-header">
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
        <MainButton />
      </footer>
    </div>
  );
}
