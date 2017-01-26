/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import { Promise } from 'es6-promise'

import { Price } from '../../models/Price'

/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export abstract class AbstractProvider {
    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    abstract getCurrentPrice() : Promise<{}>
    abstract getName() : string
}
