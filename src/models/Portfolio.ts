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

   private static investments = [
            {
                currency: 'USD',
                amount: 0.7,
                initialPrice: 600.0,
                investmentName: 'Bitcoin',
                providerName: 'Winkdex',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png'
            }
        ]

    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    static getInvestments() {
        return Portfolio.investments
    }
}
