#!/bin/bash

# CRYA Website Development Setup Script
echo "🌍 Setting up CRYA Website Development Environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2)
REQUIRED_VERSION="18.0.0"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then 
    echo "❌ Node.js version $NODE_VERSION is too old. Please upgrade to 18.0.0 or higher."
    exit 1
fi

echo "✅ Node.js version $NODE_VERSION detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Create environment file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "🔧 Creating .env.local from example..."
    cp .env.example .env.local
fi

# Create placeholder images directory structure
echo "🖼️  Setting up image directories..."
mkdir -p public/images/{hero,programs,events,news,testimonials,team,gallery}

echo ""
echo "🚀 Setup complete! You can now:"
echo ""
echo "   • Start development server:  npm run dev"
echo "   • Build for production:      npm run build"
echo "   • Run linting:              npm run lint"
echo ""
echo "📝 Don't forget to:"
echo "   • Add actual images to public/images/"
echo "   • Configure environment variables in .env.local"
echo "   • Set up your CMS and payment integration when ready"
echo ""
echo "🌟 Happy coding! Build something amazing for African youth! 🌍"