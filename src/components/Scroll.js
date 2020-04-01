import React from "react";

// Every single component in react has props property
const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid #a4fff7",
        height: "520px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
