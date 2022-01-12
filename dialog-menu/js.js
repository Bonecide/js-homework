const GOOD_NAME_ID = "goodName"
const GOOD_PRICE_ID = "goodPrice"





function generateId() {
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const uniqid = randLetter + Date.now();

    return uniqid
}
function createModal(addGoodButton, closeModalButton){
    const modal = document.createElement ("dialog");

    const goodNameInput = document.createElement ("input")
    goodNameInput.id = GOOD_NAME_ID;
    goodNameInput.placeholder = 'Введите название товара'
    goodNameInput.style.display = 'block';


    const goodPriceInput = document.createElement ('input')
    goodPriceInput.id = GOOD_PRICE_ID
    goodPriceInput.placeholder = 'Введите цену товара'
    goodPriceInput.type = 'number'
    goodPriceInput.style.display = 'block'




        modal.appendChild(goodNameInput)
        modal.appendChild(goodPriceInput)
        modal.appendChild(addGoodButton)
        modal.appendChild(closeModalButton)

     return modal;    
}
// Class - Корзина покупок
class Basket {
    constructor(goodName, price = 0) {
        this.id = generateId();
        this.goodName = goodName;
        this.price = price
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    
    // Генерация DOM объектов
    const headerItems = ['ID', 'Название Товара', 'Цена']
    const basketList = [];

    function addGood() {
        const name = document.querySelector(`#${GOOD_NAME_ID}`);
        const price = document.querySelector(`#${GOOD_PRICE_ID}`);
        

        if(!name.value || !price.value) {
            return;
        }
        
        

        createGood(new Basket(name.value, price.value));
        
        
        toggleModal()
    }


    // Генерация Таблицы
    const table = document.createElement('table');
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')
    const tr = document.createElement('tr');

    thead.appendChild(tr);
    table.appendChild(thead);

    headerItems.forEach((name) => {
        const td = document.createElement('td');
        td.innerText = name;

        tr.appendChild(td);
    })

    function createGood(basketItem) {
        const basketContainer = document.createElement('tr')

        const td1 = document.createElement('td');
        td1.innerText = basketItem.id

        const td2 = document.createElement('td')
        td2.innerText = basketItem.goodName;

        const td3 = document.createElement('td');
        td3.innerText = basketItem.price;

        basketContainer.appendChild(td1)
        basketContainer.appendChild(td2)
        basketContainer.appendChild(td3)
        tbody.appendChild(basketContainer)
    }

    const addGoodButton = document.createElement('button')
    addGoodButton.innerText = 'Добавить товар'
    const closeModalButton = document.createElement('button')
    closeModalButton.innerText = 'Закрыть'






    basketList.forEach(createGood)
    table.appendChild(tbody)
    const modal = createModal(addGoodButton, closeModalButton)
    closeModalButton.addEventListener('click', toggleModal)
    function toggleModal() {
        modal.open = !modal.open;
    }
    const addButton = document.createElement('button');
    addButton.innerText = 'Добавить';
    addButton.addEventListener ('click', toggleModal)
    
    addGoodButton.addEventListener('click', addGood)
    closeModalButton.addEventListener('click', toggleModal)

    // Вход в программу
    app.appendChild(modal);
    app.appendChild(addButton);
    app.appendChild(table);
});
