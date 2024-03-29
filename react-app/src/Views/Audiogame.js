import {useEffect, useState} from 'react';
import Login from "../Components/Login";
import axios from "axios";


const CLIENT_ID = "myclientID"
const REDIRECT_URI = "http://localhost:3000/Audiogame"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


function Audiogame(){
  const [token, setToken] = useState("")
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

    setToken(token)

  }, [])
  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])
  const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "artist"
      }
    })

    setArtists(data.artists.items)
  }

  const renderArtists = () => {
    return artists.map(artist => (
      <div key={artist.id}>
        {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
        {artist.name}
      </div>
    ))
  }

  return (
    <div>
      <h1 className={"text-blue-500 font-thin position:relative"}>Good morning sunshine, the earth says hello. Rundahahaha</h1>
      <div className={"bg-white/20"}>
        {!token ?
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
            to Spotify</a>
          : <button onClick={logout}>Logout</button>}
      </div>
      <div>
        <form onSubmit={searchArtists}>
          <input type="text" onChange={e => setSearchKey(e.target.value)}/>
          <button type={"submit"} className={"text-white"}>Search</button>
        </form>
      </div>

      <div className={"text-white max-w-screen-sm"}>
        {renderArtists()}
      </div>



    </div>

  )
}

export default Audiogame

