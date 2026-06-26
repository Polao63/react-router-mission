import PostDetail from "./PostDetail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function PostNew({lastId,onCreate}) {
  const [_title,setTitle] = useState("");
  const [_content,setContent] = useState("");

  const Today = new Date()

  const curTime = Today.toISOString().slice(0,10);

  const navigate = useNavigate();

  return (
    <div>
      <h1>글쓰기</h1>
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
        const newPost = {
          id: Number(lastId + 1),
          title: _title,
          content: _content,
          createdAt: curTime,
        }
        onCreate(newPost)
        navigate(`/posts/${Number(lastId + 1)}`)
      }}>작성</button>
    </div>
  );
}