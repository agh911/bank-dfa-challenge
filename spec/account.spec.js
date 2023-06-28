describe('Account Tests', () => {
    it('should create and instance of the Account object', () => {
        let account1 = new Account();

        expect(account1).toBeInstanceOf(Account);
        expect(account1).toBeDefined();
    });

})