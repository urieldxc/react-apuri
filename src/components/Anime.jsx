import React, { useEffect, useState } from 'react'
import { searchTopAnime, searchByName } from '../functions/queryAnime';
import AnimeGrid from './AnimeGrid';
// import TopAnime from './TopAnime';
import NavBar from './NavBar';

function Anime() {

  // const [topAnime, setTopAnime] = useState([])
  const [animeList, setAnimeList] = useState([]);
  const [inputString, setInputString] = useState("");

  // const obtainTopAnime = () => {
  //   searchTopAnime().then(response => setTopAnime(response.data))
  // }

  const obtainAnime = () =>{
    searchByName(inputString).then(response => setAnimeList(response.data))
  }

  useEffect(() => {
    // obtainTopAnime();
    obtainAnime()
  }, [inputString]);



  return (
    <div>
      <NavBar setInputString={setInputString}/>
      {/* <TopAnime top={topAnime} /> */}
      <AnimeGrid list={animeList}/>
    </div>
  )
}

export default Anime