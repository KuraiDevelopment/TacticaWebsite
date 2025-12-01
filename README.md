# Tactica Vanilla+ | DayZ Server Website

A modern, atmospheric Next.js website for the Tactica Vanilla+ DayZ community server.

![Preview](preview.png)

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tactical/Post-apocalyptic design** with grain overlay, scan lines, and particle effects
- 📱 **Fully responsive** for all devices
- 🎭 **Smooth animations** and micro-interactions
- 🔗 **One-click IP copy** functionality
- 🌐 **SEO optimized** with Open Graph meta tags

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Customization

### Server IP
Update the server IP in `app/page.jsx`:
```jsx
const copyIP = () => {
  navigator.clipboard.writeText("YOUR_SERVER_IP_HERE");
  // ...
};
```

And update the displayed IP in the JSX:
```jsx
<span className="server-ip-value">YOUR_SERVER_IP_HERE</span>
```

### Discord Link
Update your Discord invite link in the CTA section:
```jsx
<a href="https://discord.gg/YOUR-INVITE" ...>
```

### Colors
Modify the CSS variables in `page.jsx` to match your branding:
```css
:root {
  --accent-orange: #d4622a;
  --accent-olive: #4a5a3c;
  // ... other colors
}
```

### Features
Edit the `features` array at the top of `page.jsx` to update the feature cards.

## Project Structure

```
tactica-dayz/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.jsx       # Root layout with metadata
│   └── page.jsx         # Main page component
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies
└── README.md            # This file
```

## Deployment

This site can be deployed to:
- **Vercel** (recommended) - Just connect your GitHub repo
- **Netlify** - Use the Next.js adapter
- **Any Node.js host** - Run `npm run build && npm start`

## License

MIT License - feel free to use this for your gaming community!

---

Made for **Tactica Vanilla+** DayZ Server 🎮
