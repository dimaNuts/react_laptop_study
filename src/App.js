import { useState } from 'react';
import React from 'react';
import './styles/App.css';
import Counter from './components/Counter';
import PostItem from './components/PostItem';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Python', body: 'Description'},
    {id: 3, title: 'Java', body: 'Description'},
    ])

  return (
    <div className="App">
      <h1>Список постов</h1>
      {posts.map((post) => 
        <PostItem post={post} key={post.id}/>
        )
      }
    </div>
  );
}

export default App;