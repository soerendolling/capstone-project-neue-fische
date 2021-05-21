import { ReactComponent as PriceIcon } from "../../icons/euro.svg";

export default function Price({ restaurant }) {
  const priceTop = restaurant.averagePrice.top;
  const priceBottom = restaurant.averagePrice.bottom;
  const priceInfo = `mains from ${priceBottom}€ to ${priceTop}€`;
  if (priceTop > 0) {
    return (
      <span className="info-line">
        <PriceIcon className="info-svg" />
        <p className="info-text">{priceInfo}</p>
      </span>
    );
  } else {
    return null;
  }
}
