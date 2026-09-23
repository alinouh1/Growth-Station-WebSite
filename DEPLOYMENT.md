# Deployment Guide - Growth Station

## Prerequisites
- Node.js hosting plan on Hostinger (Business or Cloud)
- SSH access to the server
- Git installed (optional)

## Local Build

1. Build the project:
```bash
cd /Users/alimaysaranouhgmail.com/Desktop/growth\ web/Growth-station
npm run build
```

2. This creates:
- `build/client/` - Static assets
- `build/server/` - Server files

## Files to Upload to Hostinger

Upload these files/folders to your Hostinger server:
```
build/
package.production.json (rename to package.json on server)
```

## Server Setup on Hostinger

1. **Upload files via FTP or SSH:**
   - Upload entire `build/` folder
   - Upload `package.production.json` as `package.json`

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
pm2 start build/server/index.js --name growth-station
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
- Ensure Node.js version is >= 18.0.0
- Run `npm install` locally first
- Check for missing dependencies

**If images don't load:**
- Ensure `public/` folder is uploaded
- Check image paths in code
