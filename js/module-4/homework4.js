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
    };
    this.countTotalPrice = function (order) {
      let totalPrice = 0;
      for(let key in order) {
       this.productDatabase[key] * order[key];
       totalPrice = totalPrice + order[key];
      }
      return totalPrice;
    }
    this.countChange = function (totalPrice) {
      let change = this.customerMoney - this.countTotalPrice;
      if(this.customerMoney < totalPrice) {
        return this.onError();
      } else { 
        if(change !== null) {
        
         this.onSuccess(change); 
         return this.reset()
       } ;
      
      }
    }
    this.onError = function (){
      console.log('Очень жаль, вам не хватает денег на покупки')
      return this.reset()
    };
    this.onSuccess = function (change) {
      console.log(`Спасибо за покупку, ваша сдача ${change}!`);
      return this.reset()
    };
    this.reset = function() {
      this.customerMoney  = 0;
    }


};



  
  



const mango = new Cashier('Mango', products);

//mango.getCustomerMoney(300);

console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney);

const totalPrice = mango.countTotalPrice(order);
console.log(totalPrice);
mango.getCustomerMoney(300);
console.log(mango.customerMoney);
const change = mango.countChange();
console.log(change);