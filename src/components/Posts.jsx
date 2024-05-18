import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, []);

  if (isLoading) {
    return <p className='loading'>Loading...</p>;
  }

  if (isError) {
    return <p className='error'>Something went wrong. Try again later.</p>;
  }

  return (
    <>
      <h2 className='title'>List of Posts</h2>
      <ul>
        {posts.map(({ id, userId, title, body }) => (
          <li key={id}>
            <div>
              <strong>Id:</strong> {id}
            </div>
            <div>
              <strong>UserId:</strong> {userId}
            </div>
            <div>
              <strong>Title:</strong> {title}
            </div>
            <div>
              <strong>Body:</strong> {body}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
