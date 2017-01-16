/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import * as React    from 'react'
import * as ReactDOM from 'react-dom'

import * as injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import getMuiTheme      from 'material-ui/styles/getMuiTheme'
import darkBaseTheme   from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Portfolio } from '../models/Portfolio'

/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export class App extends React.Component<any, any> {
    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    render() {
        return <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                   {this.props.children}
               </MuiThemeProvider>
    }
}
