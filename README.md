# Emmanuelah Bello - Portfolio

A modern, professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful lilac/dark theme with smooth light/dark mode toggle.

## ✨ Features

- 🎨 Beautiful lilac and dark color scheme
- 🌓 Smooth light/dark mode toggle
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Framer Motion animations
- 🎯 SEO optimized
- 🚀 Fast and performant
- ♿ Accessible

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Theme:** next-themes

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Emmanuelahdamilola/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

1. **Contact Information:**
   - Edit `components/hero.tsx` - Update email link
   - Edit `components/contact.tsx` - Update email address

2. **Projects:**
   - Edit `components/projects.tsx` - Add/modify your projects

3. **Skills:**
   - Edit `components/skills.tsx` - Update your skill levels and categories

4. **About Section:**
   - Edit `components/about.tsx` - Update your bio and highlights

### Theme Colors

The theme uses a lilac color palette. To customize:
- Edit `tailwind.config.ts` - Modify the `lilac` color values

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── navigation.tsx      # Navigation bar
│   ├── hero.tsx           # Hero section
│   ├── about.tsx          # About section
│   ├── skills.tsx         # Skills section
│   ├── projects.tsx       # Projects section
│   ├── contact.tsx        # Contact section
│   ├── footer.tsx         # Footer
│   ├── theme-toggle.tsx   # Theme toggle button
│   └── theme-provider.tsx # Theme context provider
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies

```

## 🎨 Color Palette

- **Lilac 50:** #faf5ff
- **Lilac 100:** #f3e8ff
- **Lilac 200:** #e9d5ff
- **Lilac 300:** #d8b4fe
- **Lilac 400:** #c084fc
- **Lilac 500:** #a855f7
- **Lilac 600:** #9333ea
- **Lilac 700:** #7e22ce
- **Lilac 800:** #6b21a8
- **Lilac 900:** #581c87

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Emmanuelah Bello**
- GitHub: [@Emmanuelahdamilola](https://github.com/Emmanuelahdamilola)
- LinkedIn: [emmanuelahbello](https://www.linkedin.com/in/emmanuelahbello)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting
- Tailwind CSS for the utility-first CSS framework