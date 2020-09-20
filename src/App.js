import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import StartPage from "./components/StartPage";

export const AnimeContext = React.createContext();

function App() {
  const initialAnimeLists = {
    upcoming: [],
    bypopularity: [],
    favorite: [],
  };
  const api = process.env.REACT_APP_API_ENDPOINT;
  const [isLoading, setIsLoading] = useState(false);
  const [animeLists, setAnimeLists] = useState(initialAnimeLists);
  useEffect(() => {
    const fetchAnimeList = async (param) => {
      setIsLoading(true);
      try {
        const res = await Axios.get(`${api}top/anime/1/${param}`);
        setAnimeLists((prevState) => {
          prevState[param] = res.data.top;
          return prevState;
        });
        param === "favorite" && setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setAnimeLists(initialAnimeLists);
      }
    };
    fetchAnimeList("upcoming");
    setTimeout(() => fetchAnimeList("bypopularity"), 4100);
    setTimeout(() => fetchAnimeList("favorite"), 8200);
    console.log(animeLists);
  }, []);
  return (
    <AnimeContext.Provider value={animeLists}>
      <div className="App">
        <NavBar />
        {isLoading ? <Loader /> : <StartPage />}
      </div>
    </AnimeContext.Provider>
  );
}

export default App;
