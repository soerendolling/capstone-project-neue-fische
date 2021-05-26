import { ReactComponent as WebsiteIcon } from "../../icons/internet.svg";
import PropTypes from "prop-types";

Website.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default function Website({ restaurant }) {
  const website = restaurant?.contact?.website;
  if (website !== "") {
    return (
      <span className="info-line">
        <WebsiteIcon className="info-svg" />
        <a href={website}>
          <p className="info-text">{website}</p>
        </a>
      </span>
    );
  } else {
    return null;
  }
}
