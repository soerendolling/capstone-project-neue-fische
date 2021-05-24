import { ReactComponent as DeliveryIcon } from "../../icons/delivery.svg";

export default function Delivery({ restaurant }) {
  let currentDate = new Date();
  let options = { weekday: "long" };
  const getDay = new Intl.DateTimeFormat("en-US", options).format(currentDate);
  const today = getDay.toLowerCase();
  const open = restaurant?.openingTimes[today]?.takeAway.open;
  const delivery = restaurant?.delivery;
  const deliveryDetails = restaurant?.deliveryDetails;
  const deliveryInfo = deliveryDetails;
  if (delivery && open) {
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
