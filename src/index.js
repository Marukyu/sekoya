const {
  app,
  BrowserWindow
} = require('electron');

global.BASE_PATH = app.getAppPath();

// Keep a global reference of the window object
let win;

function createWindow() {
  // Create the browser window
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'src/images/icon.png',
    show: false
  });

  win.maximize();

  // Load the index.html of the app
  win.loadFile('src/html/editor.html');

  // Open DevTools
  // win.webContents.openDevTools();
  win.on('closed', () => {
    win = null
  });

  win.once('ready-to-show', () => {
    win.show();
  })
}

// Called when Electron has finished initialization
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.