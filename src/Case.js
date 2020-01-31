import React from "react";

export default function Case(props) {
  let complitedStyle = {
    background: "#efefeb"
  };
  let notComplitedStyle = {
    background: "#fff"
  };

  return (
    <div
      className="case"
      style={props.completed ? complitedStyle : notComplitedStyle}
    >
      <div className="delite-button" onClick={props.deliteAction}>
        <span aria-label="Close" role="img">
          ❌
        </span>
      </div>
      <div className="check-box" onClick={props.action}>
        <p>{props.completed ? "✓" : ""}</p>
      </div>
      <p>{props.caseName}</p>
    </div>
  );
}
