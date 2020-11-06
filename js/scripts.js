// Business Logic ---------------

function Pizza(topping, size) {
  this.topChoices = [];
  this.size = size;
  this.totalCost = 12;
  this.topping = topping;
}

let pizzaChoice = new Pizza("plain", "medium");

Pizza.prototype.addTopping = function() {
  if (this.topChoices.length <= 2)
  this.topChoices.push(this.topping);
  console.log(this.topChoices);
  return;
}

pizzaChoice.addTopping();

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
  console.log(this.totalCost);
  return this.totalCost;
}




// UI Logic --------------------

$(document).ready(function() {
  $("button#plain").click(function(event) {
    event.preventDefault();
    pizzaChoice.topping = "plain";
    pizzaChoice.addTopping();
  });
  $("button#pepperoni").click(function(event) {
    event.preventDefault();
    pizzaChoice.topping = "pepperoni";
    pizzaChoice.addTopping();
  });
  $("button#sausage").click(function(event) {
    event.preventDefault();
    pizzaChoice.topping = "sausage";
    pizzaChoice.addTopping();
  });
  $("button#size-medium").click(function(event) {
    event.preventDefault();
    pizzaChoice.size = "medium";
  });
  $("button#size-large").click(function(event) {
    event.preventDefault();
    pizzaChoice.size = "large";
  });
  $("button#calculate").click(function(event) {
    event.preventDefault();
    pizzaChoice.calculateCost();
    $("#total-cost").text(this.totalCost);
  });
});