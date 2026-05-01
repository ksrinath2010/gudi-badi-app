# Gudi Badi — Sri Pranava Peetham
## Windows 11 Desktop Application

This is the official desktop application for **Gudi Badi — Sri Pranava Peetham**, built with Electron.

---

## How to Build the Windows Installer (.exe)

You have two options:

---

### Option 1 — Build using GitHub Actions (Easiest, No Windows PC needed)

1. **Upload this folder to GitHub:**
   - Go to [github.com](https://github.com) and create a free account if needed
   - Create a **New Repository** (name it `gudi-badi` or anything you like)
   - Upload all files from this `electron-app/` folder to the repository

2. **GitHub will automatically build the .exe:**
   - Go to your repository → click **Actions** tab
   - You will see a workflow called **"Build Windows Installer"** running
   - Wait ~5 minutes for it to finish

3. **Download your .exe:**
   - After the build finishes, click on the completed run
   - Scroll down to **Artifacts** section
   - Click **GudiBadi-Windows-Installer** to download your `.exe` file

4. **Install on Windows 11:**
   - Open the downloaded `.exe` file
   - Click "More info" → "Run anyway" if Windows SmartScreen appears
   - Follow the setup wizard
   - The app will appear in your Start Menu and Desktop

---

### Option 2 — Build on a Windows PC directly

If you have a Windows computer with Node.js installed:

1. Copy this entire `electron-app/` folder to your Windows PC
2. Open **Command Prompt** or **PowerShell** in this folder
3. Run:
   ```
   npm install
   npm run build:win
   ```
4. Find your installer in the `dist/` folder: `Gudi Badi Setup 1.0.0.exe`
5. Run the installer and follow the setup wizard

---

## System Requirements

- **Windows 10 or Windows 11** (64-bit)
- No internet connection needed after installation
- The app includes all content — runs completely offline

---

## What's Inside

- Full Gudi Badi website converted to a native desktop app
- Works offline — no internet required
- Desktop shortcut and Start Menu entry created automatically
- Proper Windows uninstaller included
- Zoom in/out support (Ctrl +/-)
- Full screen mode (F11)
- Native Windows menus

---

## File Structure

```
electron-app/
├── main.js           ← Electron app entry point
├── index.html        ← The full Gudi Badi website
├── icon.ico          ← Windows icon
├── icon.png          ← App icon (PNG)
├── package.json      ← Build configuration
├── README.md         ← This file
└── .github/
    └── workflows/
        └── build.yml ← GitHub Actions build script
```

---

## App Information

- **App Name:** Gudi Badi
- **Version:** 1.0.0
- **Publisher:** Sri Pranava Peetham
- **Copyright:** © 2026 Sri Pranava Peetham · Eluru, Andhra Pradesh
