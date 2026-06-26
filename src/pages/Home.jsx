import { Link } from "react-router-dom"

export default function Home({posts}){

    if(posts.length < 1)
    {
      return(

        <section>
        <h2>소개</h2>
        <p>React Router로 목록/상세/작성/수정/삭제를 연습하는 미션입니다.</p>
        <h3>최신 글</h3>
        <p>글이 없습니다.</p>
        </section>
      )
    }

    return(
    <section>
      <h2>소개</h2>
      <p>React Router로 목록/상세/작성/수정/삭제를 연습하는 미션입니다.</p>
      <h3>최신 글</h3>
      <ul>
        {posts.slice(-3).reverse().map(l => (
          <li key={l.id}>
            <Link to={ "/posts/" + l.id}>{l.title}</Link>
          </li>
        ))}
      </ul>
    </section>
    )
}