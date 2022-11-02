import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { searchAnimeDetail } from '../functions/fetchAnime'

function Anime() {
    const {animeid} = useParams()
    const [fullAnime, setFullAnime] = useState([]);

    
    useEffect(() => {
        console.log("alberto")
        searchAnimeDetail(animeid).then(data => {
            const anime = {
                title: data.data.title || "not found" ,
                img: data.data.images.jpg.image_url,
                synopsis: data.data.synopsis
            }
            setFullAnime(anime)
        });
    }, [animeid]);

  return (
    <div>
        <h2>{fullAnime.title}</h2>

        <img src={fullAnime.img} alt={fullAnime.title}></img>

        <p>{fullAnime.synopsis}</p>
    </div>
  )
}

export default Anime