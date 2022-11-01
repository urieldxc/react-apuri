import AnimeCard from "./pure/AnimeCard"
import '../styles/animeGrid.css'

function AnimeGrid({ list }) {

  return (
    <div>
    <h3>Anime List</h3>
      <ul className="animeGrid">
        { list.map( (anime, i) => 
          <li key={i}>
            <AnimeCard anime={anime}/>
          </li>
        ) }
      </ul>
    </div>
  )
}

export default AnimeGrid