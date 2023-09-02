/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    //o Next exige que eu especifique o domminio pelo qual estou fazendo a requisição das minhas imagens
    //para fins de otimização
    images: {
        domains: [
            'store.storeimages.cdn-apple.com'
        ]
    }
}

module.exports = nextConfig
