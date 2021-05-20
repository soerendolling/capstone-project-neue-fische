import "./SignInPage.css";
import { ReactComponent as SignInHeadline } from "../icons/name.svg";
import MainButton from "./MainButton";
import { sendNameToLocalStorage } from "../utilities/localStorage";

export default function SignInPage() {
  function handleOnSubmit(event) {
    event.preventDefault();
    window.location.replace("/bookmark-page");
    const name = event.target.nameInput.value;
    sendNameToLocalStorage(name);
  }

  return (
    <div className="app-grid">
      <header className="signIn-header">
        <SignInHeadline className="signIn-headline__svg" />
      </header>
      <main>
        <form onSubmit={handleOnSubmit}>
          <div className="signIn-image">
            <input
              id="nameInput"
              className="signIn-input"
              type="text"
              placeholder="fill in your name"
              required
            />
          </div>
          <MainButton text="sign in" />
        </form>
      </main>
    </div>
  );
}
