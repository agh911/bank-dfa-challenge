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

    getUpdatedBalance() {
        return this.#updatedBalance;
    }

    setUpdatedBalance(newBalance) {
        this.#updatedBalance = newBalance
    }

    getTransactionDetails() {
        return {
            date: this.#date,
            type: this.#type,
            amount: this.#amount,
            updatedBalance: this.#updatedBalance,
        };
    }
}

export default Transaction;