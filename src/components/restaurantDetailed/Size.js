import { ReactComponent as SizeIcon } from "../../icons/size.svg";

export default function Size({ restaurant }) {
  const size = `${restaurant?.size} space`;
  if (size !== "") {
    return (
      <span className="info-line">
        <SizeIcon className="info-svg" />
        <p className="info-text">{size}</p>
      </span>
    );
  }
}
