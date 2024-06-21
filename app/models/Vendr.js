export class Snack {

    constructor(data) {
        this.emoji = data.emoji
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }

    get catalogHTMLTemplate() {
        return `
        <div class="col-2 border bg-outline-warning my-3">
        <div onclick="" class="text-center" role="button">
        <p class="display-1"> ${this.emoji} </p>
        </div>
        </div>
        `
    }
}