import { useState, useEffect } from 'react';
import './App.scss';

function App() {

  const [thirdSwitch, setThirdSwitch] = useState(true);
  const [switchFirst, setSwitchFirst] = useState(true);
  const [switchSecond, setSwitchSecond] = useState(true);



  const toggoleHandler = (state, type) => {
    switch (type) {
      case 1:
        if (state === "on") {
          setSwitchFirst(true)
        } else {
          setSwitchFirst(false)
        }
        break;
      case 2:
        if (state === "on") {
          setSwitchSecond(true)
          console.log("on")
        } else {
          setSwitchSecond(false)
          console.log("off")

        }
        break;
      case 3:
        if (state === "on") {
          setThirdSwitch(true)
        }
        else {

          setThirdSwitch(false)
        }
        break;
      default:
    }
  }


  return (
    <div className="main-container">

      {/* new first button */}

      <div className="first-switch">
        <div className='first-on-wrapper'>
          <svg className="svg" height="100%" width="168%" xmlns="http://www.w3.org/2000/svg">
            <rect className={`${switchFirst ? "a1 " : "a"}`}   height="60px" x="1px" y="1px" width="100px" rx="30" vector-effect="non-scaling-stroke" />
            <rect className={`${!switchFirst ? "ao1 " : "ao"}`}  height="60px" x="1px" y="1px" width="100px" rx="30" vector-effect="non-scaling-stroke" />
         </svg>
         <div onClick={()=>{toggoleHandler("on",1)}} className={`${switchFirst ? "first-on-active" : ""} first-on`} >On</div>
        </div>

          <div className="first-off-wrapper">
            <svg className="svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <rect className={`${switchFirst ? "b1 " : "b"}`}   height="60px" x="1px" y="1px" width="100px" rx="30" vector-effect="non-scaling-stroke" />
              <rect className={`${!switchFirst ? "bo1 " : "bo"}`}  height="60px" x="1px" y="1px" width="100px" rx="30" vector-effect="non-scaling-stroke" />            </svg>
            <div onClick={()=>{toggoleHandler("off",1)}} className={`${!switchFirst ? "first-off-active" : ""} first-off`} >Off</div>
          </div>
        </div>


      <div className={`${switchSecond ? 'second-switch-active' : ''} second-switch`}>
        <svg className="svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <rect className={`${switchSecond ? "clickedShape " : "shape"}`}   height="60px" x="1px" y="1px" width="300px" rx="30" vector-effect="non-scaling-stroke" />
          <rect className={`${!switchSecond ? "offClickedShape " : "offShape"}`}  height="60px" x="1px" y="1px" width="300px" rx="30" vector-effect="non-scaling-stroke" />
        </svg>
        <div onClick={()=>{toggoleHandler("on",2)}} className={`${switchSecond ? "second-on-active" : ""} second-on`} >
          On
        </div>
        <div onClick={()=>{toggoleHandler("off",2)}} className={`${!switchSecond ? "second-off-active" : ""} second-off`}>
          Off
        </div>
      </div>

    {/* start third switch */}
      <div className={`${thirdSwitch ? 'third-switch-active' : ''} third-switch`}>
          <svg className="svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <rect className={`${thirdSwitch ? "clickedShape " : "shape"}`}   height="60px" x="1px" y="1px" width="300px" rx="0" vector-effect="non-scaling-stroke" />
            <rect className={`${!thirdSwitch ? "offClickedShape " : "offShape"}`}  height="60px" x="1px" y="1px" width="300px" rx="0" vector-effect="non-scaling-stroke" />
        </svg>
        <div onClick={() => toggoleHandler("on", 3)} className={`${thirdSwitch ? "third-on-active" : ""} third-on`}  >On</div>
        <div onClick={() => toggoleHandler("off", 3)} className={`${!thirdSwitch ? "third-off-active" : ""} third-off`}> Off</div>
      </div>
      {/* end third switch */}



    </div>
  );
}

export default App;