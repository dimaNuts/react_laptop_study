import { useState } from 'react';
import React from 'react';
import './styles/App.css';
import Counter from './components/Counter';
import PostItem from './components/PostItem';


function App() {
  const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ')

  return (
    <div className="App">
      <Counter/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
    </div>
  );
}

export default App;