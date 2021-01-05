import React, {useState} from 'react'

function Field() {

    const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const letter = ['А', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    const buttons = [
        {letter: 'A', number: '1', boat: false, clicked: false},
    {letter: 'A', number: '2', boat: false, clicked: false},
    {letter: 'A', number: '3', boat: false, clicked: false},
    {letter: 'A', number: '4', boat: false, clicked: false},
    {letter: 'A', number: '5', boat: false, clicked: false},
    {letter: 'A', number: '6', boat: false, clicked: false},
    {letter: 'A', number: '7', boat: false, clicked: false},
    {letter: 'A', number: '8', boat: false, clicked: false},
    {letter: 'A', number: '9', boat: false, clicked: false},
    {letter: 'A', number: '10', boat: false, clicked: false},
    {letter: 'B', number: '1', boat: false, clicked: false},
    {letter: 'B', number: '2', boat: false, clicked: false},
    {letter: 'B', number: '3', boat: false, clicked: false},
    {letter: 'B', number: '4', boat: false, clicked: false},
    {letter: 'B', number: '5', boat: false, clicked: false},
    {letter: 'B', number: '6', boat: false, clicked: false},
    {letter: 'B', number: '7', boat: false, clicked: false},
    {letter: 'B', number: '8', boat: false, clicked: false},
    {letter: 'B', number: '9', boat: false, clicked: false},
    {letter: 'B', number: '10', boat: false, clicked: false},
    {letter: 'C', number: '1', boat: false, clicked: false},
    {letter: 'C', number: '2', boat: false, clicked: false},
    {letter: 'C', number: '3', boat: false, clicked: false},
    {letter: 'C', number: '4', boat: false, clicked: false},
    {letter: 'C', number: '5', boat: false, clicked: false},
    {letter: 'C', number: '6', boat: false, clicked: false},
    {letter: 'C', number: '7', boat: false, clicked: false},
    {letter: 'C', number: '8', boat: false, clicked: false},
    {letter: 'C', number: '9', boat: false, clicked: false},
    {letter: 'C', number: '10', boat: false, clicked: false},
    {letter: 'D', number: '1', boat: false, clicked: false},
    {letter: 'D', number: '2', boat: false, clicked: false},
    {letter: 'D', number: '3', boat: false, clicked: false},
    {letter: 'D', number: '4', boat: false, clicked: false},
    {letter: 'D', number: '5', boat: false, clicked: false},
    {letter: 'D', number: '6', boat: false, clicked: false},
    {letter: 'D', number: '7', boat: false, clicked: false},
    {letter: 'D', number: '8', boat: false, clicked: false},
    {letter: 'D', number: '9', boat: false, clicked: false},
    {letter: 'D', number: '10', boat: false, clicked: false},
    {letter: 'E', number: '1', boat: false, clicked: false},
    {letter: 'E', number: '2', boat: false, clicked: false},
    {letter: 'E', number: '3', boat: false, clicked: false},
    {letter: 'E', number: '4', boat: false, clicked: false},
    {letter: 'E', number: '5', boat: false, clicked: false},
    {letter: 'E', number: '6', boat: false, clicked: false},
    {letter: 'E', number: '7', boat: false, clicked: false},
    {letter: 'E', number: '8', boat: false, clicked: false},
    {letter: 'E', number: '9', boat: false, clicked: false},
    {letter: 'E', number: '10', boat: false, clicked: false},
    {letter: 'F', number: '1', boat: false, clicked: false},
    {letter: 'F', number: '2', boat: false, clicked: false},
    {letter: 'F', number: '3', boat: false, clicked: false},
    {letter: 'F', number: '4', boat: false, clicked: false},
    {letter: 'F', number: '5', boat: false, clicked: false},
    {letter: 'F', number: '6', boat: false, clicked: false},
    {letter: 'F', number: '7', boat: false, clicked: false},
    {letter: 'F', number: '8', boat: false, clicked: false},
    {letter: 'F', number: '9', boat: false, clicked: false},
    {letter: 'F', number: '10', boat: false, clicked: false},
    {letter: 'G', number: '1', boat: false, clicked: false},
    {letter: 'G', number: '2', boat: false, clicked: false},
    {letter: 'G', number: '3', boat: false, clicked: false},
    {letter: 'G', number: '4', boat: false, clicked: false},
    {letter: 'G', number: '5', boat: false, clicked: false},
    {letter: 'G', number: '6', boat: false, clicked: false},
    {letter: 'G', number: '7', boat: false, clicked: false},
    {letter: 'G', number: '8', boat: false, clicked: false},
    {letter: 'G', number: '9', boat: false, clicked: false},
    {letter: 'G', number: '10', boat: false, clicked: false},
    {letter: 'H', number: '1', boat: false, clicked: false},
    {letter: 'H', number: '2', boat: false, clicked: false},
    {letter: 'H', number: '3', boat: false, clicked: false},
    {letter: 'H', number: '4', boat: false, clicked: false},
    {letter: 'H', number: '5', boat: false, clicked: false},
    {letter: 'H', number: '6', boat: false, clicked: false},
    {letter: 'H', number: '7', boat: false, clicked: false},
    {letter: 'H', number: '8', boat: false, clicked: false},
    {letter: 'H', number: '9', boat: false, clicked: false},
    {letter: 'H', number: '10', boat: false, clicked: false},
    {letter: 'I', number: '1', boat: false, clicked: false},
    {letter: 'I', number: '2', boat: false, clicked: false},
    {letter: 'I', number: '3', boat: false, clicked: false},
    {letter: 'I', number: '4', boat: false, clicked: false},
    {letter: 'I', number: '5', boat: false, clicked: false},
    {letter: 'I', number: '6', boat: false, clicked: false},
    {letter: 'I', number: '7', boat: false, clicked: false},
    {letter: 'I', number: '8', boat: false, clicked: false},
    {letter: 'I', number: '9', boat: false, clicked: false},
    {letter: 'I', number: '10', boat: false, clicked: false},
    {letter: 'J', number: '1', boat: false, clicked: false},
    {letter: 'J', number: '2', boat: false, clicked: false},
    {letter: 'J', number: '3', boat: false, clicked: false},
    {letter: 'J', number: '4', boat: false, clicked: false},
    {letter: 'J', number: '5', boat: false, clicked: false},
    {letter: 'J', number: '6', boat: false, clicked: false},
    {letter: 'J', number: '7', boat: false, clicked: false},
    {letter: 'J', number: '8', boat: false, clicked: false},
    {letter: 'J', number: '9', boat: false, clicked: false},
    {letter: 'J', number: '10', boat: false, clicked: false},
]

    return (
        <button className=''>
            <div>

            </div>
        </button>
    )
}

export default Field;