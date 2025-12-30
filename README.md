# Kerisi Lite - Login Page with Google SSO

A modern login page inspired by Wave Apps, featuring Google SSO authentication with a sleek black and white theme.

## Features

- 🎨 **Wave Apps-inspired design** with black and white theme
- 🔐 **Google SSO authentication** using @react-oauth/google
- 📧 **Email/password login form** (ready for backend integration)
- 📱 **Fully responsive** design for mobile, tablet, and desktop
- ⚡ **Built with Vite** for fast development and optimized builds
- ✨ **Modern UI/UX** with smooth animations and transitions

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Cloud Console account for OAuth credentials

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. Select **Web application**
6. Add authorized JavaScript origins:
   - `http://localhost:5173` (for development)
   - Your production domain (when deploying)
7. Add authorized redirect URIs:
   - `http://localhost:5173` (for development)
   - Your production domain (when deploying)
8. Copy the **Client ID**

### 3. Environment Configuration

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace `your_google_client_id_here` with your actual Google Client ID:
   ```
   VITE_GOOGLE_CLIENT_ID=your_actual_client_id.apps.googleusercontent.com
   ```

### 4. Update App Configuration

Open `src/App.jsx` and update the Google Client ID:

```jsx
import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from './components/Login'

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Login />
    </GoogleOAuthProvider>
  )
}

export default App
```

### 5. Run the Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

## Project Structure

```
kerisi-lite/
├── src/
│   ├── components/
│   │   ├── Login.jsx          # Main login component
│   │   └── Login.css          # Login page styles
│   ├── App.jsx                # Root component with OAuth provider
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
├── .env.example              # Environment variables template
└── README.md                 # This file
```

## Backend Integration

The login form is ready for backend integration. You'll need to:

1. **Email/Password Login**: Update the `handleEmailLogin` function in `src/components/Login.jsx` to call your authentication API
2. **Google SSO**: Process the JWT token from `handleGoogleSuccess` on your backend to verify and create user sessions

Example for email login:
```javascript
const handleEmailLogin = async (e) => {
  e.preventDefault()
  setIsLoading(true)

  try {
    const response = await fetch('YOUR_API_ENDPOINT/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()
    // Handle successful login (store token, redirect, etc.)
  } catch (error) {
    console.error('Login error:', error)
  } finally {
    setIsLoading(false)
  }
}
```

Example for Google SSO:
```javascript
const handleGoogleSuccess = async (credentialResponse) => {
  try {
    const response = await fetch('YOUR_API_ENDPOINT/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: credentialResponse.credential })
    })

    const data = await response.json()
    // Handle successful login
  } catch (error) {
    console.error('Google login error:', error)
  }
}
```

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Customization

### Theme Colors

The current theme uses black and white. To customize:

1. Open `src/components/Login.css`
2. Modify the color variables:
   - Background: `#ffffff` (white)
   - Primary: `#000000` (black)
   - Text: `#000000`, `#666666`, `#999999`
   - Borders: `#e5e5e5`

### Branding

Update the logo and brand name in `src/components/Login.jsx`:
- Change the `.logo-circle` content (currently "K")
- Update the `.brand-title` (currently "Kerisi Lite")
- Modify the `.brand-tagline`

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **@react-oauth/google** - Google OAuth integration
- **CSS3** - Styling with modern features

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
