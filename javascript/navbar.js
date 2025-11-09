export class Navbar{
    constructor(){

    }

    renderItems(items){
        const listContainer = document.querySelector(".js-menu-item");

        items.forEach((item) => {
            // const listItem = document.createElement("li");
            // const linkItem = document.createElement("a");

            // linkItem.textContent = item.text;
            // linkItem.href = item.link;

            // listItem.appendChild(linkItem);
            // listContainer.appendChild(listItem);

            const templateItem = `<li><a href="${item.link}">${item.text}</a></li>`;
            listContainer.innerHTML += templateItem;
        })
    }
}