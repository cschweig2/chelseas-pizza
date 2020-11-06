function Pizza(topping, size) {
  this.topping = false;
  this.topChoice = topping;
  this.size = size;
  this.totalCost = 12;
}

let pepCost = 4;
let pizzaChoice = new Pizza("pepperoni", "medium");


Pizza.prototype.toppingChoice = function() {
  if (this.topChoice === "pepperoni") {
    this.totalCost += pepCost;
  }
}

pizzaChoice.toppingChoice();

console.log(pizzaChoice.totalCost)

