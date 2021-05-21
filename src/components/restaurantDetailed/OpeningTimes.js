import { ReactComponent as Clock } from "../../icons/clock.svg";
import { displayTime } from "../../utilities/displayTime";

export default function OpeningTimes({ restaurant }) {
  let currentDate = new Date();
  let options = { weekday: "long" };
  const getDay = new Intl.DateTimeFormat("en-US", options).format(currentDate);
  const today = getDay.toLowerCase();
  const open = restaurant.openingTimes[today].general.open;
  const close = restaurant.openingTimes[today].general.close;
  return (
    <span className="info-line">
      <Clock className="info-svg" />
      <p className="info-text">{displayTime(open, close)}</p>
    </span>
  );
}
