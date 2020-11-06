// Business Logic ---------------

function Pizza(topping, size) {
  this.topChoices = [];
  this.size = size;
  this.totalCost = 12;
  this.topping = topping;
}

let pizzaChoice = new Pizza("plain", "medium");

Pizza.prototype.addTopping = function() {
  if (this.topChoices.length <= 1 && this.topChoices[0] === "plain"){
    this.topChoices.shift();
    this.topChoices.push(this.topping);
    console.log(this.topChoices);
    return;
  }
  if (this.topChoices.length <= 1) {
    this.topChoices.push(this.topping);
    console.log(this.topChoices);
    return;
  }
}

Pizza.prototype.addPlain = function() {
  this.topChoices = [];
  pizzaChoice.topping = "plain";
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
  console.log(this.totalCost);
  return this.totalCost;
}


Pizza.prototype.resetCost = function() {
  this.totalCost = 12;
  this.topChoices = [];
  this.size = "medium";
  this.topping = "plain";
}


// UI Logic --------------------

$(document).ready(function() {
  $("#total-cost").text(0);
  $("button#plain").click(function(event) {
    event.preventDefault();
    pizzaChoice.addPlain();
    $("#toppings").text(pizzaChoice.topChoices[0]);
    pizzaChoice.topChoices = [];
    $("#toppings").show();
  });
  $("button#pepperoni").click(function(event) {
    event.preventDefault();
    pizzaChoice.topping = "pepperoni";
    pizzaChoice.addTopping();
    $("#toppings").text(pizzaChoice.topChoices + " ");
    $("#toppings").show();
  });
  $("button#sausage").click(function(event) {
    event.preventDefault();
    pizzaChoice.topping = "sausage";
    pizzaChoice.addTopping();
    $("#toppings").text(pizzaChoice.topChoices + " ");
    $("#toppings").show();
  });
  $("button#size-medium").click(function(event) {
    event.preventDefault();
    pizzaChoice.size = "medium";
    $("#size").text(pizzaChoice.size);
    $("#size").show();
  });
  $("button#size-large").click(function(event) {
    event.preventDefault();
    pizzaChoice.size = "large";
    $("#size").text(pizzaChoice.size);
    $("#size").show();
  });
  $("button#calculate").click(function(event) {
    event.preventDefault();
    pizzaChoice.calculateCost();
    $("#total-cost").text(pizzaChoice.totalCost);
  });
  $("button#reset").click(function(event) {
    event.preventDefault();
    pizzaChoice.resetCost();
    $("#total-cost").text(0);
    $("#toppings, #size").hide();
  });
});