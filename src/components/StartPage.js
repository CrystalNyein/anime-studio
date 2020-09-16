import React, { useContext } from "react";
import { AnimeContext } from "../App";

const StartPage = () => {
  const animeList = useContext(AnimeContext);
  console.log(animeList);
  return (
    <div className="StartPage container-fluid">
      <div className="row">
        <div className="col-md-8">
          <h2>Popular</h2>
          {animeList["upcoming"].slice(0, 5).map((anime) => (
            <img
              key={anime["mal_id"]}
              src={anime["image_url"]}
              alt={anime.title}
            />
          ))}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default StartPage;
