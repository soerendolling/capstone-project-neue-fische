import { ReactComponent as MichelinIcon } from "../../icons/michelin.svg";

import PropTypes from "prop-types";

Michelin.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default function Michelin({ restaurant }) {
  const michelin = restaurant?.michelinAwarded;
  const michelinInfo = `${michelin[0]} - ${michelin[1]}`;
  if (michelin !== "") {
    return (
      <span className="info-line">
        <MichelinIcon className="info-svg" />
        <p className="info-text">{michelinInfo}</p>
      </span>
    );
  } else {
    return null;
  }
}
