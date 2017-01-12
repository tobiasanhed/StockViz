const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow() {
    win = new BrowserWindow({
        width: 640,
        height: 480,

        webPreferences: {
            webSecurity: false
        }
    })

    win.loadURL('http://localhost:8080/')

    //win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
