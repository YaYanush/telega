import React from 'react';
import './App.css';
import Me from "./from_me/Me";
import Them from "./from_them/Them";

function App() {
    return (
        <div className="wrapper">
            <Me/>
            <Them/>
        </div>
    );
}

export default App;
