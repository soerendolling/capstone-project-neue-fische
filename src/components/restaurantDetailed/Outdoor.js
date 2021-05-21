import { ReactComponent as OutdoorIcon } from "../../icons/terrace.svg";

export default function Outdoor({ restaurant }) {
  const outdoorDetail = restaurant?.location?.restaurantOutdoorDetail;
  const outdoorSeating = restaurant?.location?.restaurantOutdoor;
  const outdoorSeatingBar = restaurant?.location?.barOutdoor;
  if (outdoorSeating || outdoorSeatingBar) {
    const outdoorInfo = !outdoorSeating
      ? "Outdoor seating at the Bar"
      : outdoorDetail;
    return (
      <span className="info-line">
        <OutdoorIcon className="info-svg" />
        <p className="info-text">{outdoorInfo}</p>
      </span>
    );
  } else {
    return null;
  }
}
