import { ReactComponent as PhoneIcon } from "../../icons/phone.svg";

export default function Phone({ restaurant }) {
  const number = restaurant?.contact?.number;
  if (number !== "") {
    return (
      <span className="info-line">
        <PhoneIcon className="info-svg" />
        <a href={`tel://${number}`}>
          <p className="info-text">{restaurant?.contact?.number}</p>
        </a>
      </span>
    );
  } else {
    return null;
  }
}
