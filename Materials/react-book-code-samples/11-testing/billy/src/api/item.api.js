

export default class ItemApi {
    constructor (initial = []) {
        this.items = initial;
    }

    findById(id) {
        return this.items.filter(item => item.id === id)[0];
    }

    create (item) {
        item.id = Math.round(Date.now() * Math.random());
        this.items.push(item)

        return [...this.items]
    }

    read() {
        return this.items;
    }

    update (changedItem) {
        const index = this.items.findIndex(item => item.id === changedItem.id)
        this.items[index] = changedItem;

        return [...this.items]
    }

    remove (id) {
        const filtered = this.items.filter(item => item.id !== id)
        this.items = filtered;

        return [...this.items]
    }
}