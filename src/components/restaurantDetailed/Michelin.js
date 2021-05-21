import { ReactComponent as Michelin } from "../../icons/michelin.svg";

export default function showMichelin({ restaurant }) {
  const michelin = restaurant.michelinAwarded;
  const michelinInfo = `${michelin[0]} - ${michelin[1]}`;
  if (michelin !== "") {
    return (
      <span className="info-line">
        <Michelin className="info-svg" />
        <p className="info-text">{michelinInfo}</p>
      </span>
    );
  } else {
    return null;
  }
}
