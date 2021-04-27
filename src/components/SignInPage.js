import "./SignInPage.css";

export default function SignInPage() {
  return (
    <div className="app-grid">
      <header className="header-content">
        <p className="signIn-headline">name</p>
      </header>
      <main>
        <form className="signIn-image">
          <input
            className="signIn-input"
            type="text"
            placeholder="Fill in your name"
          />
        </form>
      </main>
      <footer>
        <button className="signIn-button" type="submit">
          Sign in
        </button>
      </footer>
    </div>
  );
}
