import Statement from "../src/Statement.js";

describe('Statement Tests', () => {
    it('should generate the statement for an empty account', () => {
        // Arrange
        const account = {
            getTransactions: () => [],
        };
        spyOn(console, "log");

        // Act
        Statement.generate(account);

        expect(console.log).toHaveBeenCalledWith(
            'date       || credit  || debit  || balance\n'
        );
    })

    it('should generate statement for an account with previous transactions, highlighting credit in green, debit in red, and balance in red/green based on the value (-/+)', () => {
        // 
        const account = {
            getTransactions: () => [
                {
                    date: new Date(2012, 0, 12).toLocaleDateString("en-GB"),
                    type: "deposit",
                    amount: 2000,
                    updatedBalance: 2500,
                },
                {
                    date: new Date(2012, 0, 11).toLocaleDateString("en-GB"),
                    type: "withdraw",
                    amount: 500,
                    updatedBalance: -500,
                },
                {
                    date: new Date(2012, 0, 10).toLocaleDateString("en-GB"),
                    type: "deposit",
                    amount: 1000,
                    updatedBalance: 1000,
                }
            ],
        };

        spyOn(console, "log");

        // Act
        Statement.generate(account);

        expect(console.log).toHaveBeenCalledWith(
            'date       || credit  || debit  || balance\n' +
            '12/01/2012 || \x1b[32m2000.00\x1b[0m ||        || \x1b[32m2500.00\x1b[0m\n' +
            '11/01/2012 ||         || \x1b[31m500.00\x1b[0m || \x1b[31m-500.00\x1b[0m\n' +
            '10/01/2012 || \x1b[32m1000.00\x1b[0m ||        || \x1b[32m1000.00\x1b[0m\n'
        );
    })
})