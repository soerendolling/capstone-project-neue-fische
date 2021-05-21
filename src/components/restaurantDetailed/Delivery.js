import { ReactComponent as DeliveryIcon } from "../../icons/delivery.svg";

export default function Delivery({ restaurant }) {
  const delivery = restaurant.delivery;
  const deliveryDetails = restaurant.deliveryDetails;
  const deliveryInfo = deliveryDetails;
  if (delivery) {
    return (
      <span className="info-line">
        <DeliveryIcon className="info-svg" />
        <p className="info-text">{deliveryInfo}</p>
      </span>
    );
  } else {
    return null;
  }
}
