import { useState, useEffect } from 'react';
import './App.scss';
import FirstSwitch from './component/FirstSwitch';
import SecondSwitch from './component/SecondSwitch';
import ThirdSwitch from './component/ThirdSwitch';

function App() {
  return (
    <div className="main-container">
        <FirstSwitch/>
        <SecondSwitch/>
        <ThirdSwitch/>
    </div>
  );
}

export default App;
