import Header from "@/src/components/Header";
import ProductsList from "@/src/components/ProductsList";
import { ProductType, fetchProducts } from "@/src/services/products";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ReactNode } from 'react'
import { Container } from "reactstrap";

interface ProductsProps {
  children?: ReactNode
  products: ProductType[]
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts()

  return { props: { products } }
}

const Products: NextPage<ProductsProps> = (props) => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Nossos Produtos
          </h1>
          {<ProductsList products={props.products}/> }
        </Container>
      </main>
    </>
  )
}

export default Products