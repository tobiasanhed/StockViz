/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import * as React from 'react'

import { RaisedButton, CardTitle, Card, CardActions, CardHeader, CardText, FlatButton, FloatingActionButton } from 'material-ui'
import ContentAdd           from 'material-ui/svg-icons/content/add'
import ContentEdit          from 'material-ui/svg-icons/editor/mode-edit'
import { Portfolio }        from '../models/Portfolio'
import {GridList, GridTile} from 'material-ui/GridList'
import { ProviderFactory }  from '../models/providers/ProviderFactory'
import CircularProgress     from 'material-ui/CircularProgress'
import { Link }             from 'react-router'
import { InvestmentCard }   from '../components/InvestmentCard'
/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export class Home extends React.Component<any, any> {
    /*--------------------------------------
     * METHODS
     *------------------------------------*/

     constructor(){
        super()
        this.state = { investments : null }
     }

     componentDidMount() {
        Portfolio.getInvestments().then(investments => {
            this.setState({ investments: investments })
        })
     }
     onInvestmentRemoved = () => {
        Portfolio.getInvestments().then(investments => {
            this.setState({ investments: investments })
        })
     }
    render() {
        if (!this.state.investments) {
            return <div></div>
        }
        return <div style={{ margin: 0, width : '100%', paddingRight: 20, boxSizing: "border-box" }}>
                        {this.state.investments.map((investment) => (
                                    <InvestmentCard key         ={ investment.investmentName }
                                                    title       ={ investment.investmentName }
                                                    providerName={ investment.providerName }
                                                    avatar      ={ investment.imageUrl }
                                                    amount      ={ investment.amount }
                                                    //currency  ={ investment.currency }
                                                    initialPrice={ investment.initialPrice }
                                                    targetUrl   ={ investment.targetUrl }
                                                    onRemove    ={ this.onInvestmentRemoved }
                                                    />
                            ))}
                    <RaisedButton   label="ADD INVESTMENT"   
                                            containerElement={<Link to = '/newinvestments' />}
                                            style={{ width: 400, height: 40, margin: 20}}
                                            primary={true}/>
                </div>
    }
}
