class Transaction {
    #date;
    #type;
    #amount;
    #updatedBalance;

    constructor(date, type, amount) {
        this.#date = date;
        this.#type = type;
        this.#amount = amount;
        this.#updatedBalance;
    }

    getDate() {
        return this.#date;
    }

    getType() {
        return this.#type;
    }

    getAmount() {
        return this.#amount;
    }
}

export default Transaction;