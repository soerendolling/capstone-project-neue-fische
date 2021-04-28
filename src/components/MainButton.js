import "./MainButton.css";

export default function MainButton({ text }) {
  return (
    <button className="main-button" type="submit">
      {text}
    </button>
  );
}
