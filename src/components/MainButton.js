import "./MainButton.css";
import PropTypes from "prop-types";

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default function MainButton({ text }) {
  return (
    <button className="main-button" type="submit">
      {text}
    </button>
  );
}
