/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import { JsonProvider } from './JsonProvider'

import { Price } from '../../models/Price'

/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export class YahooProvider extends JsonProvider {
    /*--------------------------------------
     * CONSTRUCTOR
     *------------------------------------*/

    constructor(investmentName){
        super("http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20where%20symbol%20in%20%28%22"
         	  + investmentName + 
         	  "%22%29%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json")
    }
    

    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    getCurrentPrice() {
        return this.getJSON('').then(r => {
            return { price : r.query.results.quote.Bid, currency : r.query.results.quote.Currency }
        })
    }

    getName() {
        return 'Yahoo'
    }
}
