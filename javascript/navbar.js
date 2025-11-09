export class Navbar{
    constructor(){

    }

    renderItems(items){
        const listContainer = document.querySelector(".js-menu-item");

        items.forEach((item) => {
            console.log("item", item)
        })

        console.log(listContainer);
        
        return console.log("Items del menu", items);
    }
}