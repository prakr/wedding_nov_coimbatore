# Wedding Invite Web Application

A beautiful, responsive wedding invitation website with RSVP functionality, event details, and gift registry links.

## Features

- **Hero Section**: Elegant couple names display with countdown timer to wedding day
- **Event Details**: Ceremony and reception information with embedded map
- **RSVP Form**: Guest response form with validation and email submission
- **Gift Registry**: Links to gift registries (Amazon, Target, Crate & Barrel)
- **Responsive Design**: Mobile-first approach that works on all devices
- **Smooth Animations**: Fade-in effects and smooth scrolling navigation

## Quick Start

### Option 1: Open Locally
1. Simply open `index.html` in your web browser
2. No server or build process required!

### Option 2: Use a Local Server (Recommended)
Using a local server provides a better development experience:

```bash
# If you have Python installed:
python -m http.server 8000

# Or with Node.js:
npx serve

# Or with PHP:
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Customization Guide

### 1. Update Couple Information
Edit `index.html` to customize:

- **Names**: Change "Sarah" and "James" in the hero section (line ~28-30)
- **Wedding Date**: Update "June 15, 2026" throughout the file
- **Event Details**: Modify ceremony and reception information (lines ~60-85)
- **Locations**: Update venue names and addresses

### 2. Configure Form Submission

The RSVP form uses [Formspree](https://formspree.io) for handling submissions:

1. Sign up for free at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. In `index.html`, replace `YOUR_FORM_ID` with your actual form ID:
   ```html
   <form id="rsvpForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Test the form - you'll receive responses via email

**Alternative**: If you don't configure Formspree, the form will still work in demo mode (console logging only).

### 3. Customize Colors and Styling

Edit CSS variables in `styles.css` (lines 4-19):

```css
:root {
    --primary-color: #d4a574;      /* Main brand color */
    --secondary-color: #8b7355;    /* Accent color */
    --accent-color: #f4e8d8;       /* Background tint */
    /* ... more variables ... */
}
```

### 4. Update Map Location

In `index.html`, find the Google Maps embed (line ~88) and update the location:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your venue
3. Click "Share" → "Embed a map"
4. Copy the iframe code and replace the existing one

### 5. Customize Registry Links

Update registry URLs in `index.html` (lines ~170-190):

```html
<a href="YOUR_AMAZON_REGISTRY_URL" target="_blank" class="registry-card">
```

### 6. Add Background Image (Optional)

To add a background image to the hero section:

1. Add your image to `/assets/images/`
2. Update `styles.css` hero section:
   ```css
   .hero {
       background: url('../assets/images/your-photo.jpg') center/cover,
                   linear-gradient(135deg, var(--accent-color) 0%, #e8d5c4 100%);
       background-blend-mode: overlay;
   }
   ```

### 7. Update Wedding Countdown

The countdown automatically updates based on the date set in `script.js` (line 5):

```javascript
const weddingDate = new Date('2026-06-15T15:00:00').getTime();
```

Change this to your wedding date and time.

## Deployment

### Deploy to GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/wedding-invite.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select "main" branch as source
5. Your site will be live at `https://yourusername.github.io/wedding-invite`

### Deploy to Netlify (Free)

1. Sign up at [netlify.com](https://www.netlify.com)
2. Drag and drop your project folder to Netlify
3. Your site is live instantly with a custom URL
4. Optional: Connect a custom domain

### Deploy to Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in your project directory
4. Follow the prompts - your site will be deployed

## File Structure

```
wedding_project/
├── index.html          # Main HTML structure
├── styles.css          # All styling (responsive, animations)
├── script.js           # Interactive functionality
├── README.md           # Documentation
└── assets/
    └── images/         # Place your photos here
```

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Testing Checklist

Before going live, test:

- [ ] All navigation links work correctly
- [ ] Countdown timer displays and updates
- [ ] Form validation works (try submitting empty fields)
- [ ] Form submission completes (check Formspree)
- [ ] Map displays correctly
- [ ] Registry links open in new tabs
- [ ] Mobile responsive design (test on actual device)
- [ ] Cross-browser compatibility

## Troubleshooting

**Form not submitting:**
- Check that you've replaced `YOUR_FORM_ID` in index.html
- Verify Formspree account is set up
- Check browser console for errors (F12)

**Countdown not working:**
- Ensure wedding date format is correct in script.js
- Check browser console for JavaScript errors

**Styling looks broken:**
- Make sure all three files (HTML, CSS, JS) are in the same directory
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

## Support & Contact

For issues or questions:
- Check browser console (F12) for error messages
- Verify all file paths are correct
- Ensure files are properly saved with correct extensions

## License

Free to use and customize for your wedding! Feel free to modify as needed.

## Credits

Built with vanilla HTML, CSS, and JavaScript. No frameworks required!

---

**Congratulations on your upcoming wedding! 💍**
