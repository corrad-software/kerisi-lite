# Wireframe - Kerisi Lite

This folder contains HTML wireframes for the Kerisi Lite application. These are standalone HTML files that can be opened directly in your browser without any installation or build process.

## 📁 Files

- **login.html** - Login page with Google SSO, styled with Tailwind CSS
- **dashboard.html** - Complete dashboard with navigation, charts, and Wave Apps-inspired design

## 🚀 How to Use

Simply open the HTML files in your web browser:

1. Navigate to the `wireframe` folder
2. Double-click `login.html` (or right-click → Open With → Your Browser)
3. The page will open and work immediately - no installation needed!

Alternatively, you can use a local server for a better development experience:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000/login.html`

## 🎨 Design Features

### Login Page
- **Wave Apps-inspired design** with clean, professional layout
- **Black & white theme** - Elegant monochrome color scheme
- **Split-screen layout** - Branding on left (desktop), form on right
- **Fully responsive** - Mobile-first design using Tailwind CSS
- **Animated background** - Subtle gradient rotation on branding side
- **Google SSO button** - Ready for OAuth integration
- **Form validation** - HTML5 validation built-in
- **Interactive states** - Hover effects, focus states, transitions

### Dashboard Page
- **Sidebar navigation** - Complete menu system like Wave Apps
- **Top navigation bar** - Search, notifications, and quick actions
- **Stats cards** - Revenue, invoices, outstanding, expenses with trend indicators
- **Interactive charts** - Revenue line chart and expense doughnut chart using Chart.js
- **Modern color palette** - Blue, purple, pink, orange, and green gradients
- **Recent invoices** - List with status badges (Paid, Pending, Overdue)
- **Activity feed** - Timeline of recent events
- **Fully responsive** - Collapsible sidebar on mobile with overlay
- **User profile section** - Avatar and account info in sidebar

## 🔧 Technology Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (loaded via CDN)
- **Chart.js** - Modern, responsive charts (loaded via CDN)
- **Font Awesome** - Icon library (loaded via CDN)
- **Vanilla JavaScript** - Form handling, navigation, and chart initialization

## 📱 Responsive Breakpoints

- **Mobile** (< 1024px): Collapsible sidebar, stacked layout, simplified navigation
- **Desktop** (≥ 1024px): Fixed sidebar, multi-column grid layout

## 🔄 Migrating to Vue.js

When you're ready to convert this wireframe to Vue.js, follow these steps:

### Step 1: Set up Vue.js Project

```bash
# Create new Vue project
npm create vue@latest

# Choose the following options:
# - Project name: kerisi-lite
# - TypeScript: No
# - JSX: No
# - Vue Router: Yes (for multi-page navigation)
# - Pinia: Yes (for state management)
# - Vitest: No (optional)
# - ESLint: Yes
# - Prettier: Yes

cd kerisi-lite
npm install
```

### Step 2: Install Tailwind CSS in Vue

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add to `src/assets/main.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 3: Convert HTML to Vue Component

Create `src/views/LoginView.vue`:

