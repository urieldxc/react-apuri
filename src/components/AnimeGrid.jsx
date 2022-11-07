import { Box, Stack } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import AnimeCard from './AnimeCard'

const AnimeGrid = ({ list }) => {
    return (
        <Stack
            direction={'row'}
            flexWrap={'wrap'}
            justifyContent="center"
            
        >
            {list.map((anime, i) => {
                return (
                    <Box sx={{
                        height: '325px',
                        marginX: 2
                    }}
                        key={i}>
                        <AnimeCard anime={anime} />
                    </Box>
                )
            })}
        </Stack>
    )
}

export default AnimeGrid