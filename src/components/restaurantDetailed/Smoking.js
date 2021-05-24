import { ReactComponent as NoSmokingIcon } from "../../icons/no-smoking.svg";

export default function Smoking({ restaurant }) {
  const smokingInside = restaurant?.smoking?.inside;
  const smokingOutside = restaurant?.smoking?.outside;
  const smoking = `${
    smokingInside
      ? "smoking allowed"
      : smokingOutside
      ? "smoking outside"
      : "non smoking"
  }`;

  return (
    <span className="info-line">
      <NoSmokingIcon className="info-svg" />
      <p className="info-text">{smoking}</p>
    </span>
  );
}
