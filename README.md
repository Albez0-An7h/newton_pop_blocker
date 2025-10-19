# Newton School Popup Blocker

A Chrome extension that automatically handles annoying popups on Newton School's website by auto-clicking the "Keep Paste" button, allowing seamless copy-paste functionality.

## Features

- 🚫 Blocks three types of Newton School popups
- 📋 Enables `Cmd+C` / `Cmd+V` paste functionality
- ✨ Auto-clicks "Keep Paste" button instantly
- 🎯 Preserves code formatting when pasting
- 🔄 Works on all Newton School subdomains

## Installation

### Step 1: Download the Extension
1. Download or clone this repository to your computer
2. Make sure all files are in the same folder:
   - `manifest.json`
   - `content.js`
   - `icon.png`
   - `README.md`

### Step 2: Enable Developer Mode in Chrome
1. Open Google Chrome
2. Navigate to `chrome://extensions/` (or click the three dots menu → Extensions → Manage Extensions)
3. In the top-right corner, toggle **"Developer mode"** to ON

### Step 3: Load the Extension
1. Click the **"Load unpacked"** button (top-left)
2. Navigate to and select the folder containing the extension files in the download section:
   ```
   /Users/<username>/Downloads/Extensions/newton_pop_blocker
   ```
3. Click **"Select"** or **"Open"**

### Step 4: Verify Installation
1. You should see "Newton School Popup Blocker" appear in your extensions list
2. The extension icon should be visible
3. Make sure the extension is **enabled** (toggle switch is blue/on)

### Step 5: Test the Extension
1. Visit [Newton School](https://my.newtonschool.co)
2. Try copying and pasting code with `Cmd+V` (Mac) or `Ctrl+V` (Windows/Linux)
3. The popup should appear briefly and automatically dismiss itself
4. Your code should paste with proper formatting! ✅

## Troubleshooting

### Extension not working?
1. **Refresh the extension**: Go to `chrome://extensions/` and click the refresh icon ↻ on the extension
2. **Hard refresh the webpage**: Press `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux)
3. **Check the console**: Press `F12` and look for messages starting with "Newton Popup Blocker"

### Popup still appearing?
- The popup may briefly flash - this is normal. The extension auto-clicks the "Keep Paste" button so fast you might see it for a split second

### Code formatting issues?
- The extension now allows the website to handle paste formatting, so your code should paste correctly
- If you still have issues, try using right-click → Paste instead

### Icon not showing?
- Make sure `icon.png` exists in the extension folder
- Refresh the extension in `chrome://extensions/`

## How It Works

The extension:
1. Monitors the Newton School website for popup elements with specific classes:
   - `sc-bcdf66b-0 keUCwH`
   - `sc-bcdf66b-1 cCcvSA`
   - `sc-bcdf66b-2 gqLsyk`
2. Detects copy/paste events (keyboard shortcuts and right-click)
3. Automatically finds and clicks the "Keep Paste" button when popups appear
4. Uses MutationObserver to watch for dynamically added popups
5. Runs periodic checks to ensure popups are handled

## Supported Websites

- `https://my.newtonschool.co/*`
- `https://*.newtonschool.co/*` (all subdomains)

## Technical Details

- **Manifest Version**: 3
- **Permissions**: None required
- **Content Script**: Runs at `document_start` for early interception
- **Technology**: Vanilla JavaScript with MutationObserver API

## Updates

To update the extension after making changes:
1. Edit the files (`content.js` or `manifest.json`)
2. Go to `chrome://extensions/`
3. Click the refresh icon ↻ on "Newton School Popup Blocker"
4. Refresh any open Newton School tabs

## Uninstallation

1. Go to `chrome://extensions/`
2. Find "Newton School Popup Blocker"
3. Click **"Remove"**
4. Confirm the removal

## Version History

### v1.0 (Current)
- Initial release
- Auto-clicks "Keep Paste" button
- Supports Cmd+V / Ctrl+V
- Preserves code formatting
- Handles multiple popup variants

## License

Free to use and modify for personal use.

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify the extension is enabled
3. Check browser console for error messages
4. Reload both the extension and the webpage

---

Made with ❤️ to improve the Newton School coding experience
