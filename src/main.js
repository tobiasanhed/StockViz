const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow() {
    win = new BrowserWindow({
        width: 440,
        height: 800,
        icon: __dirname + '/assets/icon.png',
        webPreferences: {
            webSecurity: false
        }
    })

    if (process.env.HOT) {
        win.loadURL('http://localhost:8080/')
    }
    else {
        win.loadURL(`file://${__dirname}/index.html`)
    }

    win.setMenu(null)
    //win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('activate', () => {
    if (win == null) {
        createWindow()
    }
})

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})
