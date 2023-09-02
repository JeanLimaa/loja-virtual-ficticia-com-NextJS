import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" passHref legacyBehavior>
        <a className="navbar-brand">
          Início
        </a>
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/products" passHref legacyBehavior>
          <a className="nav-link me-2">
            Produtos
          </a>
        </Link>
        <Link href="/cart" passHref legacyBehavior>
          <a className="nav-link">
            Carrinho
          </a>
        </Link>
      </Nav>
    </Navbar>
  )
}

export default Header