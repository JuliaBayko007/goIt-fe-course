"use strict";

class Hamburger {
  
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }
    addTopping (topping) {
      if(!this._toppings.includes(topping)){
        return this._toppings.push(topping);
      } return null;
    };

    removeTopping (topping) {
      if(this._toppings.includes(topping)) {
        this._toppings.filter(el => el !== topping)
      } return null;
    };
  

    get getToppings() {
      return this._toppings;
    };
    get getSize() {
      return this._size;
    };
    get getStuffing() {
      return this._stuffing;
    };
    
  
    calculatePrice() {
      let breadPrice = Hamburger.SIZES[this.getSize].price;
      let stuffingPrice = Hamburger.STUFFINGS[this.getStuffing].price;
      let toppingPrice = this.getToppings.reduce((acc, topping) => acc + Hamburger.TOPPINGS[topping].price, 0);
      let totalPrice = breadPrice + stuffingPrice + toppingPrice;
      return totalPrice;
    };
    calculateCalories() {
      let breadCalories = Hamburger.SIZES[this.getSize].calories;
      let stuffingCalories = Hamburger.STUFFINGS[this.getStuffing].calories;
      let toppingCalories = this.getToppings.reduce((acc, topping) => acc + Hamburger.TOPPINGS[topping].calories, 0);
      let totalCalories = breadCalories + stuffingCalories + toppingCalories;
      return totalCalories;
    };
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  },
};

Hamburger.STUFFINGS = {
[Hamburger.STUFFING_CHEESE] : {
  price: 15,
  calories: 20,
},
[Hamburger.STUFFING_SALAD] : {
  price: 20,
  calories: 5,
},
[Hamburger.STUFFING_MEAT] : {
  price: 35,
  calories: 15,
},
};

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SAUCE] : {
    price: 15,
    calories: 5,
  },
  [Hamburger.TOPPING_SPICE] : {
    price: 10,
    calories: 0,
  },
};


const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());
console.log("Calories: ", hamburger.calculateCalories());


// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);