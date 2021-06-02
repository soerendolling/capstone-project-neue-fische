import { ReactComponent as ViewIcon } from "../../icons/binoculars.svg";
import PropTypes from "prop-types";

View.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default function View({ restaurant }) {
  const view = restaurant?.location?.view;
  const viewInfo = `${view} view`;
  if (view !== "") {
    return (
      <span className="info-line">
        <ViewIcon className="info-svg" />
        <p className="info-text">{viewInfo}</p>
      </span>
    );
  } else {
    return null;
  }
}
