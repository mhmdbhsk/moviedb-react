import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import axios from 'axios';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const API = '5ee915d46365786e2d67172e2ed7d9b7';
    setTimeout(async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=${page}`
      );
      console.log(res.data.results);
      setMovie(res.data.results);
    }, 500);
    setIsLoading(false);
  }, [page]);

  return (
    <div className="container">
      {isLoading ? (
        <div className="loading">Loading</div>
      ) : (
        <>
          <h1>MovieDB</h1>

          <div className="list-wrapper">
            {movie.map((item) => (
              <Card data={item} />
            ))}
          </div>

          <button onClick={() => setPage(page - 1)}>Previous Page</button>
          <button onClick={() => setPage(page + 1)}>Next Page</button>
        </>
      )}
    </div>
  );
}

export default App;
