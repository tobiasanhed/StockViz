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
                //currency: 'USD',
                amount: 0.7,
                initialPrice: 600.0,
                investmentName: 'Bitcoin',
                providerName: 'Winkdex',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png'
            },
            {
                //currency: 'USD',
                amount: 1.4,
                initialPrice: 700.0,
                investmentName: 'Bitcoin2',
                providerName: 'Winkdex',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png'
            },
            {
                //currency: 'USD',
                amount: 100,
                initialPrice: 100,
                investmentName: 'AAPL',
                providerName: 'Yahoo',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png'
            }
        ]

    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    static getInvestments() {
        return Portfolio.investments
    }

    static addInvestment(/*currency,*/ name, providerName, amount, price){
        Portfolio.investments.push(
            {
                //currency: currency,
                amount: amount,
                initialPrice: price,
                investmentName: name,
                providerName: providerName,
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png'
            })
    }
}
