# Chelsea's SFNJ Sizzle Apizza Pizza Website

#### Code Review for Epicodus, Last Updated 11.11.2020

#### **By Chelsea Becker**

## Description

_This application allows users to build their preferred pizza based on size and topping selection. The user will then be given a total cost for their pizza. There is no extra charge for choosing plain (no toppings) or choosing the medium size pizza._

## Setup/Installation Requirements
### View Online
1. _Open the webpage at https://cschweig2.github.io/chelseas-pizza._
2. _Select your toppings: plain, pepperoni, sausage, or you may choose both pepperoni and sausage._<br>
2a. _You may delete selected toppings by clicking the "remove (topping)" buttons._<br>
3. _Select your pizza size: medium or large._
4. _Once the topping and size selections are made, click the "Calculate Cost" button below._
5. _You will find your total pizza cost below the "Calculate Cost" button._
6. _Click "Reset Pizza Order" to clear order options._

### View locally
1. _Open web browser and go to https://github.com/cschweig2/chelseas-pizza_
2. _After clicking the green "code" button, you can copy the URL for the repository._
3. _Open a terminal window, such as Command Prompt or Git Bash._<br>
  3a. _Type in this command: "git clone", followed by the URL you just copied. The full command should look like this: "git clone https://github.com/cschweig2/chelseas-pizza.git"._
4. _You may view the website displaying the application by clicking the index.html file or view the code on your favorite text editor, such as Visual Studio Code._

## Known Bugs

1. _If you click the "Calculate Cost" button twice, it will reset the cost to the base cost._

## Test Specs

Describe: calculateCost();

Test: "It detects if the user chose pepperoni as the topping."<br>
Expect(pizzaChoice.calculateCost()).toEqual("pepperoni"); <br>

Test: "It will add $4 to the total cost of the pizza if the user chooses 'pepporoni' as a topping."<br>
Expect(pizzaChoice.calculateCost()).toEqual(16);<br>

Test: "It will add $4 to the total cost of the pizza if the user chooses large instead of medium." <br>
Expect(pizzaChoice.calculateCost()).toEqual(16);<br>

Test: "It will add $6 to the total cost of the pizza if the user chooses 'sausage' as a topping." <br>
Expect(pizzaChoice.calculateCost()).toEqual(18);<br>

Describe: addTopping();<br>

Test: "It adds the user's chosen topping to the array of topping choices."<br>
Expect(pizzaChoice.addTopping()).toEqual(["pepperoni", "sausage"]);<br>

Test: "It will only allow 1 instance of each topping in the array of topping choices."<br>
Expect(pizzaChoice.addTopping()).toEqual(["pepperoni", "sausage"]);<br>

Describe: resetCost();<br>

Test: "It resets the pizza order and returns to default options with a total of $15."<br>
Expect(pizzaChoice.resetCost()).toEqual(["plain", "medium"]);<br>

Describe: addPlain();<br>

Test: "It will remove the other topping options and replace them with 'plain'."<br>
Expect(pizzaChoice.addPlain()).toEqual(["plain"]);

Describe: deletePlain();<br>

Test: "It will remove the index where 'plain' is located from the topChoices[] array."<br>
Expect(pizzaChoice.deletePlain()).toEqual([]);<br>

Describe: deletePepperoni();<br>

Test: "It will remove the index where 'pepperoni' is located from the topChoices[] array."<br>
Expect(pizzaChoice.deletePepperoni()).toEqual([]);<br>

Describe: deleteSausage();<br>

Test: "It will remove the index where 'sausage' is located from the topChoices[] array."<br>
Expect(pizzaChoice.deleteSausage()).toEqual([]);<br>

## Support and contact details

_If you run into any issues, you can contact the creator at cschweig2@gmail.com, or make contributions to the code on GitHub via forking and creating a new branch._

## Technologies Used

_VS Code_ <br />
_HTML_ <br />
_CSS_ <br />
_Bootstrap_ <br />
_JavaScript_ <br />
_JQuery_

## Legal

*This software is licensed under the MIT license.*

Copyright (c) 2020 **Chelsea Becker**