import { useState } from 'react';
import React from 'react';
import './styles/App.css';

import PostList from './components/PostList';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Python', body: 'Description'},
    {id: 3, title: 'Java', body: 'Description'},
    ])

  return (
    <div className="App">
      <form>
        <input type='text' placeholder='Название поста'/>
        <input type='text' placeholder='Описание поста'/>
        <button>Создать пост</button>
      </form>
      <PostList posts={posts} title='Список постов'/>
    </div>
  );
}

export default App;