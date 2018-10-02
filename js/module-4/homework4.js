"use strict";

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};
const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

function Cashier(name, productDatabase) { 
  
    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = 0;
    this.getCustomerMoney = function (value) {
      this.customerMoney = value;
      return this.customerMoney;
    };
    this.countTotalPrice = function (order) {
      this.totalPrice = 0;
      for(let key in order) {
       this.totalPrice += this.productDatabase[key] * order[key];
      }
      return this.totalPrice;
    }
    this.countChange = function (totalPrice) {
      const change = this.customerMoney - this.totalPrice;
     if(this.customerMoney < this.totalPrice) {
        return null;
      } return change;
      
      if(change !== null) {
      return this.onSuccess(change); 
     } else {
       return this.onError(); 
     }
    };
        
    this.onError = function (){
      console.log('Очень жаль, вам не хватает денег на покупки');
    };
    this.onSuccess = function (change) {
      console.log(`Спасибо за покупку, ваша сдача ${change}!`);
    };
    this.reset = function() {
      this.customerMoney  = 0;
    };


};



