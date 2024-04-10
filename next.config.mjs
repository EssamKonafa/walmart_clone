/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'links.papareact.com',
          },
          {
            protocol: 'https',
            hostname: 'i.imgur.com',
          },
          {
            protocol: 'https',
            hostname: 'seeklogo.com',
          },
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
          },
          {
            protocol: 'https',
            hostname: 'i5.walmartimages.com',
          },
          {
            protocol: 'https',
            hostname: 'beautydealsbff.com',
          },
          {
            protocol: 'https',
            hostname: 't3.ftcdn.net',
          },
          {
            protocol: 'https',
            hostname: 'hips.hearstapps.com',
          },
          {
            protocol: 'https',
            hostname: 'https://encrypted-tbn0.gstatic.com/images',
          },
        ],
      },
};

export default nextConfig;
