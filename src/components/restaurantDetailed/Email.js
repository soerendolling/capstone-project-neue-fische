import { ReactComponent as EmailIcon } from "../../icons/at.svg";

export default function Email({ restaurant }) {
  const email = restaurant?.contact?.email;
  if (email !== "") {
    return (
      <span className="info-line">
        <EmailIcon className="info-svg" />
        <a href={`mailto:${email}`}>
          <p className="info-text">{email}</p>
        </a>
      </span>
    );
  } else {
    return null;
  }
}
