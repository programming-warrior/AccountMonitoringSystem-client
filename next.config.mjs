/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_BACKEND_URL:'http://localhost:8000',
        NEXT_PUBLIC_BACKEND_WS:'ws://localhost:8000'
    }
};

export default nextConfig;
