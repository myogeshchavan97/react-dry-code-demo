import React, { useState } from 'react';
import { COMPONENTS } from './utils/constants';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('albums');
  const SelectedComponent = COMPONENTS[selectedPage];

  return (
    <div className='main-content'>
      {Object.keys(COMPONENTS).map((page) => {
        return (
          <button
            key={page}
            onClick={() => setSelectedPage(page)}
            className={selectedPage === page ? 'active' : ''}
          >
            Get {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        );
      })}
      <SelectedComponent />
    </div>
  );
};

export default App;
