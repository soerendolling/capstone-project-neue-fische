import "./SignInPage.css";

export default function SignInPage() {
  return (
    <div className="app-grid">
      <header className="header-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="signIn-headline__svg"
        >
          <g stroke="var(--dark-color)">
            <text fontFamily="Pegasus" x="140" y="100">
              name
            </text>
          </g>
        </svg>
        ;
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
