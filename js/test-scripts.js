class Pizza {

  constructor(size, topping) {
  this.topChoices = [];
  this.size = size;
  this.totalCost = 15;
  this.topping = topping;
  }

  addTopping() {
    if (this.topChoices.length <= 2)
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
          return true;
        }
      }
    return false;
  }

  deletePepperoni() {
    for (let i = 0, len = this.topChoices.length; i < len; i++) {
      if (this.topChoices[i] == "pepperoni") {
          this.topChoices.splice(this.topChoices.indexOf("pepperoni"), 1);
          return true;
        }
      }
    return false;
  }

  deleteSausage() {
    for (let i = 0, len = this.topChoices.length; i < len; i++) {
      if (this.topChoices[i] == "sausage") {
        this.topChoices.splice(this.topChoices.indexOf("sausage"), 1);
          return true;
        }
      }
    return false;
  }
  
};


let pizzaChoice = new Pizza("medium", "plain");
