import "./FilterTag.css";

export default function FilterTag({ text, onClick, isToggled }) {
  function handleClick() {
    onClick(text);
  }

  return (
    <button
      className={isToggled ? "tag-true" : "tag-false"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
