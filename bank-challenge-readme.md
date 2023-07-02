# Bank Challenge  - Domain Models and Tests

## Instructions
1. Clone to your local machine.
2. Install project dependencies listed in package.jason by running:
```sh
$ npm install # installs dependencies listed in package.json
```
3. Run the tests using:
```sh
$ npm test
```

## Full Bank Challenge Domain Model
| Objects     | Properties                | Messages                    | Outputs  |
| ----------- | ------------------------- | --------------------------- | -------- |
| Account     | balance @Integer          | getBalance()                | @Integer |
|             | TransactionsList @Array[] | getTransactions()           | @Array[] |
|             |                           | newTransaction(transaction) | @Void    |
|             |                           | isDeposit(transaction)      | @Boolean |
|             |                           | isWithdrawal(transaction)   | @Boolean |
|             |                           | validateAmount(amount)      | @Void    |
|             |                           | addTransaction(transaction) | @Void    |
| Transaction | date @new Date()obj       | getDate()                   | @String  |
|             | type @String              | getType()                   | @String  |
|             | amount @Integer           | getAmount()                 | @Integer |
|             | updatedBalance @Integer   | getUpdatedBalance()         | @Integer |
|             |                           | setUpdatedBalance(balance)  | @Void    |
|             |                           | getTransactionDetails()     | @Array[] |
| Statement   |                           | print(account)              | @String  |
|             |                           | formatCredit(credit)        | @Void    |
|             |                           | formatDebit(debit)          | @Void    |
|             |                           | formatBalance(balance)      | @Void    |

### Account
#### User Story 1
```sh
As a user,
so that I can start saving from scratch or move and manage my existing savings securely,
I want to open an account with either an initial balance of 0 or a specific balance
```

#### Domain Model
| Objects | Properties       | Messages     | Outputs  |
| ------- | ---------------- | ------------ | -------- |
| Account | balance @Integer | getBalance() | @Integer |

#### Tests
1. Test if an instance of the Account class has been created.
2. Test if the account balance is initially set to zero.
3. Test if I can set the initial balance of the account to a specific amount.

#### User Stories 2 & 3
```sh
As a user,
so that I can add funds to my balance,
I want to be able to make a deposit into my account

As a user,
so that I can access my funds and buy new skincare,
I want to be able to make a withdrawal from my account,
```

#### Domain Model
| Objects | Properties       | Messages                    | Outputs  |
| ------- | ---------------- | --------------------------- | -------- |
| Account | balance @Integer | getBalance()                | @Integer |
|         |                  | newTransaction(transaction) | @Void    |
|         |                  | isDeposit(transaction)      | @Boolean |
|         |                  | isWithdrawal(transaction)   | @Boolean |
|         |                  | validateAmount(amount)      | @Boolean |

#### Tests
1. Test if funds can be deposited into the account.
2. Test if funds can be withdrawn from the account.
3. Test if depositing zero amount or below is not allowed.
4. Test if withdrawing zero amount or below is not allowed.

#### User Story 4
```sh
As a user,
so that I can view an account statement later,
I want my account to keep track of my transactions

As a user,
so that I can have the sequence of events,
I want the transactionsList to be in chronological order (most recent first)
```

#### Domain Model
| Objects | Properties                | Messages                    | Outputs  |
| ------- | ------------------------- | --------------------------- | -------- |
| Account | balance @Integer          | getBalance()                | @Integer |
|         | transactionsList @Array[] | newTransaction(transaction) | @Void    |
|         |                           | addTransaction(transaction) | @Void    |
|         |                           | getTransactions()           | @Array   |

#### Tests
1. Test if executed transactions are added to the transactions array.
2. Test if the transactions array increases by 2 when 2 new transactions are added.
3. Test if the transactions array is ordered in chronological order.

### Transaction
#### User Stories
```sh
As a user,
so that I can accurately represent each transaction,
I want my transactions to have a specific date, amount, and type (credit or debit)

As a user,
so that I can view the details and when it occurred,
I want to be able to get the date, amount and type of a transaction

As a user,
so that I can see the current balance,
I want the transaction to record the updated balance after each transaction
```

#### Domain Model
| Objects     | Properties              | Messages            | Outputs  |
| ----------- | ----------------------- | ------------------- | -------- |
| Transaction | date @String            | getDate()           | @String  |
|             | type @String            | getType()           | @String  |
|             | amount @Integer         | getAmount()         | @Integer |
|             | updatedBalance @Integer | setUpdatedBalance() | @Void    |
|             |                         | getUpdatedBalance() | @Integer |

#### Tests
1. Test that an instance of the Transaction class is created.
2. Test whether the date of a specific transaction is returned correctly.
3. Test whether the type of a given transaction is returned accurately.
4. Test whether the amount of a particular transaction is returned correctly.
5. Test if the initial updated balance is undefined.
6. Test the ability to set the updated balance.
7. Test the accuracy of returned transaction details.

### Statement
#### User Stories
```sh
As a user,
so that I can view the record of my transactions,
I want to be able to generate a statement

As a user,
so that I can view it,
I want the be able to print my statement (in the JavaScript console)

Extended Criteria
As a user,
so that I can easily identify deposits and withdrawals,
I want the statement to highlight credited values in green and debited values in red

As a user,
so I know if it's time to quit spending and start saving,
I want the statement to display the balance in green if positive and red if negative
```

#### Domain Model
| Objects   | Properties | Messages               | Outputs  |
| --------- | ---------- | ---------------------- | -------- |
| Statement |            | print(account)         | @String  |
|           |            | formatCredit(credit)   | @Void    |
|           |            | formatDebit(debit)     | @Void    |
|           |            | formatBalance(balance) | @Void    |

#### Tests
1. Test generating a statement for an empty account.
2. Test printing a statement to the console with credit values in green, debit values in red and balance in red or green based on whether it is a negative or positive value

Note: Encountered difficulties while testing the generation of a statement without colours. The tests would eventually fail because Jasmine considers ANSI colour codes once the format methods are added into the Statement class, making it challenging to test individual aspects. As a result, I decided to opt for a comprehensive test that covers all aspects of statement generation.


## Credits
* [Sorting dates - newest first.](https://stackoverflow.com/questions/51757994/javascript-sort-array-of-objects-by-date-then-by-time)
* [ANSI Colours.](https://codehs.com/tutorial/andy/ansi-colors)
* [Jasmine Documentation](https://jasmine.github.io/api/edge/global)
* [ESLint](https://eslint.org/docs/latest/use/getting-started)