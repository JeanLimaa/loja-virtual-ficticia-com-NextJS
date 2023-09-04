import Link from "next/link";
import { Nav, Navbar } from "reactstrap";
import { FaShoppingCart } from "react-icons/fa";
import styles from './header.module.css';
import { useState, useEffect } from 'react'
import { useCart } from "@/src/hooks/useCart";



const Header = () => {
  const { cart } = useCart()
  const [distinctElements, setDistinctElements] = useState(0);

  useEffect(()=> {
    const diffElements = cart.filter((elemento, index, self) =>
    index === self.findIndex((e) => e.id === elemento.id)).length
    setDistinctElements(diffElements)
  }, [cart])

  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" className="navbar-brand">
        Início
      </Link>
      <Nav className="flex-row mx-3" navbar>
        <Link href="/products" className="nav-link me-4">
          Produtos
        </Link>
        <Link href="/cart" className="nav-link">
          <div className={styles.cartItensMain}>
            <FaShoppingCart />
            <div className={styles.cartItem}>{distinctElements}</div>
          </div>
        </Link>
      </Nav>
    </Navbar>
  )
}

export default Header