import React, { ReactNode, useState } from "react";
import cn from "classnames";

interface IAccordeonProps {
  title: string;
  children: ReactNode;
}

const Accordeon = ({ title, children }: IAccordeonProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className="accordeon">
      <button
        className="accordeon__button-title"
        type="button"
        onClick={() => setIsVisible(!isVisible)}
      >
        {title}
        {" "}
        {isVisible ? `-` : `+`}
      </button>
      <div
        className={cn(
          `accordeon__content`,
          isVisible || `accordeon__button-title--visible`
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordeon;
