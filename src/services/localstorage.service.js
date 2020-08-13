function setItem (key, value) {
    value = JSON.stringify(value)
    localStorage.setItem(key, value);
}

function getItem(key) {
    let value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return;
}

function removeItem(key) {
    localStorage.removeItem(key);
}

export default {
    setItem, getItem, removeItem
};