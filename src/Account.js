class Account {
    #balance;

    constructor(balance = 0) {
        this.#balance = balance;
    }

    newTransaction(transaction) {
        const amount = transaction.getAmount();
        this.#balance += amount;
        transaction.setUpdatedBalance(this.getBalance());
    }

    isDeposit(transaction) {
        return transaction.getType() === 'deposit';
    }

    getBalance() {
        return this.#balance;
    }
}

export default Account;