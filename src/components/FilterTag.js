import "./FilterTag.css";
import PropTypes from "prop-types";

FilterTag.propTypes = {
  text: PropTypes.string.isRequired,
  isToggled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

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
