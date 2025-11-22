# Deployment Guide

This NFT Marketplace can be deployed using several methods:

## Option 1: Vercel (Easiest)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

Or push to GitHub and connect at https://vercel.com

## Option 2: Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod`

Or push to GitHub and connect at https://netlify.com

## Option 3: Docker

1. Start Docker Desktop
2. Build the image:
   ```
   docker build -t nft-marketplace .
   ```
3. Run the container:
   ```
   docker run -p 8080:80 nft-marketplace
   ```
4. Access at http://localhost:8080

## Option 4: GitHub Pages

1. Update `vite.config.ts` to set base path
2. Build: `npm run build`
3. Deploy dist folder to gh-pages branch

## Option 5: Any Static Host

1. Build the project:
   ```
   npm install
   npm run build
   ```
2. Upload the `dist` folder to any static hosting service (AWS S3, Cloudflare Pages, etc.)

## Important Notes

- Make sure your Move smart contracts are deployed to Sui network first
- Update `src/constants.ts` with your deployed package IDs
- Configure network settings in `src/networkConfig.ts` if needed
