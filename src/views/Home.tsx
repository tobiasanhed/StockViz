/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import * as React from 'react'

import { Card, CardActions, CardHeader, CardText, FlatButton, FloatingActionButton } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit'

/*--------------------------------------
 * CLASSES
 *------------------------------------*/

class InvestmentCard extends React.Component<any, any> {
	key : string
	render(){
		return <Card style={{margin: 20}}>
			<CardHeader
				title="Pornhub"
				subtitle="Provider: Wikidex"
			    actAsExpander={true}
			    showExpandableButton={true}
			/>
			<CardActions>
			</CardActions>
			<CardText expandable={true}>
				You are the worst invester ever.
				<FloatingActionButton expandable={true} mini={true} style={{position: "absolute", right: 20}}>
					<ContentEdit />
				</FloatingActionButton>
			</CardText>
		</Card>""
	}
}

const cards = [
	{
		
		InvestmentCard card
	}
]

export class Home extends React.Component<any, any> {
    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    render() {
        return <div>
        			<GridList cellHeight={180} style={{overflowY:'auto'}}>
        				{cards.map((tile) => (
        						<GridTile key={tile.card.key}>
        							<InvestmentCard title=|{tile.card.title}/>
        						</GridTile>
        					))}
        			</GridList>
        			<FloatingActionButton style={{position: 'absolute', bottom: 20, right: 20}}>
        				<ContentAdd />
        			</FloatingActionButton>
        		</div>
    }
}
