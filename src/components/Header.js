import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./header.css"


const Header = () => {
  const { pathname } = useLocation();
  return (
    <Navbar >
      <Container>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/course" disabled={pathname === "/course"}>
              Курсы
            </Nav.Link>
            <Nav.Link as={Link} to="/half" disabled={pathname === "/half"}>
              Полугодие
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav.Link as={Link} to="/profile" disabled={pathname === "/profile"}>
          Профиль
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Header;