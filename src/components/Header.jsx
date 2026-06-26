import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

export default function Header(){
    return (
    <header>
      <h1>
        <Link to="/" >Router Mission Blog</Link>
      </h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/posts/new">Write</NavLink>
      </nav>
    </header>
    )
}