import Header from "@/src/components/Header/Header";
import ProductDetails from "@/src/components/Products/ProductDetails";
import { ProductType, fetchProduct, fetchProducts } from "@/src/services/products";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { Container } from "reactstrap";

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id;

    if(typeof id === 'string') {
        const product = await fetchProduct(id)

        return{
            props: {
                product
            }
        }
    }
    //caso não passe
    return {
        redirect: {
            destination: '/products',
            permanent: false
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const products = await fetchProducts();
    const paths = products.map(product => {
        return {
            params: {
                id: product.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

interface ProductsProps {
    children?: ReactNode
    product?: ProductType
}

const Product: NextPage<ProductsProps> = (props) => {
    return (
      <div>
        <Head>
          <title>{props.product!.name}</title>
          <meta name="description" content={props.product!.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header />
  
        <Container className="mt-5">
          <ProductDetails product={props.product!} />
        </Container>
      </div>
    )
  }
  
  export default Product