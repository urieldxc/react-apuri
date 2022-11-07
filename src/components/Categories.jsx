import { Pagination, Paper } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React from 'react'
import { useEffect, useState } from 'react'
import { searchAnimeByLetter } from '../functions/fetchAnime';
import AnimeGrid from './AnimeGrid';
import LetterButton from './LetterButton';


const Categories = () => {
  const [animeList, setAnimeList] = useState([])
  const [selectedLetter, setSelectedLetter] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesNum, setPagesNum] = useState();

  const abecedary1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M"]

  const abecedary2 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  const handlePage = (e, value) => {
    setCurrentPage(value)
  }

  useEffect(() => {
    if (selectedLetter) {
      searchAnimeByLetter(selectedLetter, currentPage).then(data => {
        setAnimeList(data.data)
        setPagesNum(data.pagination.last_visible_page)
      })
    }
  }, [selectedLetter, currentPage])

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

        {pagesNum &&
          <Pagination 
            sx={{ marginY:"32px" }}
            count={pagesNum}
            page={currentPage}
            onChange={handlePage}
            variant="outlined"
            shape='rounded'
            size='medium'
          />
        }

        <AnimeGrid list={animeList} />
        {pagesNum &&
          <Pagination 
            sx={{ marginY:"32px" }}
            count={pagesNum}
            page={currentPage}
            onChange={handlePage}
            variant="outlined"
            shape='rounded'
            size='medium'
          />
        }

      </Container>
    </div>
  )
}

export default Categories