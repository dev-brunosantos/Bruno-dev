/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: "https://github.com/",
              port: '',
              pathname: '/dev-brunosantos.png/',
            },
          ],
        formats: ['image/avif', 'image/webp']
    }
};

export default nextConfig;
