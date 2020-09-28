import Axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { LoaderContext } from "../App";
import Loader from "./Loader";

const DetailPage = ({ match }) => {
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  const [anime, setAnime] = useState({});
  const fetchAnime = () => {
    setIsLoading(true);
    Axios.get(`anime/${match.params.id}`)
      .then((res) => {
        console.log(res.data);
        setAnime(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setAnime({});
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchAnime();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <h1>Detail</h1>
    </div>
  );
};

export default DetailPage;
