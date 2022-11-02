import React, { useEffect, useRef, useState } from 'react'
import { DebounceInput } from 'react-debounce-input';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { searchByName } from '../functions/fetchAnime.js'
import '../styles/navbar.css'


const NavBar = () => {

    const [inputValue, setInputValue] = useState("")
    const [animeList, setAnimeList] = useState([])
    const [visibleSearchList, setVisibleSearchList] = useState(false)

    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            setInputValue(e.target.value)
        }
    }

    const handleChange = (e) => {
        if (e.target.value.length >= 3) {
            setInputValue(e.target.value)
            setVisibleSearchList(true)
        } else {
            setVisibleSearchList(false) 
        }
    }

    const handleBlur= () =>{
        setTimeout(()=>{
            setVisibleSearchList(false)
        }, 250)
    }
    const handleFocus= () =>{
        if( inputValue.length >= 3) {
            setVisibleSearchList(true)
        } else {
            setVisibleSearchList(false)
        }
        
    }

    const obtainAnimes = () => {
        searchByName(inputValue).then(data => setAnimeList(data.data))
    }

    useEffect(() => {
        obtainAnimes();
    }, [inputValue])

    return (
        <div className='navbar'>

            <div>
                <Link underline="none" component={RouterLink} to="/categories">Categories</Link>
                <Link underline="none" component={RouterLink} to="/my-list"> My List</Link>
            </div>


            <div className='navbar__inputDiv'>
                <div className='navbar__test'>

                    <DebounceInput
                        className='navbar__input'
                        placeholder='Search anime'
                        debounceTimeout={500}
                        onKeyDown={handleSubmit}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}

                    />

                    <div className={`navbar__list ${visibleSearchList ? '': 'hidden'}`}>
                        <ul>
                            {animeList.map((anime, i) =>
                                <li key={anime.mal_id}>
                                <RouterLink to={`/anime/${anime.mal_id}`}>
                                    {anime.title}
                                </RouterLink>
                                </li>
                            )}
                        </ul>
                    </div>


                </div>


            </div>


        </div>
    )
}

export default NavBar