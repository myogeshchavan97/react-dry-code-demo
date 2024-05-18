import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  if (isLoading) {
    return <p className='loading'>Loading...</p>;
  }

  if (isError) {
    return <p className='error'>Something went wrong. Try again later.</p>;
  }
  return (
    <>
      <h2 className='title'>List of Users</h2>
      <ul>
        {users.map(({ id, name, email }) => (
          <li key={id}>
            <div>
              <strong>Id: </strong>
              {id}
            </div>
            <div>
              <strong>Name:</strong> {name}
            </div>
            <div>
              <strong>Email:</strong> {email}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
