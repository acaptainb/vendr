import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

export class VendrControllers {
    constructor() {
        console.log('Vendr Controller is ready');
        this.DrawSnacksCatalog()
    }


    DrawSnacksCatalog() {
        const snacks = AppState.snacks
        console.log('snacks -- ', snacks)
        let innerHTMLString = ''
        snacks.forEach((snack) => innerHTMLString += snack.catalogHTMLTemplate)
        // const snackCatalog = document.getElementById('snackCatalog')
        // snackCatalog.innerHTML = innerHTMLString
        setHTML('snackCatalog', innerHTMLString)
    }


    // setActiveSnack(snackName) {
    //     console.log('setting active name with the name of ' + snackName);
    // }



}