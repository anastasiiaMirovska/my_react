import React from 'react';
import './App.css';

import {useStorage} from "./hooks/useStorageHook";

const App = () => {
    const [name, setName] = useStorage("name", "Anastasiia", window.sessionStorage)
    const [age, setAge] = useStorage("age2", 78, window.sessionStorage)
    return (
        <div>
            <div>
                {name} - {age}
            </div>
            <button onClick={() => setName("Oleksandr")}>Set Name</button>
            <button onClick={() => setAge(40)}>Set Age</button>
        </div>
    )
};

export default App;
