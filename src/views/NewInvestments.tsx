/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import * as React from 'react'
import { browserHistory } from 'react-router'

import { RaisedButton, List, DropDownMenu, MenuItem, CardTitle, Card, CardActions, CardHeader, CardText, FlatButton, FloatingActionButton, TextField } from 'material-ui'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit'
import { Portfolio } from '../models/Portfolio'
import {GridList, GridTile} from 'material-ui/GridList'
import { ProviderFactory } from '../models/providers/ProviderFactory'
import CircularProgress from 'material-ui/CircularProgress'
import { Link } from 'react-router'
import { blue500, red500 } from 'material-ui/styles/colors'

/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export class NewInvestments extends React.Component<any, any> {
    /*--------------------------------------
     * METHODS
     *------------------------------------*/
    constructor(props) {
      super(props);
      this.state = { provider : 1, currency : 1, nameFieldValue : "", amountFieldValue : '', priceFieldValue : ''};
    }
    providers = ["Yahoo", "Avanza", "Winkdex", "Google Finance"]
    currencies = ["USD", "SEK", "EUR", "GBP"]

    handleProviderChange = (event, index, value) => this.setState({provider : value});
    handleCurrencyChange = (event, index, value) => this.setState({currency : value});
    handleNameChange = (e) => {console.log(e.target.value);this.setState({nameFieldValue : e.target.value})};
    handleAmountChange = (e) => this.setState({amountFieldValue : e.target.value});
    handlePriceChange = (e) => this.setState({priceFieldValue : e.target.value});

    render() {
        return  <form>
                  <div style={{ width : '100%', padding : 30 }}>
                    <TextField id='nameFieldValue' 
                      floatingLabelText="Name of stock (Symbol)"
                      style={{ width : '80%'}} 
                      value={this.state.nameFieldValue}
                      underlineFocusStyle={{borderColor : blue500 }}
                      underlineStyle={{ borderColor : red500 }}
                      onChange={this.handleNameChange}
                      /><br />
                    <DropDownMenu style={{ width : '80%'}} 
                      value={this.state.provider} 
                      onChange={this.handleProviderChange}>
                      <MenuItem value={1} primaryText="Yahoo" />
                      <MenuItem value={2} primaryText="Avanza" />
                      <MenuItem value={3} primaryText="Winkdex" />
                      <MenuItem value={4} primaryText="Google Finance" />
                    </DropDownMenu><br />                  
                    <TextField id='amountFieldValue' 
                      floatingLabelText="Amount of stocks"
                      style={{ width : '80%'}} 
                      value={this.state.amountFieldValue}
                      underlineFocusStyle={{borderColor : blue500 }}
                      underlineStyle={{ borderColor : red500 }}
                      onChange={this.handleAmountChange}
                      /><br />
                    <TextField id='priceFieldValue'
                      floatingLabelText="Price when aquired"
                      style={{ width : '80%'}} 
                      value={this.state.priceFieldValue}
                      underlineFocusStyle={{borderColor : blue500 }}
                      underlineStyle={{ borderColor : red500 }}
                      onChange={this.handlePriceChange}
                      /><br /><br /><br />
                    <RaisedButton onTouchTap={this.addInvestment} style={{ width : '90%'}} secondary={true} label="Add" />
                    <FloatingActionButton  onTouchTap={browserHistory.goBack}
                                           style={{position: 'absolute', left: 20, bottom: 20}}
                                           primary={true}>
                      <NavigationArrowBack />
                    </FloatingActionButton>

                  </div>
                </form>
    }

    addInvestment = () => {
      Portfolio.addInvestment(/*this.currencies[this.state.currency - 1],*/ this.state.nameFieldValue, this.providers[this.state.provider - 1], this.state.amountFieldValue, this.state.priceFieldValue)
      browserHistory.goBack()
    }
}
