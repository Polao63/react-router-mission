import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function PostEdit({posts, onUpdate}){
  const { id } = useParams();
  const postId = Number(id)

  const post = posts.find((data) => {return data.id === postId});

  if(post === undefined){
    return(
      <div>
        <NotFound/>
      </div>
    )
  }

  const [_title,setTitle] = useState(post.title);
  const [_content,setContent] = useState(post.content);


  const navigate = useNavigate();

  return(
    <div>
        <h1>수정</h1>
        <form action="" method="post">
        <label>제목</label>
        <input type="text" value={_title} onChange={(e) => {
          setTitle(e.target.value)
          
        }} />
        <label>내용</label>
        <textarea value={_content} onChange={(e) => {
          setContent(e.target.value)
        }}></textarea>
      </form>
      <button type="button" onClick={()=>{
        const updatedPost = {
          id: post.id,
          title: _title,
          content: _content,
          createdAt: post.createdAt
        };
        onUpdate(updatedPost);
        navigate(`/posts/${postId}`)
      }}>수정</button>
    </div>
  )
}