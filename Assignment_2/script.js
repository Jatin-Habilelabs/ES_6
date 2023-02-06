class LocalStorage {
    constructor() {
        this.map = new Map();
    }
    setItem(key, value) {
        if (typeof value == 'string') {
            this.map.set(key, value)
        }
        else {
            console.error("Value is not in correct formet");
        }

    }

    getItem(key) {
       return this.map.get(key)
    }
    removeItem(key) {

        this.map.delete(key);
    }
    clear() {
        this.map.clear();
    }
    length() {
        return this.map.size();
    }
}
let local = new LocalStorage()
local.setItem('name', "Jatin")
local.setItem(3, 'sdsd')
local.setItem('arr', JSON.stringify({ arr: [1, 2, 3, 4, 5, 6] }));
console.log(JSON.parse(local.getItem('arr')));