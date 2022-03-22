
import { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const [firstSwitch, setFirstSwitch] = useState(true);
  const [secondSwitch, setSecondSwitch] = useState(true);
  const [thirdSwitch, setThirdSwitch] = useState(true);
  const [switchFirst, setSwitchFirst] = useState(true);
  const [switchSecond, setSwitchSecond] = useState(true);
  const [switchThird, setSwitchThird] = useState(true);


  const toggoleHandler = (state, type) => {
    switch (type) {
      case 1:
        if (state === "on") {
          setFirstSwitch(true);

        } else {

          setFirstSwitch(false);
        }
        break;
      case 2:
        if (state === "on") {
          setSecondSwitch(true)
        }
        else {
          setSecondSwitch(false)
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
        case 4:
          if(state=== "on") {
            setSwitchFirst(true)
          }else{
            setSwitchFirst(false)
          }
          break;
          case 5:
            if(state=== "on") {
              setSwitchSecond(true)
            }else{
              setSwitchSecond(false)
            }
            break;
            case 6:
            if(state=== "on") {
              setSwitchThird(true)
            }else{
              setSwitchThird(false)
            }
        break;

      default:
    }
  }


  return (
    <div className="main-content">

      {/* start first switch */}
      <div className="first-switch">
        <div onClick={() => toggoleHandler("on", 1)} className={`${firstSwitch ? "first-active" : "off"}`} >On</div>
        <div onClick={() => toggoleHandler("off", 1)} className={`${!firstSwitch ? "first-active" : "off"}`}> Off</div>
      </div>
      {/* end first switch */}

      {/* start second switch */}
      <div className={`${secondSwitch ? 'second-switch-active' : ''} second-switch`}>
        <div onClick={() => { toggoleHandler("on", 2) }} className={`${secondSwitch ? "second-on-active" : ""} second-on`}>
          On
        </div>
        <div onClick={() => { toggoleHandler("off", 2) }} className={`${!secondSwitch ? "second-off-active" : ""} second-off`}> Off</div>
      </div>
     {/* end second switch */}


      {/* start third switch */}
      <div className={`${thirdSwitch ? 'third-switch-active' : ''} third-switch`}>
        <div onClick={() => toggoleHandler("on", 3)} className={`${thirdSwitch ? "third-on-active" : ""} third-on`}  >On</div>
        <div onClick={() => toggoleHandler("off", 3)} className={`${!thirdSwitch ? "third-off-active" : ""} third-off`}> Off</div>
      </div>
      {/* end third switch */}


    {/* new first button */}

      <div style={{margin:"30px"}}>
        {/* <div style={{display: "flex",justifyContent: "space-around",padding:"300px"}}> */}
        <div className="svg-wrapper">
          <svg className="svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <rect className={`${switchFirst ? "clickedShape" : "shape"}`} height="calc(100% - 2px)" x="1px" y="1px" width="calc(100% - 2px)" rx="30" vector-effect="non-scaling-stroke" />
          </svg>
          <div onClick={() => {toggoleHandler("on",4) ;}}  className={`${switchFirst?'normalColor':'dimColor'} text`}>On</div>


          <div style={{ marginLeft: "90px" }} className="svg-wrapper">
            <svg className="svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <rect className={`${!switchFirst ? "clickedOffShape" : "shape"}`} height="calc(100% - 2px)" x="1px" y="1px" width="calc(100% - 2px)" rx="30" vector-effect="non-scaling-stroke" />
            </svg>
            <div onClick={() => toggoleHandler("off",4)}  className={`${!switchFirst?'normalColor':'dimColor'} text`}>Off</div>
          </div>
        </div>
      </div>



         {/* start new second switch */}
         <div style={{marginTop:"30px",   border: "none"}} className={`${switchSecond ? 'second-switch-active' : ''} second-switch`}>
         <svg className="svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <rect className={`${switchSecond ? "clickedSecondShape " : "clickedSecondOffShape "}`} height="calc(100% - 2px)" x="1px" y="1px" width="calc(100% - 2px)" rx="30" vector-effect="non-scaling-stroke" />
          </svg>
        <div onClick={() => { toggoleHandler("on", 5) }} className={`${switchSecond ? "second-on-active" : ""} second-on`}>
          On
        </div>
        <div onClick={() => { toggoleHandler("off", 5) }} className={`${!switchSecond ? "second-off-active" : ""} second-off`}> Off</div>
      </div>
     {/* end new second switch */}

     {/* <div style={{ border: "none"}}className={`${thirdSwitch ? 'third-switch-active' : ''} third-switch`}>
     <svg className="svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <rect className={`${switchThird ? "clickedThirdShape " : "clickedThirdOffShape "}`} height="calc(100% - 2px)" x="1px" y="1px" width="calc(100% - 2px)" rx="5" vector-effect="non-scaling-stroke" />
          </svg>
        <div onClick={() => toggoleHandler("on", 3)} className={`${thirdSwitch ? "third-on-active" : ""} third-on`}  >On</div>
        <div onClick={() => toggoleHandler("off", 3)} className={`${!thirdSwitch ? "third-off-active" : ""} third-off`}> Off</div>
      </div> */}
    </div>
  );
}

export default App;
