# Chelsea's SFNJ Sizzle Apizza Pizza Website

#### Code Review for Epicodus, Last Updated 11.06.2020

#### **By Chelsea Becker**

## Description

_This application allows users to build their preferred pizza based on size and topping selection. The user will then be given a total cost for their pizza._

## Setup/Installation Requirements
### View Online
1. _Open the webpage at https://cschweig2.github.io/chelseas-pizza._
2. _Begin building your pizza_
** more info here..

### View locally (on computer)
1. _Open web browser and go to https://github.com/cschweig2/chelseas-pizza_
2. _After clicking the green "code" button, you can copy the URL for the repository._
3. _Open a terminal window, such as Command Prompt or Git Bash
  3a. Type in this command: "git clone", followed by the URL you just copied. The full command should look like this: "git clone https://github.com/cschweig2/chelseas-pizza"._
4. _You may view the website displaying the application by clicking the index.html file or view the code on your favorite text editor, such as Visual Studio Code._

## Known Bugs

_There are no known bugs at this time._

## Test Specs

Describe: calculateCost();

Test: "It detects if the user chose pepperoni as the topping."<br>
Expect(pizzaChoice.calculateCost()).toEqual("pepperoni"); <br>

Test: "It will add $4 to the total cost of the pizza if the user chooses "pepporoni" as a topping."<br>
Expect(pizzaChoice.calculateCost()).toEqual(16);<br>

Test: "It will add $4 to the total cost of the pizza if the user chooses large instead of medium." <br>
Expect(pizzaChoice.calculateCost()).toEqual(16);<br>

Test: "It will add $6 to the total cost of the pizza if the user chooses "sausage and peppers" as a topping." <br>
Expect(pizzaChoice.calculateCost()).toEqual(18);<br>







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