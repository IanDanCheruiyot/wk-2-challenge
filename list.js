document.addEventListener('DOMContentLoaded', function() {
    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const clearListBtn = document.getElementById('clearListBtn');
    const markPurchasedBtn = document.getElementById('markPurchasedBtn');
    const shoppingList = document.getElementById('shoppingList');

    let items = [];

    // Function to render the shopping list
    function renderShoppingList() {
        shoppingList.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.name;
            if (item.purchased) {
                li.classList.add('purchased');
            }
            li.addEventListener('click', () => {
                togglePurchased(index);
            });
            shoppingList.appendChild(li);
        });
    }

    // Function to add new item to the list
    function addItem() {
        const itemName = itemInput.value.trim();
        if (itemName !== '') {
            items.push({ name: itemName, purchased: false });
            renderShoppingList();
            itemInput.value = '';
        }
    }

    // Function to toggle purchased status
    function togglePurchased(index) {
        items[index].purchased = !items[index].purchased;
        renderShoppingList();
    }

    // Event listeners
    addItemBtn.addEventListener('click', addItem);
    clearListBtn.addEventListener('click', () => {
        items = [];
        renderShoppingList();
    });
    markPurchasedBtn.addEventListener('click', () => {
        items.forEach((item) => {
            item.purchased = true;
        });
        renderShoppingList();
    });
});
