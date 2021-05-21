import { ReactComponent as Binoculars } from "../../icons/binoculars.svg";

export default function showView({ restaurant }) {
  const view = restaurant.location.view;
  const viewInfo = `${view} view`;
  if (view !== "") {
    return (
      <span className="info-line">
        <Binoculars className="info-svg" />
        <p className="info-text">{viewInfo}</p>
      </span>
    );
  } else {
    return null;
  }
}
