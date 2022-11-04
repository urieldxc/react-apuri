import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { searchAnimeDetail } from '../functions/fetchAnime'

function Anime() {
    const { animeid } = useParams()
    const [fullAnime, setFullAnime] = useState([]);


    useEffect(() => {

        searchAnimeDetail(animeid).then(data => {
            const anime = {
                title: data.data.title || "not found",
                img: data.data.images.jpg.image_url,
                synopsis: data.data.synopsis,
                tags: data.data.genres
            }
            setFullAnime(anime)
        });
    }, [animeid]);

    console.log(fullAnime)
    return (
        <div>

            <Container sx={{ marginTop: 4 }}>
                <Paper elevation={1} sx={{ padding: '20px' }}>
                    <Stack direction={'row'} spacing={4}>

                        <img src={fullAnime.img} alt={fullAnime.title}></img>

                        <Stack direction={'column'}>

                            <Typography variant='h4' mb={2}>
                                {fullAnime.title}
                            </Typography>

                            <Stack direction={'row'} spacing={2} mb={2}>
                                {fullAnime.tags?.map((tag) =>
                                    <Box key={tag.name} sx={{
                                        width: 85,
                                        height: 30,
                                        padding: '4px',
                                        borderRadius: 2,
                                        textAlign: 'center',
                                        bgcolor: 'green',
                                        color: 'white'
                                    }} >
                                        <Typography variant='body2'>
                                            {tag.name}
                                        </Typography>
                                    </Box>
                                )}
                            </Stack>

                            <Typography variant='body1'>
                                {fullAnime.synopsis}
                            </Typography>

                        </Stack>

                    </Stack>
                </Paper>
            </Container>
        </div>
    )
}

export default Anime