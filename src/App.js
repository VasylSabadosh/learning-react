import { useState } from 'react';
import './App.css';
import FormButton from './components/Form/FormButton';
import Modal from './components/Form/Modal.jsx';
import PostForm from './components/Form/PostForm';
import PostList from './components/Post/PostList';


function App() {

  const [modal, setModal] = useState(false);

  const [posts, setPosts] = useState([
    { id: 1, title: 'learningReact1', body: 'Description' },
    { id: 2, title: 'learningReact2', body: 'Description' },
    { id: 3, title: 'learningReact3', body: 'Description' },

  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost =(post) => {
    setPosts(posts.filter(p => p.id!==post.id))
  }


  return (
    <div className="App">
      <FormButton onClick={() => setModal(true)}>New post</FormButton>
      <Modal visible={modal} setVisible={setModal} >
        <PostForm create ={createPost}/>
      </Modal>
      <PostList remove={removePost} posts={posts} title={"post list"} />
    </div>
  );
}

export default App;
