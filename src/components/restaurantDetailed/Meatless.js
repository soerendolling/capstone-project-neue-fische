import { ReactComponent as Vegetarian } from "../../icons/vegetarian.svg";

export default function showMeatlessOptions({ restaurant }) {
  const vegetarian = restaurant.meatless.vegetarianOptions;
  const vegan = restaurant.meatless.veganOptions;
  const showMeatlessOptions =
    vegetarian && vegan
      ? "vegetarian & vegan"
      : vegan
      ? "vegan options"
      : vegetarian
      ? "vegetarian options"
      : "no vegetarian options on the menu";

  return (
    <span className="info-line">
      <Vegetarian className="info-svg" />
      <p className="info-text">{showMeatlessOptions}</p>
    </span>
  );
}
