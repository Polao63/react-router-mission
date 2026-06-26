import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import PostEdit from './pages/PostEdit'
import PostNew from './pages/PostNew'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {

  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    fetch("/data/blog.json")
    .then(res => res.json())
    .then(result => {
      setPosts(result);
      setLoaded(true);
    })
  },[])

  function handleDelete(postId){
    const newPosts = posts.filter((data) => {return data.id !== postId});

    setPosts(newPosts);
  }

  function handleCreate(post){
    const newPosts = [...posts, post];

    setPosts(newPosts)
  }

  function handleUpdate(post){
    const newPosts = posts.map((data) => {
        if (data.id === post.id) {
          return post;
        }
        return data;
      });
      setPosts(newPosts);
  }


  return (
    <>
    <Routes>
      <Route path="/" element={<Layout loaded={loaded} />}>
        <Route index element={<Home posts={posts} />} />        
        <Route path="posts" element={<Posts posts={posts} />} />
        <Route
          path="posts/:id"
          element={<PostDetail posts={posts} onDelete={handleDelete}/>}
        />
        <Route path="/posts/:id/edit"
          element={<PostEdit posts={posts}
          onUpdate={handleUpdate}/>}/>
        <Route path="/posts/new" element={<PostNew lastId={posts.length} onCreate={handleCreate}/>}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

     {/* 변수 posts에 blog.json에 내용을 fetch결과를 할당
      변수 loaded에는 로드 완료를 구분하도록, 기본값은 false, fetch후 목록 모두 조회후에는 true로 변경


     */}

    </>
  )
}

export default App
