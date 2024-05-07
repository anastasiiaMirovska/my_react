import React, {useState} from 'react';
import './App.css';

import {usePrevious} from "./hooks/usePreviousHook";

const App = () => {
    const [count, setCount] = useState(0)
    const prev_count = usePrevious(count);
    return (
        <div>
            <div style={{fontSize:"70px"}}>
                Previous: {prev_count} -  Current: {count}
            </div>
            <button onClick={()=> setCount(count>=5 ? count-5 : count+1)}>Increment</button>
        </div>
    );
};

export default App;
