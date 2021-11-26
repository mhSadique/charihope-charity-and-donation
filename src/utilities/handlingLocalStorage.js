function getItemsFromLocalStorage(localStorageName) {
    const items = JSON.parse(localStorage.getItem(localStorageName));
    return items;
}

function setItemToLocalStorage(localStorageName, itemsToStore) {
    localStorage.setItem(localStorageName, JSON.stringify(itemsToStore));
}

export {getItemsFromLocalStorage, setItemToLocalStorage}