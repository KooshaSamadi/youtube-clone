import "./spinner.styles.scss";

import React from "react";

const Spinner = () => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
