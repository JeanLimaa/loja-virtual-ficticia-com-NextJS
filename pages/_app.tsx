import { CartContextProvider } from '@/src/hooks/useCart'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
        <Component {...pageProps} />
    </CartContextProvider>
  )
}

export default MyApp