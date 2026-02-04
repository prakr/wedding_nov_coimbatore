# Wedding Website Customization Checklist

Use this checklist to personalize your wedding website.

## Essential Customizations

### 1. Couple Information (index.html)
- [ ] Update couple names (Line 28-30)
  - Replace "Sarah" with bride/partner name
  - Replace "James" with groom/partner name
- [ ] Update wedding date display (Line 33)
  - Change "June 15, 2026" to your date
- [ ] Update countdown date (script.js, Line 5)
  - Format: `'YYYY-MM-DDTHH:MM:SS'`

### 2. Event Details (index.html)
- [ ] Ceremony information (Lines 60-68)
  - Time
  - Venue name
  - Address
  - Dress code
- [ ] Reception information (Lines 72-80)
  - Time
  - Venue name
  - Address
  - Additional details

### 3. Location Map (index.html, Line 88)
- [ ] Get embed code from [Google Maps](https://maps.google.com)
  1. Search for your venue
  2. Click "Share" → "Embed a map"
  3. Copy iframe code
  4. Replace existing iframe
- [ ] Update "Get Directions" link (Line 98)

### 4. RSVP Form Setup
- [ ] Sign up at [Formspree.io](https://formspree.io) (free)
- [ ] Create a new form
- [ ] Copy your form ID
- [ ] Update form action in index.html (Line 112)
  - Replace `YOUR_FORM_ID` with actual ID
- [ ] Test form submission

### 5. Registry Links (index.html, Lines 170-194)
- [ ] Update Amazon registry URL
- [ ] Update Target registry URL
- [ ] Update Crate & Barrel registry URL
- [ ] Or remove registries you don't use
- [ ] Add additional registries if needed

### 6. Footer (index.html, Lines 201-207)
- [ ] Update footer message if desired
- [ ] Verify couple names
- [ ] Verify wedding date

## Optional Customizations

### 7. Colors & Branding (styles.css, Lines 4-19)
- [ ] Primary color (main brand color)
- [ ] Secondary color (accent)
- [ ] Accent color (backgrounds)
- [ ] Test color combinations for readability

### 8. Typography (styles.css, Lines 12-13)
- [ ] Choose heading font (current: Georgia/serif)
- [ ] Choose body font (current: Arial/sans-serif)
- [ ] Consider Google Fonts for more options

### 9. Background Image (Optional)
- [ ] Add photo to `/assets/images/`
- [ ] Update hero background in styles.css (Line 147)
- [ ] Adjust opacity/overlay for text readability

### 10. Meta Tags & SEO (index.html, Lines 5-9)
- [ ] Update meta description
- [ ] Update Open Graph title
- [ ] Update Open Graph description
- [ ] Add og:image if you have a photo

### 11. Page Title (index.html, Line 10)
- [ ] Change "Our Wedding" to something personal
- [ ] Examples: "Sarah & James • June 2026"

## Testing Checklist

### Desktop Testing
- [ ] Open in Chrome
- [ ] Open in Firefox
- [ ] Open in Safari
- [ ] Test all navigation links
- [ ] Test countdown timer
- [ ] Test form validation
- [ ] Test form submission
- [ ] Verify map loads
- [ ] Test registry links

### Mobile Testing
- [ ] Test on iPhone/iOS
- [ ] Test on Android
- [ ] Test navigation menu
- [ ] Test form on mobile
- [ ] Check text readability
- [ ] Verify responsive layout

### Final Checks
- [ ] All personal information updated
- [ ] No placeholder text remaining
- [ ] Form submissions working
- [ ] All links open correctly
- [ ] Images load properly
- [ ] Spelling and grammar check

## Deployment Checklist

### Before Deploying
- [ ] Complete all customizations above
- [ ] Test thoroughly on multiple devices
- [ ] Verify Formspree is configured
- [ ] Check all external links
- [ ] Optimize images (if added)

### Choose Deployment Method
- [ ] **GitHub Pages** (free, requires git)
- [ ] **Netlify** (free, drag-and-drop)
- [ ] **Vercel** (free, fast deployment)

### After Deploying
- [ ] Test live site on mobile
- [ ] Test live site on desktop
- [ ] Submit test RSVP
- [ ] Share link with a friend to test
- [ ] Monitor Formspree for submissions

## Optional Enhancements

### Additional Features to Consider
- [ ] Add photo gallery section
- [ ] Add "Our Story" timeline
- [ ] Add accommodation recommendations
- [ ] Add FAQ section
- [ ] Add gift fund option (Venmo, PayPal, etc.)
- [ ] Add wedding party section
- [ ] Add livestream link
- [ ] Add schedule of events

## Custom Domain (Optional)

If you want a custom URL (e.g., sarahandjames.com):
- [ ] Purchase domain from registrar (Namecheap, Google Domains)
- [ ] Configure DNS with your hosting provider
- [ ] Enable HTTPS/SSL certificate

## Notes & Ideas

Write your customization notes here:

---

**Need Help?**
- Check README.md for detailed instructions
- View browser console (F12) for errors
- Test incrementally as you customize

**Remember:** Save your work frequently and test after each change!
