export default class Home {
    constructor (address) {
        this.address = address
    }

    showHome () {
        console.log(`Hi,this is my address:${this.address}`)
    }
}