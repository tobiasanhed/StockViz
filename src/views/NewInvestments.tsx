/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import * as React from 'react'
import { browserHistory } from 'react-router'

import { CardTitle, Card, CardActions, CardHeader, CardText, FlatButton, FloatingActionButton } from 'material-ui'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit'
import { Portfolio } from '../models/Portfolio'
import {GridList, GridTile} from 'material-ui/GridList'
import { ProviderFactory } from '../models/providers/ProviderFactory'
import CircularProgress from 'material-ui/CircularProgress'
import { Link } from 'react-router'

/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export class NewInvestments extends React.Component<any, any> {
    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    render() {
        return <div style={{ width : '100%' }}>
                   <FloatingActionButton onTouchTap={browserHistory.goBack}
                                         style={{position: 'absolute', left: 20, top: 20}}>
                       <NavigationArrowBack />
                   </FloatingActionButton>
               </div>
    }
}
