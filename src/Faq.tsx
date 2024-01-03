import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";
import { useEffect, useState } from "react";

interface FaqProps {
  id: number;
  faq: string;
  answer: string;
}

export const Faq = ({ faq, answer }: FaqProps) => {
  const [visible, setVisible] = useState(false);
  const [, setIsKeyboardNavigation] = useState(false);

  const handleClickVisible = () => {
    setVisible(!visible);
  };

  const handleMouseDown = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsKeyboardNavigation(false);
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter" || event.key === " ") {
      setVisible(!visible);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: {
      key: string;
      preventDefault: () => void;
    }) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setVisible(true);
        setIsKeyboardNavigation(true);
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setVisible(false);
        setIsKeyboardNavigation(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`${visible ? "active" : ""} faq`}
      onClick={handleClickVisible}
      onKeyDown={handleKeyPress}
      onMouseDown={handleMouseDown}
      tabIndex={0}
      role="button"
    >
      <div className="title">
        <h3>{faq}</h3>
        {visible ? (
          <img src={minusIcon} alt="minus icon" />
        ) : (
          <img src={plusIcon} alt="plus icon" />
        )}
      </div>
      <div className="content">
        <p>{answer}</p>
      </div>
    </div>
  );
};
