import React, { useState } from 'react';
import Albums from './components/Albums';
import Posts from './components/Posts';
import Users from './components/Users';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('albums');
  return (
    <div className='main-content'>
      <button
        onClick={() => setSelectedPage('albums')}
        className={selectedPage === 'albums' ? 'active' : ''}
      >
        Get Albums
      </button>
      <button
        onClick={() => setSelectedPage('users')}
        className={selectedPage === 'users' ? 'active' : ''}
      >
        Get Users
      </button>
      <button
        onClick={() => setSelectedPage('posts')}
        className={selectedPage === 'posts' ? 'active' : ''}
      >
        Get Posts
      </button>
      <>
        {selectedPage === 'albums' && <Albums />}
        {selectedPage === 'users' && <Users />}
        {selectedPage === 'posts' && <Posts />}
      </>
    </div>
  );
};

export default App;
