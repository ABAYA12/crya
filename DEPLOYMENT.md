# 🚀 CRYA Website Deployment Guide

This guide covers different deployment options for the CRYA website, from simple hosting to full production setups with CMS and payment integration.

## 🏗 Architecture Overview

### Frontend (Current Implementation)
- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom design system
- **Language**: TypeScript for type safety
- **Animations**: Framer Motion for smooth interactions

### Backend Integration (Ready to Implement)
- **CMS**: Strapi (Headless CMS)
- **Database**: MongoDB or PostgreSQL
- **Payments**: Paystack (African focus) + Stripe (International)
- **Media**: Cloudinary for image/video optimization
- **Email**: Resend or SendGrid for notifications

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Fastest)

**Perfect for**: Quick deployment, automatic scaling, global CDN

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel

# 4. Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Choose your account
# - Link to existing project? No
# - Project name? crya-website
# - Directory? ./
# - Override settings? No
```

**Environment Variables** (Add in Vercel Dashboard):
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=Concerned Rising Youths Africa
```

### Option 2: Netlify

**Perfect for**: Simple hosting, form handling, branch deploys

```bash
# 1. Build the project
npm run build

# 2. Install Netlify CLI
npm install -g netlify-cli

# 3. Login and deploy
netlify login
netlify deploy --prod --dir=.next
```

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: Railway (Full-Stack Ready)

**Perfect for**: When you add Strapi CMS and database

```bash
# 1. Install Railway CLI
npm install -g @railway/cli

# 2. Login and deploy
railway login
railway link
railway up
```

### Option 4: DigitalOcean App Platform

**Perfect for**: Scalable hosting with database options

1. Connect your GitHub repository
2. Choose Node.js environment
3. Set build command: `npm run build`
4. Set run command: `npm start`
5. Add environment variables

### Option 5: Traditional VPS (Ubuntu)

**Perfect for**: Full control, custom configurations

```bash
# 1. Setup server (Ubuntu 20.04+)
sudo apt update && sudo apt upgrade -y

# 2. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Install PM2 for process management
sudo npm install -g pm2

# 4. Clone and setup project
git clone https://github.com/ABAYA12/crya.git
cd crya
npm install --production
npm run build

# 5. Start with PM2
pm2 start npm --name "crya" -- start
pm2 startup
pm2 save

# 6. Setup Nginx reverse proxy
sudo apt install nginx
```

**Nginx Configuration**:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔧 Backend Integration Setup

### Phase 1: Strapi CMS Setup

```bash
# 1. Create Strapi project
npx create-strapi-app crya-cms --quickstart

# 2. Configure content types:
# - Articles (News/Blog)
# - Events
# - Programs
# - Team Members
# - Testimonials
# - Gallery Items

# 3. Deploy Strapi (Railway example)
railway login
railway link
railway add postgresql
railway up
```

### Phase 2: Database Setup

**PostgreSQL (Recommended)**:
```javascript
// config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
```

### Phase 3: Payment Integration

**Paystack Setup**:
```javascript
// lib/paystack.js
import { Paystack } from 'paystack-sdk';

const paystack = new Paystack(process.env.PAYSTACK_SECRET_KEY);

export async function initializePayment(amount, email, metadata) {
  try {
    const response = await paystack.transaction.initialize({
      amount: amount * 100, // Convert to kobo
      email,
      metadata,
      callback_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donate/success`,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
```

**Stripe Setup**:
```javascript
// lib/stripe.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createPaymentIntent(amount, currency = 'usd') {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency,
      metadata: {
        organization: 'CRYA',
      },
    });
    return paymentIntent;
  } catch (error) {
    throw error;
  }
}
```

### Phase 4: Cloudinary Setup

```javascript
// lib/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(file, folder = 'crya') {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder,
      resource_type: 'auto',
      transformation: [
        { quality: 'auto' },
        { fetch_format: 'auto' }
      ]
    });
    return result;
  } catch (error) {
    throw error;
  }
}
```

## 🔐 Environment Variables

### Production Environment Setup

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://crya.org
NEXT_PUBLIC_SITE_NAME="Concerned Rising Youths Africa"

# CMS (Strapi)
STRAPI_API_URL=https://cms.crya.org
STRAPI_API_TOKEN=your-production-api-token

# Database
DATABASE_URL=postgresql://user:password@host:port/database

# Payments
PAYSTACK_PUBLIC_KEY=pk_live_...
PAYSTACK_SECRET_KEY=sk_live_...
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...

# Media
CLOUDINARY_CLOUD_NAME=crya-media
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Email
RESEND_API_KEY=re_...
CONTACT_EMAIL=info@crya.org

# Analytics
NEXT_PUBLIC_GA_ID=G-...
NEXT_PUBLIC_HOTJAR_ID=...

# Security
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://crya.org
```

## 🛡 Security Considerations

### 1. SSL Certificate
```bash
# Using Certbot (Let's Encrypt)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d crya.org -d www.crya.org
```

### 2. Security Headers
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

### 3. Rate Limiting
```javascript
// middleware.js
import { NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
})

export async function middleware(request) {
  const ip = request.ip ?? '127.0.0.1'
  const { success } = await ratelimit.limit(ip)

  if (!success) {
    return new NextResponse('Too Many Requests', { status: 429 })
  }

  return NextResponse.next()
}
```

## 📊 Monitoring & Analytics

### 1. Performance Monitoring
```javascript
// lib/analytics.js
export function trackEvent(action, category, label, value) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export function trackPageView(url) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    })
  }
}
```

### 2. Error Tracking (Sentry)
```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
})
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build application
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## 📈 Performance Optimization

### 1. Image Optimization
- Use Next.js Image component with proper sizes
- Implement Cloudinary transformations
- Enable WebP format for modern browsers

### 2. Code Splitting
- Implement dynamic imports for heavy components
- Use React.lazy for route-based splitting

### 3. Caching Strategy
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:all*(svg|jpg|png|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## 📞 Support & Maintenance

### Regular Tasks:
1. **Weekly**: Monitor performance metrics
2. **Monthly**: Update dependencies
3. **Quarterly**: Security audit
4. **Annually**: Full performance review

### Monitoring Checklist:
- [ ] Site uptime (99.9% target)
- [ ] Page load speed (<3 seconds)
- [ ] Core Web Vitals scores
- [ ] Error rates (<0.1%)
- [ ] Security vulnerabilities

---

**🚀 Ready to Deploy?**

Choose your deployment method based on your needs:
- **Quick Start**: Use Vercel for immediate deployment
- **Full Stack**: Use Railway when adding CMS
- **Enterprise**: Use VPS for maximum control

Need help? Contact the development team or refer to the comprehensive documentation in each platform's respective guides.