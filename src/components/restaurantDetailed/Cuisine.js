import PropTypes from "prop-types";

Cuisine.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default function Cuisine({ restaurant }) {
  const cuisineZero =
    restaurant?.cuisine[0] === undefined ? "" : restaurant?.cuisine[0];
  const cuisineOne =
    restaurant?.cuisine[1] === undefined ? "" : restaurant?.cuisine[1];
  if (cuisineZero || cuisineOne) {
    return <h2>{`${cuisineZero} ${cuisineOne}`}</h2>;
  } else {
    return null;
  }
}
