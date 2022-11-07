import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import '../styles/animeCard.css'

const AnimeCard = ({ anime }) => {
    return (
        <>
            <Card sx={{ width: 250, maxHeight: 315 }}>
                <CardMedia
                    component={"img"}
                    height="250"
                    image={anime.images.webp.image_url}
                />
                <CardContent>

                    <Box
                        component='div'
                        sx={{
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            fontWeight: '700'
                        }}>

                        {anime.title}

                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default AnimeCard