```vue
<template>
  <div class="flex min-h-screen">

    <!-- Left Side - Branding -->
    <div class="hidden lg:flex lg:flex-1 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden animated-bg items-center justify-center p-16">
      <div class="relative z-10 text-center text-white">
        <div class="flex justify-center mb-8">
          <div class="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
            K
          </div>
        </div>
        <h1 class="text-5xl font-bold mb-4 tracking-tight">Kerisi Lite</h1>
        <p class="text-lg text-gray-300 font-light">Simple, powerful financial management</p>
      </div>
    </div>

    <!-- Right Side - Login Form -->
    <div class="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:px-16 bg-white">
      <div class="w-full max-w-md">

        <!-- Mobile Logo -->
        <div class="lg:hidden flex justify-center mb-8">
          <div class="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-3xl font-bold">
            K
          </div>
        </div>

        <!-- Header -->
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-black mb-2">Log in to your account</h2>
          <p class="text-gray-600">Welcome back! Please enter your details.</p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">

          <div>
            <label for="email" class="block text-sm font-semibold text-black mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-4 focus:ring-black/10 transition-all duration-200"
            >
          </div>

          <div>
            <label for="password" class="block text-sm font-semibold text-black mb-2">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-4 focus:ring-black/10 transition-all duration-200"
            >
          </div>

          <div class="flex items-center justify-between">
            <label class="flex items-center cursor-pointer">
              <input v-model="remember" type="checkbox" class="w-4 h-4 accent-black cursor-pointer">
              <span class="ml-2 text-sm text-black">Remember me</span>
            </label>
            <a href="#" class="text-sm font-semibold text-black hover:opacity-70 transition-opacity">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 transition-all duration-200 disabled:opacity-50"
          >
            {{ loading ? 'Signing in...' : 'Sign in' }}
          </button>
        </form>

        <!-- Divider -->
        <div class="relative my-8">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white text-gray-500 font-medium">OR</span>
          </div>
        </div>

        <!-- Google Sign In -->
        <button
          @click="handleGoogleLogin"
          type="button"
          class="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-200 rounded-lg font-semibold text-black hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <!-- Sign Up Link -->
        <p class="mt-8 text-center text-sm text-gray-600">
          Don't have an account?
          <a href="#" class="font-semibold text-black hover:opacity-70 transition-opacity">Sign up</a>
        </p>

        <!-- Footer -->
        <footer class="mt-16 text-center text-sm text-gray-500">
          <p>&copy; 2025 Kerisi Lite. All rights reserved.</p>
          <div class="flex justify-center gap-2 mt-2">
            <a href="#" class="text-gray-600 hover:text-black transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" class="text-gray-600 hover:text-black transition-colors">Terms of Service</a>
          </div>
        </footer>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const remember = ref(false)
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true

  try {
    // Call your API here
    console.log('Login:', {
      email: email.value,
      password: password.value,
      remember: remember.value
    })

    // Example API call:
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     email: email.value,
    //     password: password.value
    //   })
    // })
    // const data = await response.json()

    // After successful login:
    // router.push('/dashboard')

  } catch (error) {
    console.error('Login error:', error)
  } finally {
    loading.value = false
  }
}

const handleGoogleLogin = () => {
  console.log('Google login clicked')
  // Implement Google OAuth here
}
</script>

<style scoped>
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animated-bg::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: rotate 30s linear infinite;
}
</style>
```

### Step 4: Update Router

In `src/router/index.js`:

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    // Add more routes here
  ]
})

export default router
```

### Step 5: Add Google OAuth (Optional)

```bash
npm install vue3-google-login
```

Then update your component to use the Google OAuth library.

## 📝 Key Differences: HTML vs Vue.js

| Feature | HTML Wireframe | Vue.js |
|---------|----------------|--------|
| **Data Binding** | Manual DOM manipulation | `v-model` reactive binding |
| **Event Handling** | `addEventListener` | `@click`, `@submit` directives |
| **State Management** | Variables in script | `ref()`, `reactive()` |
| **Styling** | Tailwind via CDN | Tailwind via PostCSS |
| **Routing** | Multiple HTML files | Vue Router (SPA) |
| **Components** | Copy-paste HTML | Reusable `.vue` components |

## 🎯 Benefits of Vue.js Migration

1. **Reactive Data** - Automatic UI updates when data changes
2. **Component Reusability** - Build once, use everywhere
3. **Single Page App** - Faster navigation, better UX
4. **State Management** - Centralized data with Pinia
5. **Developer Tools** - Vue DevTools for debugging
6. **Build Optimization** - Tree-shaking, code splitting
7. **TypeScript Support** - Optional type safety

## 💡 Tips for Migration

- Keep the Tailwind classes exactly the same
- Convert form inputs to use `v-model`
- Move event handlers to Vue methods
- Extract reusable parts (logo, footer) into components
- Use Vue Router for navigation between pages
- Add Pinia store for user authentication state

## 🚀 Next Steps

1. Complete all wireframes in HTML first
2. Review and approve the designs
3. Set up Vue.js project
4. Migrate one page at a time
5. Add backend API integration
6. Implement proper authentication
7. Add error handling and validation
8. Deploy to production

---

**Note**: The wireframes are designed to be pixel-perfect matches for the final Vue.js implementation. All Tailwind classes used here will work identically in Vue.js.
