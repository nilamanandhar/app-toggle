import React,{ useState} from 'react'

export default function FirstSwitch() {
    const [switchState, setswitchState] = useState(true);

  return (
    <div className="first-switch">
      <div className='first-on-wrapper'>
        <svg className="svg" height="100%" width="168%" xmlns="http://www.w3.org/2000/svg">
          <rect className={`${switchState ? "a1 " : "a"}`}   height="60px" x="1px" y="1px" width="100px" rx="30" vector-effect="non-scaling-stroke" />
          {/* <rect className={`${!switchState ? "ao1 " : "ao"}`}  height="60px" x="1px" y="1px" width="100px" rx="30" vector-effect="non-scaling-stroke" /> */}
       </svg>
       <div onClick={()=>{setswitchState(true)}} className={`${switchState ? "first-on-active" : ""} first-on`} >On</div>
      </div>

        <div className="first-off-wrapper">
          <svg className="svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <rect className={`${switchState ? "bo" : "bo1"}`}   height="60px" x="1px" y="1px" width="100px" rx="30" vector-effect="non-scaling-stroke" />

            {/* <rect className={`${!switchState ? "bo1 " : "bo"}`}  height="60px" x="1px" y="1px" width="100px" rx="30" vector-effect="non-scaling-stroke" />            </svg> */}
          </svg>
          <div onClick={()=>{setswitchState(false)}} className={`${!switchState ? "first-off-active" : ""} first-off`} >Off</div>
        </div>
      </div>
  )
}

