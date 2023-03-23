import { Container, Navbar } from "react-bootstrap";

function Footer() {
    return (
        <footer>
            <Navbar bg="dark" variant="dark" fixed="bottom">
                <Container className="justify-content-center">
                    <Navbar.Brand>Projeto Integrador 1 &#169; 2023.</Navbar.Brand>
                </Container>
            </Navbar>
        </footer>
    )
};

export default Footer;