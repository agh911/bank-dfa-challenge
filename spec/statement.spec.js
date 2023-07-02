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
})