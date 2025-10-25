# 💕 Romantic Website for Roha 💕

A **visually stunning, emotionally cinematic** romantic website built with HTML, CSS, and JavaScript. This website features floating animations, photo galleries, poetic messages, and romantic interactions with glassmorphism effects and GSAP animations.

## ✨ Features

### 🎵 Hero Section
- Personalized greeting: "Hey Roha, this one's just for you…"
- Background music autoplay from `assets/music/romantic-lofi.mp3` with mute/unmute toggle
- Floating heart and butterfly animations using GSAP
- Soft gradient background (pink to lavender)
- Cinematic typography with glowing effects

### 📸 Photo Gallery
- **Her Smile**: Solo photos from `assets/her/` directory
- **Us Together**: Couple photos from `assets/we/` directory
- Hover effects: zoom, fade-in, heart overlay
- Click-to-enlarge with modal view
- Responsive layout with animated transitions
- Glassmorphism card effects

### 💝 Poetic Message Section
- Urdu and French poetic lines in elegant typography
- Example: "تمہاری مسکراہٹ کو میں نے کوڈ میں لکھا…"
- "Tu es mon bug préféré — imprévisible, irrésistible…"
- Glassmorphism effect on poetry containers
- Beautiful gradient text effects

### ⏰ Countdown Timer
- Days since you met (configurable start date)
- Flip-style animation for digits using GSAP
- 3D card effects with hover animations

### 🎉 Hidden Easter Egg
- Clicking the heart icon 3 times reveals surprise message
- Confetti animation with romantic emojis
- Enhanced modal with floating hearts

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Your photos in the `assets/` directory
- Background music file: `assets/music/romantic-lofi.mp3`

### Setup Instructions

1. **Organize Your Files**
   ```
   assets/
   ├── music/
   │   └── romantic-lofi.mp3    # Your background music
   ├── her/                     # Her solo photos
   └── we/                      # Your couple photos
   ```

2. **Customize the Content**
   - Update the countdown start date in `script.js` (line with `const startDate = new Date('2024-01-01')`)
   - Add your background music file to `assets/music/romantic-lofi.mp3`
   - Modify the poetic messages in the HTML
   - Change the greeting name from "Roha" to your girlfriend's name

3. **Deploy to GitHub Pages**
   - Create a new GitHub repository
   - Upload all files to the repository
   - Go to Settings > Pages
   - Select "Deploy from a branch" and choose "main"
   - Your site will be available at `https://yourusername.github.io/repository-name`

## 🎨 Customization

### Colors
The website uses a romantic pink and purple color scheme. You can customize colors in `styles.css`:
- Primary pink: `#ec4899`
- Secondary purple: `#9333ea`
- Background gradients: `from-pink-50 via-purple-50 to-indigo-50`

### Fonts
- **Dancing Script**: For romantic headings
- **Poppins**: For body text
- **Noto Nastaliq Urdu**: For Urdu poetry

### Animations
All animations are CSS-based for smooth performance:
- Floating hearts animation
- Gallery hover effects
- Countdown flip animations
- Scroll-triggered fade-ins

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔧 Technical Details

### Dependencies
- **TailwindCSS**: For utility-first styling
- **GSAP**: For advanced animations (loaded via CDN)
- **Google Fonts**: For typography

### Browser Support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

### Performance
- Lazy loading for images
- Optimized animations
- Minimal external dependencies
- Static site friendly

## 💡 Tips for Enhancement

1. **Add More Photos**: The gallery automatically loads all images from the specified directories
2. **Custom Music**: Replace the audio source with your own romantic music
3. **Personal Messages**: Update the poetic messages with your own words
4. **Special Dates**: Update the countdown timer with your actual meeting date
5. **Mobile Optimization**: Test on different devices for the best experience

## 🎯 GitHub Pages Deployment

This website is designed to work perfectly with GitHub Pages:
- No server-side code required
- All assets are static
- CDN-based dependencies for reliability
- Optimized for fast loading

## 💖 Romantic Touches

- Custom cursor with heart icon
- Console messages for developers
- Smooth scroll behavior
- Romantic color palette
- Floating animations
- Interactive elements

## 📞 Support

If you need help customizing the website:
1. Check the browser console for any errors
2. Ensure all image paths are correct
3. Test the website locally before deploying
4. Verify all external CDN links are accessible

---

**Made with 💕 for someone special**

*"You are my favorite bug — unpredictable, irresistible, and I never want to debug you"*
