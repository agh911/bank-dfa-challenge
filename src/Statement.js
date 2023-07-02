class Statement {
    static generate(account) {
        let statement = 'date       || credit  || debit  || balance\n';

        account.getTransactions().forEach((transaction) => {
            let credit = transaction.type === 'deposit' ? transaction.amount.toFixed(2) : '';
            let debit = transaction.type === 'withdraw' ? transaction.amount.toFixed(2) : '';

            let balance = transaction.updatedBalance.toFixed(2);

            statement += `${transaction.date} || ${credit.padEnd(7)} || ${debit.padEnd(6)} || ${balance}\n`
        });
        console.log(statement);
    }
}

export default Statement;