import React from "react";

function Button({ className, children,handleClick }) {
  return (
  <button onClick={handleClick} className={`${className && className} px-3 py-2 md:px-4 md:py-2 mt-2 flex gap-2 items-center justify-center`}>
      {children}
    </button>
  );
}

export default Button;
