import { displayTime } from "../../utilities/displayTime";
import { ReactComponent as TakeAwayIcon } from "../../icons/take-away.svg";

export default function TakeAway({ restaurant }) {
  let currentDate = new Date();
  let options = { weekday: "long" };
  const getDay = new Intl.DateTimeFormat("en-US", options).format(currentDate);
  const today = getDay.toLowerCase();
  const takeAwayOptions = restaurant.takeAway;
  const takeAwayDetails = restaurant.takeAwayDetails;
  const open = restaurant.openingTimes[today].takeAway.open;
  const close = restaurant.openingTimes[today].takeAway.close;
  const takeAwayInfo = `${takeAwayDetails} from ${displayTime(open, close)}`;
  if (takeAwayOptions) {
    return (
      <span className="info-line">
        <TakeAwayIcon className="info-svg" />
        <p className="info-text">{takeAwayInfo}</p>
      </span>
    );
  } else {
    return null;
  }
}
