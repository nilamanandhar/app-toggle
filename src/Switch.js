import { useState, useEffect,useCallback } from 'react';
import './App.scss';
class Switch{
    constructor(type){
        this.type=type;
    }
    OnSwitched(type){
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


}
const Switch0 = new Switch({ type: 1 });
const Switch1 = new Switch({ type: 2 });
const Switch2 = new Switch({ type: 3 });

Switch0.OnSwitched();
Switch1.OnSwitched();
Switch2.OnSwitched();

Switch0.OnSwitched= function(state){
    if (state == "on") {
        console.log("Switched ON.");
    } else {
        console.log("Switched OFF.");
    }
}
Switch1.OnSwitched=function(state){
    if (state == "on") {
        console.log("Switched ON.");
    } else {
        console.log("Switched OFF.");
    }
}
Switch2.OnSwitched=function(state){
    if (state == "on") {
        console.log("Switched ON.");
    } else {
        console.log("Switched OFF.");
    }
}

