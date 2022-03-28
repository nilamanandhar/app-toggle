import React, { useState } from "react";

export default function SecondSwitch() {
  const [switchState, setswitchState] = useState(true);
  return (
    <div
      className={`${switchState ? "second-switch-active" : ""} second-switch`}
    >
      <svg
        className="svg"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className={`${switchState ? "clickedShape " : "shape"}`}
          height="60px"
          x="1px"
          y="1px"
          width="300px"
          rx="30"
          vector-effect="non-scaling-stroke"
        />
        <rect
        className={"secondDefault"}
          height="60px"
          x="1px"
          y="1px"
          width="300px"
          rx="30"
          vector-effect="non-scaling-stroke"
        />
      </svg>
      <div
        onClick={() => {
          setswitchState(true);
        }}
        className={`${switchState ? "second-on-active" : ""} second-on`}
      >
        On
      </div>
      <div
        onClick={() => {
          setswitchState(false);
        }}
        className={`${!switchState ? "second-off-active" : ""} second-off`}
      >
        Off
      </div>
    </div>
  );
}
