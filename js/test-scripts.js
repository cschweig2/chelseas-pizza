function Pizza(topping, size) {
  this.topChoices = [];
  this.size = size;
  this.totalCost = 12;
  this.topping = topping;
}

// ANCHOR topping options on UI: plain (no extra charge), pepperoni, and/or sausage
// ANCHOR pizza size options are medium (no extra charge) and large
let pizzaChoice = new Pizza("plain", "medium");

Pizza.prototype.addTopping = function() {
  this.topChoices.push(this.topping);
  return this.topChoices;
}

pizzaChoice.addTopping();

// pizzaChoice.topping = "pepperoni";

// pizzaChoice.addTopping();


Pizza.prototype.calculateCost = function() {
  for (i = 0, len = this.topChoices.length; i < len; i++) {
    if (this.topChoices[i] === "pepperoni") {
      this.totalCost += 4;
    }
    if (this.topChoices[i] === "sausage") {
      this.totalCost += 6;
    }
  }
  if (this.size === "large") {
    this.totalCost += 4;
  }
  return this.totalCost;
}


pizzaChoice.calculateCost();