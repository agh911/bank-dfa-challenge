describe('Transaction Tests', () => {
    let transaction;

    beforeEach(() => {
        transaction = new Transaction();
    })

    it('should create an instance of the Transaction class', () => {
        expect(transaction).toBeInstanceOf(Transaction);
        expect(transaction).toBeDefined();
    })
})