
import * as React from 'react'

import { CardTitle, Card, CardActions, CardHeader, CardText, FlatButton, FloatingActionButton } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit'
import { Portfolio } from '../models/Portfolio'
import {GridList, GridTile} from 'material-ui/GridList'
import { ProviderFactory } from '../models/providers/ProviderFactory'
import CircularProgress from 'material-ui/CircularProgress'
import { Link } from 'react-router'

export class InvestmentCard extends React.Component<any, any> {

	constructor(){
		super()
		this.state = { currentPrice : 0, loading : true }
	}

	componentDidMount(){
		var provider = new ProviderFactory().getProvider(this.props.providerName, this.props.title)
		provider.getCurrentPrice().then(price => {
			this.setState({currentPrice : price, loading : false})
		})
	}

	render(){
		if(this.state.loading){
			return  <div style={{ height : 160, paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
						<Card style={{ width : '100%', height : '100%' }}>
							<div style={{ postition : 'relative' }}>
								<CircularProgress size={ 60 } style={{ marginLeft : '50%', left : -30, top : 50 }} />
							</div>
						</Card>
					</div>
		}
		var r = 100.0 * this.state.currentPrice / this.props.initialPrice - 100.0
		var change = ((r < 0.0) ? '-' : '+') + Math.abs(r).toFixed(2) + '%'
		var color = (r < 0.0) ? '#d00' : '#0d0'
		var value = this.props.amount * this.state.currentPrice

		return <div style={{ height : 160, paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
					<Card style={{ float : 'left', width : '100%', height : '100%'}}>
						<CardHeader
							avatar={ this.props.avatar }
							title={ this.props.title }
							subtitle={ "Provider: " + this.props.providerName}
						/>
						<CardTitle
							subtitle={ change }
							subtitleColor={ color }
							title={ value.toFixed(2) + " " + this.props.currency}
						/>
					</Card>
				</div>
	}
}