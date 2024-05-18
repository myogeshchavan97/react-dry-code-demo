import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getAlbums = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/albums'
        );
        setAlbums(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getAlbums();
  }, []);

  if (isLoading) {
    return <p className='loading'>Loading...</p>;
  }

  if (isError) {
    return <p className='error'>Something went wrong. Try again later.</p>;
  }
  return (
    <>
      <h2 className='title'>List of Albums</h2>
      <ul>
        {albums.map(({ id, userId, title }) => (
          <li key={id}>
            <div>
              <strong>Id: </strong>
              {id}
            </div>
            <div>
              <strong>UserId:</strong> {userId}
            </div>
            <div>
              <strong>Title:</strong> {title}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Albums;
