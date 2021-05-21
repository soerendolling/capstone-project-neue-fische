import { ReactComponent as AdressIcon } from "../../icons/pin.svg";

export default function Adress({ restaurant }) {
  const adress = restaurant?.contact?.adress;
  const adressLink = `https://www.google.com/maps/search/${restaurant?.name}${adress}`;
  if (adress !== "") {
    return (
      <span className="info-line">
        <AdressIcon className="info-svg" />
        <a href={adressLink}>
          <p className="info-text">{adress}</p>
        </a>
      </span>
    );
  }
}
