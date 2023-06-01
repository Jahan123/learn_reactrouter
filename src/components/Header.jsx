import {Link} from "react-router-dom"
function Header() {
  return (
    <div className="navbar" style={{width:"100%",height:"50px",lineHeight:"50px",display:"flex",justifyContent:"flex-end",background:"lightgray",color:"white"}}>
      <Link  to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Header
