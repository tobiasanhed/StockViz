/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import { AbstractProvider } from './AbstractProvider'

import { Promise } from 'es6-promise'

/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export abstract class JsonProvider {
    /*--------------------------------------
     * FIELDS
     *------------------------------------*/

    baseURL: string

    /*--------------------------------------
     * CONSTRUCTOR
     *------------------------------------*/

    constructor(baseURL) {
        if (!baseURL.endsWith('/')) {
            baseURL += '/'
        }

        this.baseURL = baseURL
    }

    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    getJSON(method):Promise<any> {
        var url = this.baseURL + method

        return new Promise((resolve) => {
            $.getJSON(url, r => resolve(r))
        })
    }
}
