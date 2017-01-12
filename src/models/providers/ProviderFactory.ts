/*--------------------------------------
 * IMPORTS
 *------------------------------------*/

import { AbstractProvider } from './AbstractProvider'
import { WinkdexProvider }  from './WinkdexProvider'

/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export class ProviderFactory {
    /*--------------------------------------
     * METHODS
     *------------------------------------*/

    getProvider(providerName: string): AbstractProvider {
        providerName = providerName.toLowerCase()

        switch (providerName) {
        case 'winkdex': return new WinkdexProvider()
        }

        console.log('unknown provider: ', providerName)
        return undefined
    }
}
