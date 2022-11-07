import { Box, Button, FormControl, InputLabel, MenuItem, Pagination, Paper, Select } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React from 'react'
import { useEffect, useState } from 'react'
import { searchAnimeByLetter, searchAnimeByCategory } from '../functions/fetchAnime';
import animeGenres from '../functions/listOfGenres';
import AnimeGrid from './AnimeGrid';
import LetterButton from './LetterButton';


// IDEA: hacer una función que en función de los filtros, los almacene (todos) en un
// objeto, entonces haga las peticiones en base al objeto, con condicionales.

const Categories = () => {
  const [animeList, setAnimeList] = useState([])
  const [selectedLetter, setSelectedLetter] = useState("A")
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesNum, setPagesNum] = useState();
  const [category, setCategory] = useState("");
  const [visibleLetters, setVisibleLetters] = useState(false)

  const abecedary1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" , "M"]
  const abecedary2 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  const handlePage = (e, value) => {
    setCurrentPage(value)
  }

  const handleCategoryChange = (e, value) => {
    setCategory(value.props.value)
  }

  const toggleLetters = (e) => {
    setVisibleLetters(!visibleLetters)
  }

  useEffect(() => {
    // TODO: Refactor
    if (selectedLetter && category === "") {
      searchAnimeByLetter(selectedLetter, currentPage).then(data => {
        setAnimeList(data.data)
        setPagesNum(data.pagination.last_visible_page)
      })
    } else {
      searchAnimeByCategory(selectedLetter, currentPage, category).then(data => {
        setAnimeList(data.data)
        setPagesNum(data.pagination.last_visible_page)
      })
    }
  }, [selectedLetter, currentPage, category])


  return (
    <div>
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>

        <Stack mt={4} flexDirection={'row'} sx={{ minWidth: 350 }}>
          <FormControl sx={{ width: "50%" }} size="small">

            <InputLabel id='select-category-label'>Category</InputLabel>
            <Select
              labelId='select-category-label'
              id='select-category'
              value={category}
              label="category"
              onChange={handleCategoryChange}
            >

              {animeGenres.map(anime => <MenuItem key={anime.genre + anime.id} value={anime.id}>{anime.genre}</MenuItem>)}


            </Select>
          </FormControl>
          <Box mx={4}>
            <Button  sx={{ minHeight: "100%" }} variant='contained' color={visibleLetters ? "secondary" : "primary"} onClick={toggleLetters}>By Letter</Button>
          </Box>
        </Stack>

        {visibleLetters &&
          <Paper sx={{
            marginTop: "40px",
            padding: "5px",
          }}>
            <Stack direction={'row'}>
              {abecedary1.map((letter, i) =>
                <div key={letter + i}> <LetterButton letter={letter} setSelectedLetter={setSelectedLetter} />  </div>)}
            </Stack>

            <Stack direction={'row'}>
              {abecedary2.map((letter, i) =>
                <div key={letter + i}> <LetterButton letter={letter} setSelectedLetter={setSelectedLetter} />  </div>)}
            </Stack>
          </Paper>}



        {pagesNum &&
          <Pagination
            sx={{ marginY: "32px" }}
            count={pagesNum}
            page={currentPage}
            onChange={handlePage}
            variant="outlined"
            shape='rounded'
            size='medium'
            color='secondary'
          />
        }

        <AnimeGrid list={animeList} />

        {pagesNum &&
          <Pagination
            sx={{ marginY: "32px" }}
            count={pagesNum}
            page={currentPage}
            onChange={handlePage}
            variant="outlined"
            shape='rounded'
            size='medium'
            color='secondary'
          />
        }

      </Container>
    </div>
  )
}

export default Categories