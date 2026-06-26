import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";


export default function PostDetail({posts, onDelete}){
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

  let navigate = useNavigate();

  return(
      <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.createdAt}</p>
          <button type="button" onClick={()=>{
            navigate( `/posts/${post.id}/edit`)
          }}>수정</button>
          <button type="button" onClick={() => 
          {
            if(confirm("정말 삭제하시겠습니까?"))
            {
              onDelete(postId)
              navigate('/posts')
            }
          }}>삭제</button>
      </div>
  )
}