class Account {
    #balance;

    constructor(balance = 0) {
        this.#balance = balance;
    }

    newTransaction(transaction) {
        const amount = transaction.getAmount();
        this.#balance += (this.isDeposit(transaction) ? amount : -amount);
        transaction.setUpdatedBalance(this.getBalance());
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