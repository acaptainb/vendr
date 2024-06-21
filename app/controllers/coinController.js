import { coinsService } from "../services/coinService.js"
import { setText } from "../utils/Writer.js"

export class CoinController {
    constructor() {
        console.log('coin controller is working')
    }

    addCoin() {
        console.log('adding one')
        coinsService.addCoin()
        this.drawCoins()
    }


    drawCoins() {
        // TODO anamsinban monda budam
        setText("Coi")
    }




}