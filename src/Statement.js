class Statement {
    static generate(account) {
        let statement = 'date       || credit  || debit  || balance\n';

        account.getTransactions().forEach((transaction) => {
            let credit = transaction.type === 'deposit' ? this.formatCredit(transaction.amount.toFixed(2)) : '';
            let debit = transaction.type === 'withdraw' ? this.formatDebit(transaction.amount.toFixed(2)) : '';

            let balance = this.formatBalance(transaction.updatedBalance.toFixed(2));

            statement += `${transaction.date} || ${credit.padEnd(7)} || ${debit.padEnd(6)} || ${balance}\n`
        });
        console.log(statement);
    }

    static formatDebit(debit) {
        return '\x1b[31m' + debit + '\x1b[0m';
    }

    static formatCredit(credit) {
        return '\x1b[32m' + credit + '\x1b[0m';
    }

    static formatBalance(balance) {
        let formattedBalance = '\x1b[31m' + balance + '\x1b[0m';
        if (balance >= 0) {
            formattedBalance = '\x1b[32m' + balance + '\x1b[0m';
        }
        return formattedBalance;
    }
}

export default Statement;