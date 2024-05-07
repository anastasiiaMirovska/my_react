import React from 'react';
import './App.css';

import {UseToggle} from "./hooks/useToggleHook";

const App = () => {
    const[value, toggleValue] = UseToggle(false);
    return (
        <div>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
        </div>
    );
};

export default App;
