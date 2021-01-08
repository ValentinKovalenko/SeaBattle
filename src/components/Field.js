import React from 'react'

const Field = ({
                   cell: {
                       letter,
                       number,
                       boat,
                       clicked,
                   },
                   onClick,
               }) => (
    <button className={ clicked && boat ? 'green' : (clicked && !boat ? 'red' : '') } disabled={clicked} onClick={() => onClick(letter, number)}>
        {clicked && boat ? 'x' : (clicked && !boat ? '.' : '')  }
    </button>
)

export default Field