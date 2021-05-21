import "./GoBackButton.css";
import { ReactComponent as ArrowLeft } from "../icons/arrow-left.svg";
import { useHistory } from "react-router-dom";

export default function GoBackButton() {
  const history = useHistory();
  return (
    <button className="go-back-button">
      <ArrowLeft onClick={() => history.goBack()} />
    </button>
  );
}
