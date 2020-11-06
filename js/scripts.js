function Pizza(topping, size) {
  this.topping = false;
  this.topChoice = topping;
  this.size = size;
  this.cost = 0;
}

let pizzaChoice = new Pizza("pepperoni", "medium");

Pizza.prototype.toppingChoice = function() {
  if (this.topChoice === "pepperoni") {
    this.totalCost += 4;
  }
  if (this.size === "large") {
    this.totalCost += 4;
  }
}

