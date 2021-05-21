import { ReactComponent as MichelinIcon } from "../../icons/michelin.svg";

export default function Michelin({ restaurant }) {
  const michelin = restaurant?.michelinAwarded;
  // const michelinInfo = `${michelin[0]} - ${michelin[1]}`;
  if (michelin !== "") {
    return (
      <span className="info-line">
        <MichelinIcon className="info-svg" />
        <p className="info-text">{michelin}</p>
      </span>
    );
  } else {
    return null;
  }
}
