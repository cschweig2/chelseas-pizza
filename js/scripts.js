function Pizza(topping, size) {
  this.topping = false;
  this.topChoice = topping;
  this.size = size;
  this.cost = 0;
}

let toppingPep = 4;
let pizzaChoice = new Pizza("pepperoni", "medium");

Pizza.prototype.toppingChoice = function() {
  if (this.topChoice === "pepperoni") {
    console.log("pepperoni");
  }
}