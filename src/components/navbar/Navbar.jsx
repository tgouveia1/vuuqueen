import "./navbar.css"
import "./logo.png"

const Navbar = () => {
 
  return (
    <div className="navbar">
      <div className="navContainer">
        <a href="http://localhost:3000"  className="logo" >VuuQueen</a>
       <div className="navItems">
          <button className="navButton">Registar</button>
          <button className="navButton">Entrar</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar