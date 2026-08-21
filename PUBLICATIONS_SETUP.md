# Publications Automation Setup

Your portfolio now has **automated publication updates** from Google Scholar! 🎉

## How It Works

1. **Automatic Fetching**: Every time you run `npm run build` or `npm run deploy`, the system attempts to fetch your latest publications from Google Scholar
2. **Fallback System**: If the fetch fails (due to Google Scholar HTML changes), it automatically uses your current publications
3. **Dynamic Loading**: Your website loads publications from a JSON file that updates with each build

## Key Files

- **[scripts/fetch-publications.js](../scripts/fetch-publications.js)** - Fetches publications from your Google Scholar profile
- **[public/publications.json](../public/publications.json)** - Stores your publications data
- **[src/sections/Publications.tsx](../src/sections/Publications.tsx)** - Displays publications dynamically

## Commands

```bash
# Fetch publications manually
npm run build:pubs

# Build site and update publications
npm run build

# Deploy (runs build first, which updates publications)
npm run deploy
```

## Setup Details

### Your Google Scholar Profile
- **User ID**: `ps7Jb1MAAAAJ`
- **Profile URL**: https://scholar.google.com/citations?user=ps7Jb1MAAAAJ&hl=en
- ✅ **Public**: Yes (required for this to work)

### How Updates Work

1. When you publish a new paper on Google Scholar, it appears in your profile
2. Next time you run `npm run build` or `npm run deploy`, the system fetches fresh data
3. Your website automatically displays the new publications

## Manual Updates (If Auto-Fetch Fails)

If the auto-fetching stops working (due to Google Scholar HTML changes), you have options:

### Option 1: Manual JSON Update
Edit [public/publications.json](../public/publications.json) directly:
```json
{
  "publications": [
    {
      "authors": "Your Name et al.",
      "title": "Your Paper Title",
      "link": "https://...",
      "journal": "Journal Name (Year)"
    }
  ],
  "lastUpdated": "2025-08-15T00:00:00.000Z"
}
```

### Option 2: Use ORCID API (Recommended for Long-term)
ORCID provides an official, validated API. See [ORCID Integration Guide](./ORCID_SETUP.md)

### Option 3: GitHub Actions Scheduled Fetch
Set up automatic fetching on a schedule even when you're not building locally.

## Troubleshooting

### Publications Not Updating
- Check that your Google Scholar profile is public
- Google Scholar may have changed their HTML - this is normal. The fallback system ensures your site still works
- Manually update `public/publications.json` if needed

### Build Failing
- The publication fetch never fails the build - it falls back to cached data
- Check `npm run build:pubs` output for any errors
- Verify internet connection and Google Scholar accessibility

### Testing Locally

```bash
# Run in development
npm run dev

# Open http://localhost:5173 in your browser
```

## Architecture

```
User publishes on Google Scholar
           ↓
    npm run build
           ↓
    fetch-publications.js
           ↓
    ┌──────────────────┐
    │ Fetch succeeds?  │
    └────────┬─────────┘
        Yes  │  No
            │   └→ Use fallback/cached data ✓
            ↓
    Saved to public/publications.json
            ↓
    Vite builds site
            ↓
    Publications.tsx loads JSON
            ↓
    Website displays latest publications ✓
```

## Limitations & Notes

- **JavaScript Rendering**: Google Scholar uses JavaScript to load content. Simple HTTP scraping has limitations.
- **Rate Limiting**: Google Scholar may rate-limit requests. The system has timeouts to prevent hanging.
- **Fallback First**: If in doubt, the system always falls back to cached data to keep your site working.

## Environment Variables (Optional)

Future enhancement: You could add these to customize behavior:
```
SCHOLAR_ID=ps7Jb1MAAAAJ        # Your Google Scholar ID
FETCH_TIMEOUT=15000             # Timeout in ms
ENABLE_AUTO_FETCH=true          # Enable/disable fetching
```

## What's Next?

1. **Deploy**: Run `npm run deploy` to test the full workflow
2. **Monitor**: Check that publications update after new papers are added
3. **Feedback**: If you notice issues, the system will gracefully fall back

---

✨ **Your publications now update automatically!** Add new papers to Google Scholar and they'll appear on your site with the next build.
