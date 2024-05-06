/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_BACKEND_URL:'https://accountmonitoringsystem-backend.onrender.com',
        NEXT_PUBLIC_BACKEND_WS:'wss://accountmonitoringsystem-backend.onrender.com'
    }
};

export default nextConfig;
