import React from 'react';
import List from './components/List';

const App = () => {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '24px',
      backgroundImage: 'linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)',

    }}>
      <List />
    </div>
  );
};

export default App;

