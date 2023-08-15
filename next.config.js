/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images:{
    domains:[
     
     "images.pexels.com", 
     "firebasestorage.googleapis.com", 
     "source.unsplash.com"
     
    ]
 }
}

module.exports = nextConfig
