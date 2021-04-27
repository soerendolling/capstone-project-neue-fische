import "./MainButton.css";

export default function MainButton({ text }) {
  return (
    <button className="mainButton" type="submit">
      {text}
    </button>
  );
}
