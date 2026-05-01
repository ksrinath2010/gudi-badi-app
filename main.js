const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 900,
    minHeight: 600,
    title: 'Gudi Badi — Sri Pranava Peetham',
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      allowRunningInsecureContent: false,
    },
    backgroundColor: '#faf6f0',
    show: false,
  });

  mainWindow.loadFile('index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click() { mainWindow.reload(); },
        },
        { type: 'separator' },
        {
          label: 'Exit',
          accelerator: 'Alt+F4',
          role: 'quit',
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Zoom In',
          accelerator: 'CmdOrCtrl+Plus',
          click() {
            const factor = mainWindow.webContents.getZoomFactor();
            mainWindow.webContents.setZoomFactor(Math.min(factor + 0.1, 3.0));
          },
        },
        {
          label: 'Zoom Out',
          accelerator: 'CmdOrCtrl+-',
          click() {
            const factor = mainWindow.webContents.getZoomFactor();
            mainWindow.webContents.setZoomFactor(Math.max(factor - 0.1, 0.5));
          },
        },
        {
          label: 'Reset Zoom',
          accelerator: 'CmdOrCtrl+0',
          click() { mainWindow.webContents.setZoomFactor(1.0); },
        },
        { type: 'separator' },
        {
          label: 'Toggle Full Screen',
          accelerator: 'F11',
          click() { mainWindow.setFullScreen(!mainWindow.isFullScreen()); },
        },
      ],
    },
    {
      label: 'Navigate',
      submenu: [
        {
          label: 'Go Back',
          accelerator: 'Alt+Left',
          click() { if (mainWindow.webContents.canGoBack()) mainWindow.webContents.goBack(); },
        },
        {
          label: 'Go Forward',
          accelerator: 'Alt+Right',
          click() { if (mainWindow.webContents.canGoForward()) mainWindow.webContents.goForward(); },
        },
      ],
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About Gudi Badi',
          click() {
            const { dialog } = require('electron');
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'About Gudi Badi',
              message: 'Gudi Badi — Sri Pranava Peetham',
              detail:
                'A sacred movement initiated by Brahmasri Vaddiparti Padmakar Gurudev\nto preserve Sanatana Dharma by restoring ancient temples.\n\nEstablished 2004 · Eluru, Andhra Pradesh\n"Dharmam Chara, Satyam Vada"',
              buttons: ['OK'],
            });
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
