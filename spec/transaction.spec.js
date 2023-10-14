import Transaction from '../src/Transaction.js';

describe('Transaction Tests', () => {
    let transaction;

    beforeEach(() => {
        transaction = new Transaction(new Date(2012, 0, 10).toLocaleDateString('en-GB'), 'deposit', 2000);
    });

    it('should create an instance of the Transaction class', () => {
        expect(transaction).toBeInstanceOf(Transaction);
        expect(transaction).toBeDefined();
    });

    it('should return the correct date of a given transaction', () => {
        expect(transaction.getDate()).toEqual('10/01/2012');
    });

    it('should return the correct type of a given transaction', () => {
        expect(transaction.getType()).toEqual('deposit');
    });

    it('should return the correct amount of a given transaction', () => {
        expect(transaction.getAmount()).toEqual(2000);
    });

    it('should return the initial updated balance as undefined', () => {
        expect(transaction.getUpdatedBalance()).toBeUndefined();
    });

    it('should set the updated balance', () => {
        // Arrange/Act
        transaction.setUpdatedBalance(2000);

        expect(transaction.getUpdatedBalance()).toEqual(2000);
    });

    it('should return the correct details of the transaction', () => {
        // Arrange/Act
        const expectedDetails = {
            date: '10/01/2012',
            type: 'deposit',
            amount: 2000,
            updatedBalance: 2000,
        };

        transaction.setUpdatedBalance(2000);

        expect(transaction.getTransactionDetails()).toEqual(expectedDetails);
    });
});