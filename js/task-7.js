const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  lastId: 0,

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */

  createTransaction(amount, type) {
    let transaction = {};
    transaction.amount = amount;
    transaction.type = type;
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

    transaction.id = this.lastId + 1;
    this.lastId += 1;
    this.balance += amount;
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */

  withdraw(amount) {
    if (this.balance >= amount) {
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      transaction.id = this.lastId + 1;
      this.lastId += 1;
      this.balance -= amount;
      this.transactions.push(transaction);
    } else {
      console.log("На вашем счету не достаточно средств");
    }
  },

  /*
   * Метод возвращает текущий баланс
   */

  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */

  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

account.deposit(1000);
account.deposit(1000);
account.withdraw(500);
account.withdraw(500);
account.getTransactionDetails(3);
account.getTransactionTotal("deposit");
console.table(account);
console.log(account.transactions);
