import { Link } from "react-router-dom"


export default function Posts({posts}){
    console.log(posts)
    if(posts.length < 1)
    {
      return(
        <h2>게시글이 없습니다.</h2>
      )
    }

    return(
    <nav>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map(l => (
          <li key={l.id}>
            <Link to={ `/posts/${l.id}`}>{l.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
    )
}