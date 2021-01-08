import React, {useState} from 'react'
import Field from "./Field";
import initBoard from '../const.js'
import FieldNumber from "./FieldNumber";

const COUNT_BOAT = 20

const GameFiled = () => {
    const [message, setMessage] = useState('')
    const [board, setBoard] = useState(initBoard)
    const [countBoat, setCountBoat] = useState(0)
    const onClick = (letter, number) => {
        let newBoard = board.map(el => {
            if (letter === el.letter && number === el.number) {
                el.clicked = true
                if (el.boat){
                    setMessage('попали')
                    setCountBoat(countBoat +1)
                }else {
                    setMessage('промазали')
                }
                            }

            return el;
        })
        setBoard(newBoard)
        if (countBoat === COUNT_BOAT) {
            setMessage ('Гра закінчена')
        }
           }


    return (
        <div>
        <div className='board2'>
            <FieldNumber/>
            <div className='board'>
                {board.map(el => <Field onClick={onClick} cell={el} key={`${el.number}${el.letter}`}/>)}
            </div>
        </div>
            <div className='message'>Ви: {message}</div>
        </div>
    )
}

export default GameFiled
