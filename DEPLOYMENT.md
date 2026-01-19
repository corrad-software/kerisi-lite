# Coolify Deployment Guide for Kerisi Lite

This guide will help you deploy the Kerisi Lite application to Coolify.

## Prerequisites

- Coolify instance installed and running
- Git repository with this code pushed
- Google OAuth Client ID configured for production domain

## Step 1: Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** > **Credentials**
3. Select your OAuth 2.0 Client ID or create a new one
4. Add your production domain to **Authorized JavaScript origins**:
   ```
   https://your-domain.com
   ```
5. Add to **Authorized redirect URIs**:
   ```
   https://your-domain.com
   ```
6. Copy your **Client ID** (you'll need this for environment variables)

## Step 2: Create Application in Coolify

1. Log into your Coolify dashboard
2. Click **+ New Resource** > **Application**
3. Choose **Public Repository** or **Private Repository** (connect your Git provider)
4. Enter your repository URL:
   ```
   https://github.com/your-username/kerisi-lite.git
   ```
5. Select the branch to deploy (e.g., `main`)
6. Click **Continue**

## Step 3: Configure Build Settings

In the application configuration:

### General Settings
- **Application Name**: `kerisi-lite` (or your preferred name)
- **Build Pack**: Select **Dockerfile**
- **Dockerfile Location**: `./Dockerfile` (default)

### Ports & Domains
- **Port**: `80` (internal container port)
- **Domain**: Add your custom domain or use Coolify's generated domain
- **HTTPS**: Enable (recommended)

### Environment Variables

Click **Environment Variables** and add:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `VITE_GOOGLE_CLIENT_ID` | `your_client_id.apps.googleusercontent.com` | Your Google OAuth Client ID |

> **Important**: Environment variables prefixed with `VITE_` are embedded at **build time**, so you'll need to redeploy if you change them.

### Build Arguments

Add the same environment variables as **Build Arguments** (required for multi-stage builds):

| Argument Name | Value |
|--------------|-------|
| `VITE_GOOGLE_CLIENT_ID` | `your_client_id.apps.googleusercontent.com` |

## Step 4: Deploy

1. Click **Save** to save your configuration
2. Click **Deploy** to start the deployment
3. Monitor the build logs for any errors
4. Wait for the deployment to complete (typically 2-5 minutes)

## Step 5: Verify Deployment

1. Access your application URL
2. Verify the login page loads correctly
3. Test Google OAuth login
4. Check browser console for any errors
5. Test responsive design on different devices

## Build Process Explanation

The Docker build uses a **multi-stage approach**:

1. **Stage 1 (Builder)**:
   - Uses Node.js to install dependencies
   - Builds the Vite application with environment variables
   - Outputs static files to `/app/dist`

2. **Stage 2 (Production)**:
   - Uses lightweight nginx Alpine image
   - Copies built static files from Stage 1
   - Serves files with optimized nginx configuration
   - Final image size: ~25MB

## Configuration Files

- **Dockerfile**: Multi-stage build configuration
- **nginx.conf**: Nginx server configuration with SPA routing
- **.dockerignore**: Files excluded from Docker build context
- **.env.production**: Template for production environment variables

## Troubleshooting

### Build Fails with "npm ci" error

**Solution**: Ensure `package-lock.json` is committed to your repository.

```bash
npm install
git add package-lock.json
git commit -m "Add package-lock.json"
git push
```

### Google OAuth not working

**Possible causes**:
1. Production domain not added to Google OAuth allowed origins
2. `VITE_GOOGLE_CLIENT_ID` not set correctly
3. HTTP instead of HTTPS (OAuth requires HTTPS in production)

**Solution**: 
- Verify Google Cloud Console settings
- Check environment variables in Coolify
- Ensure HTTPS is enabled

### Page shows 404 on refresh

**Solution**: This should not happen with the provided `nginx.conf`. If it does:
- Verify `nginx.conf` is copied correctly in Dockerfile
- Check nginx logs in Coolify

### Environment variables not updating

**Remember**: Vite environment variables are **build-time** variables, not runtime.

**Solution**: After changing environment variables, you must **redeploy** the application:
1. Go to Coolify dashboard
2. Click **Redeploy** button
3. Wait for new build to complete

## Health Check

The application includes a health check endpoint:

```bash
curl https://your-domain.com/health
```

Expected response: `healthy`

## Updating the Application

To deploy updates:

1. Push changes to your Git repository
2. In Coolify, the application will auto-deploy (if enabled) or
3. Manually click **Deploy** button

## Additional Resources

- [Coolify Documentation](https://coolify.io/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)

## Best Practices

1. **Always use HTTPS** in production for OAuth security
2. **Enable auto-deployment** for continuous deployment
3. **Monitor build logs** regularly for warnings
4. **Set up proper DNS** for custom domains
5. **Test OAuth flow** thoroughly after each deployment
6. **Keep environment variables secure** - don't commit actual values to Git

## Support

For issues specific to:
- **Coolify**: Check Coolify documentation or community forums
- **Application**: Open an issue in your repository
- **Google OAuth**: Consult Google's OAuth documentation
