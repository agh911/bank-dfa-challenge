import Transaction from "../src/Transaction.js";

describe('Transaction Tests', () => {
    let transaction;

    beforeEach(() => {
        transaction = new Transaction(new Date(2012, 0, 10), "deposit", 2000);
    })

    it('should create an instance of the Transaction class', () => {
        expect(transaction).toBeInstanceOf(Transaction);
        expect(transaction).toBeDefined();
    })

    it('should return the correct date of a given transaction', () => {
        expect(transaction.getDate().toLocaleDateString("en-GB")).toEqual("10/01/2012");
    })

    it('should return the correct type of a given transaction', () => {
        expect(transaction.getType()).toEqual("deposit");
    })

    it('should return the correct amount of a given transaction', () => {
        expect(transaction.getAmount()).toEqual(2000);
    })
})