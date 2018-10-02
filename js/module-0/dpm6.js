'use strict';

class Account {
    constructor (login, email, friendsCount) {
      this._login = login;
      this._email = email;
      this._friendsCount = friendsCount;
    }
    getAccountInfo(){
      console.log (`Account login ${this._login}, email ${this._email}, friends ${this._friendsCount}`)
    }
  }
  
  const mango = new Account('Mango', 'mango@gmail.com', 34);
   mango.getAccountInfo();

const vano = new Account('Vano', 'vano@com', 30);
vano.getAccountInfo();

console.log(mango._email);