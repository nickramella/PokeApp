import React from 'react';
import Header from './Components/Header.tsx';
import BaseApp from './Components/BaseApp.tsx';

const App = () => {
  return (
    <div className='w-full items-center'>
      <Header />
      <BaseApp />
    </div>
  )
}

export default App;