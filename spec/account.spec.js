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

    it('should add 2000 to the balance when a deposit of 2000 is made', () => {
        // Arrange
        const mockDeposit = {
            getDate() {
                return newDate(2012, 0, 10).toLocaleDateString("en-GB");
            },
            getType() {
                return 'deposit';
            },
            getAmount() {
                return 2000;
            },
            setUpdatedBalance: () => { },
            getTransactionDetails: () => { }
        }

        // Act
        account.newTransaction(mockDeposit);

        expect(account.getBalance()).toBe(2000);
    })

    it('should deduct 1500 to the balance when a withdrawal of 1500 is made', () => {
        // Arrange
        const mockWithdrawal = {
            getDate() {
                return newDate(2012, 0, 10).toLocaleDateString("en-GB");
            },
            getType() {
                return 'withdraw';
            },
            getAmount() {
                return 1500;
            },
            setUpdatedBalance: () => { },
            getTransactionDetails: () => { }
        }

        // Act
        account.newTransaction(mockWithdrawal);

        expect(account.getBalance()).toBe(-1500);
    })

    it('should throw an error when attempting to deposit a value equal to 0 or below', () => {
        // Arrange
        const mockDeposit = {
            getDate() {
                return newDate(2012, 0, 10).toLocaleDateString("en-GB");
            },
            getType() {
                return 'deposit';
            },
            getAmount() {
                return 0;
            },
            setUpdatedBalance: () => { },
            getTransactionDetails: () => { }
        }

        const mockDeposit1 = {
            getDate() {
                return newDate(2012, 0, 10).toLocaleDateString("en-GB");
            },
            getType() {
                return 'deposit';
            },
            getAmount() {
                return -500;
            },
            setUpdatedBalance: () => { },
            getTransactionDetails: () => { }
        }

        expect(() => account.newTransaction(mockDeposit)).toThrowError('The transaction amount must not be zero or below.');
        expect(() => account.newTransaction(mockDeposit1)).toThrowError('The transaction amount must not be zero or below.');

    })

})