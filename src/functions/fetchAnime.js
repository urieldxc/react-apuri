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

export const searchAnimeDetail = async ( animeid ) => {
    console.log(animeid)
    let response = await fetch(`https://api.jikan.moe/v4/anime/${animeid}/full`, options)
    return response.json()
}

//Refactorizado
export const searchAnimeByLetter = async( letter, page ) => {
    let response = await fetch(`https://api.jikan.moe/v4/anime?letter=${letter}&page=${page}&limit=24`, options)
    return response.json()
    
}

export const searchAnimeByCategory = async( letter, page, category ) => {
    let response = await fetch(`https://api.jikan.moe/v4/anime?genres=${category}&letter=${letter}&page=${page}&limit=24`, options)
    return response.json()
    
}