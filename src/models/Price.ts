/*--------------------------------------
 * CLASSES
 *------------------------------------*/

export class Price {
    currencyName: string

    value: number

    constructor(value: number, currencyName: string) {
        this.currencyName   = currencyName
        this.value          = value
    }

    toString() {
        return `${this.value.toFixed(2)} ${this.currencyName}`
    }
}
