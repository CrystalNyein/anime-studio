import Axios from "axios";
import React, { useEffect } from "react";

function DetailPage({ match }) {
  const api = process.env.REACT_APP_API_ENDPOINT;
  const fetchAnime = () => {
    Axios.get(`${api}anime/${match.params.id}`).then((res) =>
      console.log(res.data)
    );
  };
  useEffect(() => {
    fetchAnime();
  }, []);
  return <div>Detail Page {match.params.id}</div>;
}

export default DetailPage;
