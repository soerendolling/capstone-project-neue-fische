import { ReactComponent as MeatlessIcon } from "../../icons/vegetarian.svg";

export default function Meatless({ restaurant }) {
  const vegetarian = restaurant?.meatless?.vegetarianOptions;
  const vegan = restaurant?.meatless?.veganOptions;
  const showMeatlessOptions =
    vegetarian && vegan
      ? "vegetarian & vegan"
      : vegan
      ? "vegan options"
      : vegetarian
      ? "vegetarian options"
      : "no vegetarian options on the menu";
  if (showMeatlessOptions) {
    return (
      <span className="info-line">
        <MeatlessIcon className="info-svg" />
        <p className="info-text">{showMeatlessOptions}</p>
      </span>
    );
  } else {
    return null;
  }
}
