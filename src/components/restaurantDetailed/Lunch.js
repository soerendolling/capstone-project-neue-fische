import "./Lunch";
import { displayTime } from "../../utilities/displayTime";
import { ReactComponent as LunchIcon } from "../../icons/lunch.svg";

export default function Lunch({ restaurant }) {
  let currentDate = new Date();
  let options = { weekday: "long" };
  const getDay = new Intl.DateTimeFormat("en-US", options).format(currentDate);
  const today = getDay.toLowerCase();
  const open = restaurant?.openingTimes[today]?.lunch?.open;
  const close = restaurant?.openingTimes[today]?.lunch?.close;
  if (open > 0) {
    return (
      <span className="info-line">
        <LunchIcon className="info-svg" />
        <p className="info-text">{displayTime(open, close)}</p>
      </span>
    );
  } else {
    return null;
  }
}
