import Axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import HeroSlideShow from "./components/HeroSlideShow";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";

function App() {
  const api = process.env.REACT_APP_API_ENDPOINT;
  const [isLoading, setIsLoading] = useState(false);
  const animeLists = { upcoming: [], bypopularity: [], favorite: [] };
  useEffect(() => {
    const fetchAnimeList = async (param) => {
      setIsLoading(true);
      try {
        const res = await Axios.get(`${api}top/anime/1/${param}`);
        animeLists[param].push(...res.data.top);
        // console.log(res.data);
        console.log(animeLists[param]);
        param === "favorite" && setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        animeLists[param] = [];
      }
    };
    fetchAnimeList("upcoming");
    setTimeout(() => fetchAnimeList("bypopularity"), 4100);
    setTimeout(() => fetchAnimeList("favorite"), 8200);
  }, []);
  return (
    <div className="App">
      <NavBar />
      {isLoading ? <Loader /> : <HeroSlideShow />}
    </div>
  );
}

export default App;
