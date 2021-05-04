import "./FilterTag.css";

export default function FilterTag({ text, handleClick }) {
  return (
    <button className="tag" onClick={handleClick}>
      {text}
    </button>
  );
}
