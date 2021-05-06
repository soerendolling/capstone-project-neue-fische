import { useState } from "react";
import "./FilterTag.css";

export default function FilterTag({ text, handleClick }) {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    setIsToggled(!isToggled);
  }

  return (
    <button
      className={isToggled ? "tag-true" : "tag-false"}
      onClick={() => {
        handleClick();
        handleToggle();
      }}
    >
      {text}
    </button>
  );
}
