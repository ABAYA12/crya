# 🌍 CRYA - Concerned Rising Youths Africa

Official website for Concerned Rising Youths Africa (CRYA), a youth-led initiative empowering African youth through education, governance, and purposeful engagement.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation & Running

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Fonts:** Inter & Poppins (Google Fonts)

## 📁 Project Structure

```
crya/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── programs/          # Programs page
│   ├── events/            # Events page
│   ├── donate/            # Donation page
│   └── contact/           # Contact page
├── components/
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── home/              # Homepage sections
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions
├── public/                # Static assets
└── ...config files
```

## 🎨 Features

✅ Responsive design for all devices
✅ Modern, clean UI with smooth animations
✅ SEO optimized
✅ Fast performance with Next.js
✅ Accessible components
✅ Ready for CMS integration (Strapi)
✅ Payment gateway ready (Paystack & Stripe)
✅ Media optimization ready (Cloudinary)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Concerned Rising Youths Africa

# Add your API keys when ready:
# NEXT_PUBLIC_STRAPI_URL=your_strapi_url
# NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_key
# NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_key
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

## 🎯 Next Steps

1. **Content:** Replace placeholder images and text with real CRYA content
2. **CMS:** Set up Strapi backend for dynamic content management
3. **Payments:** Integrate Paystack/Stripe for donations
4. **Media:** Set up Cloudinary for image/video optimization
5. **Analytics:** Add Google Analytics or similar
6. **Email:** Integrate email service for newsletter and contact form

## 📧 Contact

**Concerned Rising Youths Africa (CRYA)**
- Phone: 054 397 3578
- Email: info@crya.org
- Social: @concerned_africa

## 📄 License

© 2024 Concerned Rising Youths Africa. All rights reserved.