const options = {
    method: "GET",
    mode: 'cors'
}

export const searchByName = async ( name ) => {
    let response = await fetch(`https://api.jikan.moe/v4/anime?q=${ name }&limit=10`, options)
    return response.json()
}
export const searchTopAnime = async ( ) => {
    let response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=5`, options)
    return response.json()
}
