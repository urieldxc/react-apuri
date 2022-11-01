import React from 'react'
import '../../styles/cards.css'

function AnimeCard({ anime }) {
  return (
    <>
        <div className='animeCard'>
            <img src={anime.images.jpg.image_url} alt={anime.title}></img>
            <div className='animeCard--fade'></div>
            <div>
                <h4>{anime.title}</h4>
            </div>
        </div>
    </>
  )
}

export default AnimeCard