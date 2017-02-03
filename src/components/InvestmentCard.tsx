
import * as React from 'react'

import { IconButton, CardTitle, Card, CardActions, CardHeader, CardText, FlatButton, FloatingActionButton } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit'
import { Portfolio } from '../models/Portfolio'
import {GridList, GridTile} from 'material-ui/GridList'
import { ProviderFactory } from '../models/providers/ProviderFactory'
import CircularProgress from 'material-ui/CircularProgress'
import { Link } from 'react-router'
import ContentOpen from 'material-ui/svg-icons/action/open-in-new'
import electron = require('electron')

export class InvestmentCard extends React.Component<any, any> {

    constructor(){
        super()
        this.state = { currency : '', currentPrice : 0, loading : true }
    }

    componentDidMount(){
        var provider = new ProviderFactory().getProvider(this.props.providerName, this.props.title)
        provider.getCurrentPrice().then(r => {
            console.log(r)
            this.setState({currentPrice : r.price, loading : false, currency : r.currency})
        })
    }

    openURL = (e) => {
        //console.log(this.props.targetUrl)
        electron.shell.openExternal(this.props.targetUrl)
     }

    render(){
        if(this.state.loading){
            return  <div style={{ height : 180, paddingTop: 20, width: "100%", maxWidth: 420, float: "left", paddingLeft: 20, boxSizing: "border-box" }}>
                        <Card style={{ width : '100%', height : '100%' }}>
                            <div style={{ position : 'relative' }}>
                                <CircularProgress size={ 60 } style={{ marginLeft : '50%', left : -30, top : 50 }} />
                            </div>
                        </Card>
                    </div>
        }
        var r = 100.0 * this.state.currentPrice / this.props.initialPrice - 100.0
        var change = ((r < 0.0) ? '-' : '+') + Math.abs(r).toFixed(2) + '%'
        var color = (r < 0.0) ? '#d00' : '#0d0'
        var value = this.props.amount * this.state.currentPrice

        return <div style={{ height : 180, paddingTop: 20, width: "100%", maxWidth: 420, float: "left", paddingLeft: 20, boxSizing: "border-box" }}>
                    <Card style={{  width : '100%', height : '100%'}}>
                        <CardHeader
                            avatar={ this.props.avatar }
                            title={ this.props.title }
                            subtitle={ "Provider: " + this.props.providerName}
                        >
                        <IconButton  onClick={this.openURL}
                                     style={{ position : 'absolute', right : 4, top : 4}} hoverColor={'None'} ><ContentOpen  /></IconButton>
                        </CardHeader>
                        <CardTitle
                            subtitle={<div style={{ marginTop : 10 }}>
                                            Performance:&nbsp;&nbsp;
                                            <span style={{ color : color}}>
                                                {change}
                                            </span>
                                      </div>}
                            title={ <div style={{ marginTop : -35 }}>
                                   		<div style={{ fontSize : '80%' }}>
                                            Present value:
                                        </div>
                                        <div style={{ marginTop : -10 }}>
                                            {value.toFixed(2)} {this.state.currency}
                                        </div>
                                    </div>}
                        />
                    </Card>
                </div>
    }
}
