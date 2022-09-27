/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules')([
  '@react95/core',
  '@react95/icons',
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = withTM(withFonts(nextConfig));
