export function getItem(key, def = undefined) {
    const data = readStorage();
    const stored =  data[key];

    if (!stored) {
        setItem(key, def);

        return def;
    }

    return stored;
}

export function addCoinToStorage(item) {
    const coins = getItem('coins', []);

    coins.unshift(item);
    setItem('coins', coins);
}

export function setItem(key, value) {
    const data = readStorage();

    data[key] = value;
    writeStorage(data);
}

function readStorage() {
    let cryptoData = localStorage.getItem('cryptoData');

    if (!cryptoData) {
        localStorage.setItem('cryptoData', '{}');
        cryptoData = '{}';
    }

    return JSON.parse(cryptoData);
}

function writeStorage(data) {
    const toWrite = JSON.stringify(data);

    localStorage.setItem('cryptoData', toWrite);
}
