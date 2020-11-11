class Pizza {

  constructor(size, topping) {
  this.topChoices = [];
  this.size = size;
  this.totalCost = 15;
  this.topping = topping;
  }

  addTopping() {
    if (this.topChoices.length < 2)
    this.topChoices.push(this.topping);
    return this.topChoices;
  }

  addPlain() {
    this.topChoices = [];
    pizzaChoice.topping = "plain";
    this.topChoices.push(this.topping);
    return this.topChoices;
  }

  calculateCost() {
    for (let i = 0, len = this.topChoices.length; i < len; i++) {
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

  resetCost() {
    this.totalCost = 15;
    this.topChoices = [];
    this.size = "medium";
  }

  deletePlain() {
    for (let i = 0, len = this.topChoices.length; i < len; i++) {
      if (this.topChoices[i] == "plain") {
          this.topChoices.splice(this.topChoices.indexOf("plain"), 1);
          return this.topChoices;
        }
      }
    return false;
  }

  deletePepperoni() {
    for (let i = 0, len = this.topChoices.length; i < len; i++) {
      if (this.topChoices[i] == "pepperoni") {
          this.topChoices.splice(this.topChoices.indexOf("pepperoni"), 1);
          return this.topChoices;
        }
      }
    return false;
  }

  deleteSausage() {
    for (let i = 0, len = this.topChoices.length; i < len; i++) {
      if (this.topChoices[i] == "sausage") {
        this.topChoices.splice(this.topChoices.indexOf("sausage"), 1);
          return this.topChoices;
        }
      }
    return false;
  }
  
};

let pizzaChoice = new Pizza("medium", "plain");


// UI Logic --------------------

function displayPizzaToppings(topChoices) {
  let toppingList = $("ul#toppings");
  let htmlForList = "";
  pizzaChoice.topChoices.forEach(function(topping) {
    htmlForList += "<li id=" + topping + ">" + topping + "</li>";
  });
  toppingList.html(htmlForList);
}

$(document).ready(function() {
  $("#total-cost").text(0);
  $("button#plain").click(function(event) {
    event.preventDefault();
    pizzaChoice.addPlain();
    displayPizzaToppings();
    $("#toppings").show();
    $("#delPlain").show();
    $("#delPepperoni, #delSausage, #warning1").hide();
  });
  $("button#delPlain").click(function(event){
    event.preventDefault();
    pizzaChoice.deletePlain();
    displayPizzaToppings();
    $("#delPlain").hide();
  });
  $("button#pepperoni").click(function(event) {
    event.preventDefault();
    pizzaChoice.topping = "pepperoni";
    pizzaChoice.addTopping();
    pizzaChoice.deletePlain();
    displayPizzaToppings();
    $("#toppings").show();
    $("#delPlain, #warning1").hide();
    $("#delPepperoni").show();
  });
  $("button#delPepperoni").click(function(event){
    event.preventDefault();
    pizzaChoice.deletePepperoni();
    displayPizzaToppings();
    $("#delPepperoni").hide();
  });
  $("button#sausage").click(function(event) {
    event.preventDefault();
    pizzaChoice.topping = "sausage";
    pizzaChoice.addTopping();
    pizzaChoice.deletePlain();
    displayPizzaToppings();
    $("#toppings").show();
    $("#delPlain, #warning1").hide();
    $("#delSausage").show();
  });
  $("button#delSausage").click(function(event){
    event.preventDefault();
    pizzaChoice.deleteSausage();
    displayPizzaToppings();
    $("#delSausage").hide();
  });
  $("button#size-medium").click(function(event) {
    event.preventDefault();
    pizzaChoice.size = "medium";
    $("#size").text(pizzaChoice.size);
    $("#size").show();
    $("#warning2").hide();
  });
  $("button#size-large").click(function(event) {
    event.preventDefault();
    pizzaChoice.size = "large";
    $("#size").text(pizzaChoice.size);
    $("#size").show();
    $("#warning2").hide();
  });
  $("button#calculate").click(function(event) {
    event.preventDefault();
    pizzaChoice.calculateCost();
    $("#total-cost").text(pizzaChoice.totalCost);
    pizzaChoice.resetCost();
  });
  $("button#reset").click(function(event) {
    event.preventDefault();
    pizzaChoice.resetCost();
    $("#total-cost").text(0);
    $("#toppings, #size").hide();
    $("#delPlain, #delPepperoni, #delSausage").hide();
  });
});

