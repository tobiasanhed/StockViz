/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import { ProviderFactory } from './providers/ProviderFactory.ts'
import storage = require('electron-storage')

/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export class Portfolio {
    private static FILEPATH = 'Investments'

    /*--------------------------------------
     * FIELDS
     *------------------------------------*/
    private static images = {
        'Yahoo' : 'https://s.yimg.com/ge/new/Finance_ICON.png',
        'Winkdex' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png'
    }

    private static investments = [
        /* {
            //currency: 'USD',
            amount: 5,
            initialPrice: 342.90,
            investmentName: 'HM-B.ST',
            providerName: 'Yahoo',
            imageUrl: Portfolio.images.Yahoo,
            targetUrl: 'https://finance.yahoo.com/quote/HM-B.ST/'
        },
        {
            //currency: 'USD',
            amount: 5,
            initialPrice: 76.55,
            investmentName: 'IMINT.ST',
            providerName: 'Yahoo',
            imageUrl: Portfolio.images.Yahoo,
            targetUrl: 'https://finance.yahoo.com/quote/IMINT.ST/'
        },
        {
            //currency: 'USD',
            amount: 40,
            initialPrice: 25.02,
            investmentName: 'MYFC.ST',
            providerName: 'Yahoo',
            imageUrl: Portfolio.images.Yahoo,
            targetUrl: 'https://finance.yahoo.com/quote/MYFC.ST/'
        },
        {
            //currency: 'USD',
            amount: 63,
            initialPrice: 17.56,
            investmentName: 'NVP.ST',
            providerName: 'Yahoo',
            imageUrl: Portfolio.images.Yahoo,
            targetUrl: 'https://finance.yahoo.com/quote/NVP.ST/'
        }*/
    ]

    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    static loadInvestments(){
        storage.get(this.FILEPATH).then( (investments) => {
            Portfolio.investments = investments
            return investments
        })
    }

    static saveInvestments(){
        return storage.set(this.FILEPATH, Portfolio.investments)
    }

    static getInvestments() {
        return storage.get(this.FILEPATH).then( (investments) => {
            Portfolio.investments = investments
            return investments
        })
    }

    static removeInvestments(investmentName) {
        console.log("removeing " + investmentName)
        for(var i = 0; i < Portfolio.investments.length; i++){
            if(Portfolio.investments[i].investmentName === investmentName)
                break
        }
        console.log(Portfolio.investments)
        Portfolio.investments.splice(i, 1)
        console.log(Portfolio.investments)

        return this.saveInvestments()
    }

    static addInvestment(/*currency,*/ name, providerName, amount, price, targetUrl){
        Portfolio.investments.push(
            {
                //currency: currency,
                amount: amount,
                initialPrice: price,
                investmentName: name,
                providerName: providerName,
                imageUrl: this.images[providerName],
                targetUrl: targetUrl
            })
        this.saveInvestments()
    }
}
