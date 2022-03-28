import React,{ useState} from 'react'

export default function ThirdSwitch() {
    const [switchState, setswitchState] = useState(true);

  return (
    <div className={`${switchState ? 'third-switch-active' : ''} third-switch`}>
        <svg className="svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect className={`${switchState ? "clickedShape " : "shape"}`}   height="60px" x="1px" y="1px" width="300px" rx="0" vector-effect="non-scaling-stroke" />
        <rect
          style={{
            opacity: 0.6,
            stroke: "white",
            strokeWidth: "2px",
            strokeDashoffset: -720,
            fill: "none",
          }}
          height="60px"
          x="1px"
          y="1px"
          width="300px"
          rx="0"
          vector-effect="non-scaling-stroke"
        />
        {/* <rect className={`${!switchState ? "offClickedShape " : "offShape"}`}  height="60px" x="1px" y="1px" width="300px" rx="0" vector-effect="non-scaling-stroke" /> */}
        </svg>
        <div onClick={() => setswitchState(true)} className={`${switchState ? "third-on-active" : ""} third-on`}  >On</div>
        <div onClick={() => setswitchState(false)} className={`${!switchState ? "third-off-active" : ""} third-off`}> Off</div>
    </div>
  )
}



