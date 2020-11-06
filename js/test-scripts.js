function Pizza(topping, size) {
  this.topChoices = ["plain", "pepperoni", "sausage and pepper"];
  this.size = size;
  this.totalCost = 12;
}

let pizzaChoice = new Pizza("pepperoni", "large");


Pizza.prototype.calculateCost = function() {
  if (this.topChoices[1] === "pepperoni") {
    this.totalCost += 4;
  }
  if (this.size === "large") {
    this.totalCost += 4;
  }
  return this.totalCost;
}

pizzaChoice.calculateCost();

console.log(pizzaChoice.totalCost)

