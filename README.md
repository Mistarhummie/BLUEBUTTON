# Bluebutton Design Solutions website

Website for Bluebutton Design Solutions, a graphic design and printing studio in Nairobi. Plain HTML, CSS and JavaScript with no build step, so it can be hosted free on GitHub Pages.

## Pages

- `index.html`: Home
- `services.html`: Services & Prices
- `portfolio.html`: Portfolio and social links
- `contact.html`: Quote form, hours and map

Shared styles are in `styles.css`, behaviour (mobile menu, open/closed badge, WhatsApp order buttons, quote form, portfolio filters) in `script.js`, and the logo, icons and service illustrations in `assets/`.

## Common edits

**Add prices.** In `services.html`, change `Ask for price` next to a service to something like `From KES 1,500`.

**Add portfolio photos.** Put photos in `assets/work/`, then in `portfolio.html` (and the three tiles on `index.html`) replace a tile's `<div class="ph">…</div>` with:

```html
<img src="assets/work/business-cards.jpg" alt="Business cards for a client" loading="lazy">
```

Keep photos under about 300 KB each so pages load fast on mobile data.

**Swap the home page illustrations for real photos.** The "What we do" cards on the home page use drawings from `assets/showcase/`. To use a photo instead, save it in that folder (for example `business-cards.jpg`) and change the matching `src="assets/showcase/business-cards.svg"` in `index.html` to the new file name. Portrait photos (4:5) suit the small cards and landscape photos (5:4) suit the four large ones.

**Change the WhatsApp number.** Update `WHATSAPP` at the top of `script.js` and the `wa.me` links in the HTML.

**Change opening hours.** Update the text in each page's top bar and footer, the table in `contact.html`, and `HOURS` in `script.js` (used for the "Open now" badge).

## Preview locally

Run `python3 -m http.server` in this folder and open http://localhost:8000.

## Publish with GitHub Pages

On GitHub, open Settings → Pages, set Source to "Deploy from a branch", pick the branch and `/ (root)`, then Save. The site goes live at https://mistarhummie.github.io/BLUEBUTTON/. A custom domain such as bluebutton.co.ke can be added later on the same settings page.
