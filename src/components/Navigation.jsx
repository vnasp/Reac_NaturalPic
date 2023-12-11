import { Image } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  const setActiveclassName = ({ isActive }) => (isActive ? "active" : undefined)

  return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient">
        <div className="container-fluid">
          <a className="navbar-brand ps-3" href="#"> <h1><Image src="logo.png" />NaturalPic</h1></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <NavLink
              to="/"
              classNameName={setActiveclass}
              id="NavLink"
            > Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              classNameName={setActiveclass}
              id="NavLink"
            > Favoritos
            </NavLink>
          </div>
        </div>
      </nav>
  )
}
export default Navigation