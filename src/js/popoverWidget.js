export default class popoverWidget {
    constructor() {

    };
    init() {
        const button = document.getElementsByClassName("button");

        button.addEventlistener('click', (event) => {
            event.preventDefault();
            this.showPopover();
        })
    }

    showPopover() {

    }
}