/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import * as React from 'react'

import { CardTitle, Card, CardActions, CardHeader, CardText, FlatButton, FloatingActionButton } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit'
import { Portfolio } from '../models/Portfolio'
import {GridList, GridTile} from 'material-ui/GridList'
import { ProviderFactory } from '../models/providers/ProviderFactory'
import CircularProgress from 'material-ui/CircularProgress'
import { Link } from 'react-router'
import { InvestmentCard } from '../components/InvestmentCard'
/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export class Home extends React.Component<any, any> {
    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    render() {
        return <div style={{ width : '100%' }}>
        				{Portfolio.getInvestments().map((investment) => (
        							<InvestmentCard key={ investment.investmentName }
        											title={ investment.investmentName }
        											providerName={ investment.providerName }
        											avatar={ investment.imageUrl }
        											amount={ investment.amount }
        											currency={ investment.currency }
        											initialPrice={ investment.initialPrice }
        											/>
        					))}
        			<FloatingActionButton   containerElement={<Link to = '/newinvestments' />} 
                                            style={{position: 'absolute', bottom: 20, right: 20}}>
        				<ContentAdd />
        			</FloatingActionButton>
        		</div>
    }
}
