/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import { JsonProvider } from './JsonProvider'

import { Price } from '../../models/Price'

/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export class WinkdexProvider extends JsonProvider {
    /*--------------------------------------
     * CONSTRUCTOR
     *------------------------------------*/

    constructor() {
        super('https://winkdex.com/api/v0/')
    }

    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    getCurrentPrice() {
        return this.getJSON('price').then(r => {
            return r.price / 100.0
        })
    }

    getName() {
        return 'Winkdex'
    }
}
