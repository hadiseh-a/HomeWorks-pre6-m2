import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

function NavBar() {
  const product = useSelector((state) => state);

  return (
    <>
      <Navbar data-bs-theme="light" style={{ fontSize: 20, marginTop: 20 }}>
        <Container>
          <Navbar.Brand href="#home">
            <div className="d-flex w-50 align-items-center me-lg-4">
              <img
                src="./src/assets/APSDark-BHi096m8.png"
                alt="logo"
                style={{ width: "70px", margin: "10px" }}
              />
              <h1 style={{ fontWeight: "500", fontSize: "25px" }}>
                Simply Natural
              </h1>
            </div>
          </Navbar.Brand>
          <Nav
            className="justify-content-between "
            style={{ marginRight: "-50px" }}
          >
            <Nav.Link href="#home" className="me-4">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="me-4">
              About Us
            </Nav.Link>
            <Nav.Link href="#features" className="me-4">
              Contact Us
            </Nav.Link>
            <Nav.Link href="#pricing" className="me-4">
              ${product.price.toFixed(2)}
              <span
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: 15,
                  position: "absolute",
                  right: 100,
                  top: 20,
                  padding: 3,
                }}
              >
                {product.numberOfProduct ? product.numberOfProduct : ""}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
