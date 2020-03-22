const electron = require('electron')

const {app, BrowserWindow, Menu} = electron

let mainWindow

const menuTempate = [
    {
        label: "File",
        submenu: [
            {
                label: "Add Item"
            },
            {
                label: "Clear Items"
            },
            {
                label: "Quit"
            }
        ]
    }
]

function createWindow() {
    // a window without the option to resize
    mainWindow = new BrowserWindow({width: 800, height: 600, resizable: false, webPreferences: {nodeIntegration: true}})

    // load index.html into window
    mainWindow.loadFile('index.html')

    // build menu
    const mainMenu = Menu.buildFromTemplate(menuTempate)

    // insert menu to html
    Menu.setApplicationMenu(mainMenu)
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

app.on('activate', () => {
// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
}
})