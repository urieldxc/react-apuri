import { Button } from '@mui/material'
import React from 'react'

const LetterButton = ({ letter, setSelectedLetter }) => {

    const getLetterValue = (e) => {
        setSelectedLetter(e.target.value)
    }
    return (
        <Button onClick={getLetterValue} value={letter}>
            {letter}
        </Button>
    )
}

export default LetterButton