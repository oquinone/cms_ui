import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Navbar = (props) => {
  const { expand, variant, bg = "light" } = props;

  const navbarInputProps = {
    expand,
    variant,
    bg,
  };

  const navbarBrandInputProps = {};
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default Navbar;
