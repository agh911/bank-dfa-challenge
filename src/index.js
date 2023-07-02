import Account from './Account.js';
import Transaction from './Transaction.js';
import Statement from './Statement.js';

let account = new Account();
let date = new Date(2012, 0, 10).toLocaleDateString('en-GB');
let date2 = new Date(2012, 0, 13).toLocaleDateString('en-GB');
let date3 = new Date(2012, 0, 14).toLocaleDateString('en-GB');

let deposit = new Transaction(date, 'deposit', 1000);
let credit = new Transaction(date2, 'deposit', 2000);
let deposit2 = new Transaction(date3, 'withdraw', 500);

account.newTransaction(deposit);
account.newTransaction(credit);
account.newTransaction(deposit2);

Statement.generate(account);