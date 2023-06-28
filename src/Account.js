class Account {
    #balance;

    constructor(balance = 0) {
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }
}

export default Account;