import React from "react";
import AsideAnimeCard from "./AsideAnimeCard";

function AsideAnimeCardGroup({ animeList }) {
  return (
    <React.Fragment>
      {animeList.map((anime) => (
        <AsideAnimeCard key={anime["mal_id"]} anime={anime} />
      ))}
    </React.Fragment>
  );
}

export default AsideAnimeCardGroup;
