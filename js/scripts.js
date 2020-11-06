function Pizza(topping, size) {
  this.topChoices = topping;
  this.size = size;
  this.totalCost = 12;
}

let pizzaChoice = new Pizza("sausage", "medium");

Pizza.prototype.addTopping = function() {
  this.topChoices.push(this.topping);
  return this.topChoices;
}

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
