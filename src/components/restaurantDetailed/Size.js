import { ReactComponent as SizeIcon } from "../../icons/size.svg";
import PropTypes from "prop-types";

Size.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default function Size({ restaurant }) {
  const size = `${restaurant?.size} space`;
  if (size !== "") {
    return (
      <span className="info-line">
        <SizeIcon className="info-svg" />
        <p className="info-text">{size}</p>
      </span>
    );
  } else {
    return null;
  }
}
