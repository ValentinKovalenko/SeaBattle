import React from 'react'
import './App.css';
import GameField from "./components/GameField";
import FieldLetter from "./components/FieldLetter";


function App() {

    return (
        <div>
            <div></div>
            <FieldLetter/>
            <div className='app'>
                <GameField/>

            </div>
        </div>
    );
}

export default App;
