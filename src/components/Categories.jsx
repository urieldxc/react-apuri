import { Container, Stack } from '@mui/system';
import React from 'react'
import { useEffect, useState } from 'react'
import { searchAnimeByLetter } from '../functions/fetchAnime';
import AnimeGrid from './AnimeGrid';
import LetterButton from './LetterButton';

const Categories = () => {
  const [animeList, setAnimeList] = useState([])
  const [selectedLetter, setSelectedLetter] = useState()

  const abecedary1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M"]

  const abecedary2 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

 

  useEffect(() => {
    if (selectedLetter) {
      searchAnimeByLetter(selectedLetter).then(data => setAnimeList(data.data))
    }
  }, [selectedLetter])

  return (
    <div>
      <Container>
        <Stack direction={'row'}>
          {abecedary1.map((letter, i) =>
            <div key={letter + i}> <LetterButton letter={letter} setSelectedLetter={setSelectedLetter} />  </div>)}
        </Stack>

        <Stack direction={'row'}>
          {abecedary2.map((letter, i) =>
            <div key={letter + i}> <LetterButton letter={letter} setSelectedLetter={setSelectedLetter} />  </div>)}
        </Stack>

        <AnimeGrid list={ animeList }/>

      </Container>
    </div>
  )
}

export default Categories