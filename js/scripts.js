function Pizza(topping, size) {
  this.topChoices = topping;
  this.size = size;
  this.totalCost = 12;
}

let pizzaChoice = new Pizza("sausage and peppers", "medium");

Pizza.prototype.calculateCost = function() {
  if (this.topChoices === "pepperoni") {
    this.totalCost += 4;
  }
  if (this.topChoices === "sausage and peppers") {
    this.totalCost += 6;
  }
  if (this.size === "large") {
    this.totalCost += 4;
  }
  return this.totalCost;
}

pizzaChoice.calculateCost();
