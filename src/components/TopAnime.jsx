import AnimeCard from "./pure/AnimeCard"
function TopAnime({ top }) {

    return (
        <div style={{ "background": "#e5e5e5" }}>
            <h3>TopAnime</h3>
            <ul>
                {top.map( (anime, i) => 
                    <li key={i}> {anime.title}</li>
                )}
            </ul>
        </div>
    )
}

export default TopAnime