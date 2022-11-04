import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import '../styles/animeCard.css'

const AnimeCard = ({ anime }) => {
  return (
    <Box sx={{
        padding: '20px',
        bgcolor: 'pink'
    }}>
        
            <img className='animeCard__img' src={anime.images.webp.image_url} alt={anime.title}></img>
            <Typography>
                {anime.title}
            </Typography>

        
    </Box>
  )
}

export default AnimeCard