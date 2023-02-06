class LocalStorage {
    constructor() {
        this.map = new Map();
    }
    setItem(key, value) {
        if (typeof value !== 'string') {
            this.map.set(key, JSON.stringify(value))
        }
        else {
            this.map.set(key, value)
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
    getlength() {
        return this.map.size;
    }
}
let local = new LocalStorage()
local.setItem('name', "Jatin")

local.setItem('Roll No', 3,)
local.setItem('arr', { arr: [1, 2, 3, 4, 5, 6] });
console.log(local.getlength());
console.log(local.getItem('Roll No'));