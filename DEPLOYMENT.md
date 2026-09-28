# Deployment Guide - Growth Station

## Prerequisites
- Node.js hosting plan on Hostinger (Business or Cloud)
- SSH access to the server
- Git installed (optional)

## Build and Deploy to Hostinger

Prepare the current Vite application and deployment package:

```bash
npm run build
./prepare-deploy.sh
```

Upload `dist/`, `server.mjs`, and `package.json` from `deploy-package/` to the
same directory on Hostinger. Do not upload the legacy `build/` directory; it
contains an older application build.

## Server Setup on Hostinger

1. **Upload files via FTP or SSH:**
   - Upload the `dist/` folder
   - Upload `server.mjs` and `package.json`

2. **SSH into your Hostinger server:**
```bash
ssh user@your-hostinger-server
```

3. **Navigate to your project directory:**
```bash
cd public_html/your-project-folder
```

4. **Install dependencies:**
```bash
npm install --production
```

5. **Install PM2:**
```bash
npm install pm2
```

6. **Start the application:**
```bash
pm2 start npm --name growth-station -- start
```

7. **Save PM2 configuration:**
```bash
pm2 save
pm2 startup
```

8. **Monitor the application:**
```bash
pm2 status
pm2 logs growth-station
```

## Alternative: Using Vercel (Recommended)

Vercel is much easier and free:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect React Router and deploy
5. Done!

## Troubleshooting

**If you get 404 errors:**
- Check PM2 status: `pm2 status`
- Check logs: `pm2 logs growth-station`
- Ensure port is correct (default: 3000)

**If build fails:**
- Use Node.js `^20.19.0` or `>=22.12.0` for Vite 8 build tasks.
- The deployed static server runtime remains compatible with Node.js `>=18.0.0` (`package.production.json`).
- Run `npm install` locally first
- Check for missing dependencies

**If changed images still look old:**
- Confirm the uploaded `dist/images/` files have the latest timestamps.
- Restart the Node process and hard-refresh the browser/CDN cache.
- Unhashed static files are served with revalidation headers.
