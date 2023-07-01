class Account {
    #balance;

    constructor(balance = 0) {
        this.#balance = balance;
    }

    newTransaction(transaction) {
        const amount = this.validateAmount(transaction.getAmount());
        this.#balance += (this.isDeposit(transaction) ? amount : -amount);
        transaction.setUpdatedBalance(this.getBalance());
    }

    validateAmount(amount) {
        if (amount <= 0) {
            throw new Error(`The transaction amount must not be zero or below.`);
        }
        return amount;
    }

    isDeposit(transaction) {
        return transaction.getType() === 'deposit';
    }

    isWithdrawal(transaction) {
        return transaction.getType() === 'withdraw';
    }

    getBalance() {
        return this.#balance;
    }
}

export default Account;