function Pizza(topping, size) {
  this.topping = false;
  this.topChoice = topping;
  this.size = size;
  this.totalCost = 12;
}

let pizzaChoice = new Pizza("pepperoni", "large");


Pizza.prototype.calculateCost = function() {
  if (this.topChoice === "pepperoni") {
    this.totalCost += 4;
  }
  if (this.size === "large") {
    this.totalCost += 4;
  }
}

pizzaChoice.calculateCost();

console.log(pizzaChoice.totalCost)

