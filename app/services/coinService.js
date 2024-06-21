import { AppState } from "../AppState.js"

class CoinsService {
    addCoin() {
        // NOTE do not alias out a primitive and try to change the value!
        AppState.money++
        console.log(AppState.money);
    }
}

export const coinsService = new CoinsService()