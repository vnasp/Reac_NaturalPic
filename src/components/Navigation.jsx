import { Navbar, Nav, Image } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)

  return (
    <>
      <Navbar className="bg-success bg-gradient justify-content-start p-3">
        <Navbar.Brand href="#"><h1 className="text-white mx-1 me-3">
          <Image src="logo.png" />NaturalPic</h1>
        </Navbar.Brand>
        <Nav>
          <NavLink
            to="/"
            className={setActiveClass}
            id="NavLink"
          > Inicio
          </NavLink>
          <NavLink
            to="/favoritos"
            className={setActiveClass}
            id="NavLink"
          > Favoritos
          </NavLink>
        </Nav>
      </Navbar>
    </>
  )
}
export default Navigation