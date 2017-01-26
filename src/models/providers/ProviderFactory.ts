/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import { AbstractProvider } from './AbstractProvider'
import { WinkdexProvider }  from './WinkdexProvider'
import { YahooProvider }    from './YahooProvider'

/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export class ProviderFactory {
    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    getProvider(providerName: string, investmentName: string): AbstractProvider {
        providerName = providerName.toLowerCase()

        switch (providerName) {
        case 'winkdex': return new WinkdexProvider()
        case 'yahoo': return new YahooProvider(investmentName)
        }

        console.log('unknown provider: ', providerName)
        return undefined
    }
}
