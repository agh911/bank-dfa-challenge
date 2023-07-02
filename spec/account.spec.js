import Account from "../src/Account.js";

describe('Account Tests', () => {
    let account;

    function mockTransaction(date, type, amount) {
        return {
            getDate: () => date,
            getType: () => type,
            getAmount: () => amount,
            setUpdatedBalance: () => { },
            getTransactionDetails: () => ({
                date: date.toLocaleDateString("en-GB"),
                type,
                amount
            })
        }
    }

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
        const mockDeposit = mockTransaction(new Date(2012, 0, 10), "deposit", 2000);

        // Act
        account.newTransaction(mockDeposit);

        expect(account.getBalance()).toBe(2000);
    })

    it('should deduct 1500 to the balance when a withdrawal of 1500 is made', () => {
        // Arrange
        const mockWithdrawal = mockTransaction(new Date(2012, 0, 10), "withdraw", 1500);

        // Act
        account.newTransaction(mockWithdrawal);

        expect(account.getBalance()).toBe(-1500);
    })

    it('should throw an error when attempting to deposit a value equal to 0 or below', () => {
        // Arrange
        const mockDeposit = mockTransaction(new Date(2012, 0, 10), "deposit", 0);
        const mockDeposit1 = mockTransaction(new Date(2012, 0, 10), "deposit", -500);

        expect(() => account.newTransaction(mockDeposit)).toThrowError('The transaction amount must not be zero or below.');
        expect(() => account.newTransaction(mockDeposit1)).toThrowError('The transaction amount must not be zero or below.');

    })

    it('should throw an error when attempting to withdraw a value equal to 0 or below', () => {
        // Arrange
        const mockWithdrawal = mockTransaction(new Date(2012, 0, 10), "withdraw", 0);
        const mockWithdrawal1 = mockTransaction(new Date(2012, 0, 10), "withdraw", -3000);

        expect(() => account.newTransaction(mockWithdrawal)).toThrowError('The transaction amount must not be zero or below.');
        expect(() => account.newTransaction(mockWithdrawal1)).toThrowError('The transaction amount must not be zero or below.');

    })

    it('should throw an error when attempting to make a deposit with string', () => {
        // Arrange
        const mockDeposit = mockTransaction(new Date(2012, 0, 10), "deposit", "deposit");
        const mockWithdrawal = mockTransaction(new Date(2012, 0, 19), "withdraw", "withdraw");

        expect(() => account.newTransaction(mockDeposit)).toThrowError('The transaction amount is invalid: must be a number.');
        expect(() => account.newTransaction(mockWithdrawal)).toThrowError('The transaction amount is invalid: must be a number.');
    })

    it('should add executed transactions to an array within the account for record-keeping purposes', () => {
        // Arrange
        const mockDeposit = mockTransaction(new Date(2012, 0, 10), "deposit", 5000);
        spyOn(account, 'addTransaction');

        // Act
        account.newTransaction(mockDeposit);

        expect(account.addTransaction).toHaveBeenCalled();
        expect(account.addTransaction).toHaveBeenCalledWith(mockDeposit.getTransactionDetails());

    })

    it('should increase the transactions array by 2 when new transactions are added', () => {
        // Arrange
        const mockDeposit = mockTransaction(new Date(2012, 0, 10), "deposit", 5000);
        const mockWithdrawal = mockTransaction(new Date(2012, 0, 10), "withdraw", 2500);

        // Act
        account.newTransaction(mockDeposit);
        account.newTransaction(mockWithdrawal);

        expect(account.getTransactions().length).toBe(2);
    })

    it('should return the transactions in chronological order', () => {
        // Arrange
        const mockDeposit = mockTransaction(new Date(2012, 0, 10), "deposit", 5000);
        const mockWithdrawal = mockTransaction(new Date(2012, 0, 11), "withdraw", 2500);
        const mockDeposit1 = mockTransaction(new Date(2012, 0, 12), "deposit", 1500);

        account.newTransaction(mockDeposit);
        account.newTransaction(mockWithdrawal);
        account.newTransaction(mockDeposit1);

        let sortedTransactions = [mockDeposit1.getTransactionDetails(), mockWithdrawal.getTransactionDetails(), mockDeposit.getTransactionDetails()];

        expect(account.getTransactions()).toEqual(sortedTransactions);
    })
})