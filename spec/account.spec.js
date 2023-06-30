import Account from "../src/Account.js";

describe('Account Tests', () => {
    let account;

    beforeEach(() => {
        account = new Account();
    })
    it('should create and instance of the Account object', () => {
        expect(account).toBeInstanceOf(Account);
        expect(account).toBeDefined();
    });

    it('should initialise the account with a balance of zero', () => {
        expect(account.getBalance()).toBe(0);
    })

    it('should initialise the account with a balance of 3000', () => {
        // Arrange/Act
        let account2 = new Account(3000);

        expect(account2.getBalance()).toBe(3000);
    })

})