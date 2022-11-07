import { Paper } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React from 'react'
import { useEffect, useState } from 'react'
import { searchAnimeByLetter } from '../functions/fetchAnime';
import AnimeGrid from './AnimeGrid';
import LetterButton from './LetterButton';
import PageButton from './PageButton';

const Categories = () => {
  const [animeList, setAnimeList] = useState([])
  const [selectedLetter, setSelectedLetter] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const abecedary1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M"]

  const abecedary2 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



  useEffect(() => {
    if (selectedLetter) {
      searchAnimeByLetter(selectedLetter, currentPage).then(data =>{ 
        setAnimeList(data.data)
        setCurrentPage(data.pagination.last_visible_page)
      })
    }
  }, [selectedLetter])

  return (
    <div>
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Paper sx={{
          marginTop: "40px",
          padding: "5px"
        }}>
          <Stack direction={'row'}>
            {abecedary1.map((letter, i) =>
              <div key={letter + i}> <LetterButton letter={letter} setSelectedLetter={setSelectedLetter} />  </div>)}
          </Stack>

          <Stack direction={'row'}>
            {abecedary2.map((letter, i) =>
              <div key={letter + i}> <LetterButton letter={letter} setSelectedLetter={setSelectedLetter} />  </div>)}
          </Stack>
        </Paper>
        <AnimeGrid list={animeList} />

        <PageButton pages={currentPage} />

      </Container>
    </div>
  )
}

export default Categories