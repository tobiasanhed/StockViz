/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import { ProviderFactory } from './providers/ProviderFactory.ts'

/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export class Portfolio {
    /*--------------------------------------
     * FIELDS
     *------------------------------------*/

   private static investments = []

    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    static getInvestments() {

    }

    static loadInvestments() {
        Portfolio.investments = [
            {
                amount: 100.0,
                initialPrice: 600.0,
                investmentName: 'Bitcoin',
                providerName: 'Winkdex',
                imageUrl: ''
            }
        ]
   }
}
