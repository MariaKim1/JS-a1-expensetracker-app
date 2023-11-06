/*
The app should have two main parts:
THE ACCOUNT OBJECT SHOULD HAVE THE FOLLOWING PROPERTIES:
name: the account holders name, should be a string
expenses: an array that should hold all of your expenses, can be empty from start
income: an array that should hold all of your income, can be empty from start
addExpenses: a function that vill add an expense to the expenses array
addIncome: a function that vill add an income to the income array
listAllExpenses: a function that should list all the expenses in the expenses array
getSummary: a function that should summarize your total balances. It should show your total
income, your total expenses and also calculate your current balances (income - expenses).

The menu() FUNCTION should display the menu with different choices for the user
depending on what the user selects from the menu you should call on the correct method or
property from the account object. You can use a switch or if/else statement for your different
menu choices. Please motivate you choice in a comment.
Remember to handle potential errors. A user should not be able to add an empty input or
something that is not valid.
*/

// TODO
// 1. put the name property in the object as the datatype string - DONE
// 2. create the menu and the different choices for the user - parseFloat/prompt - DONE
// 3. take the input from the user and store it (save it) in a variable
// 4. use the stored/saved variable to display the correct menu choice

// TODO: store choices in a variable that has an exchangable value. Array? Manipulate the array? 

// ---------- First prompt menu -----------



// ========= OBJECT ============
const account = {
    name: "Maria",
    expenses: 0,
    income: 0,

    addExpenses: function () {
        this.expenses.push();
    }
    addIncome: function () {
        this.income.push();
    }
    listAllExpenses: function () {
        alert(this.expences);
    } 
}







//  
//const amount = parseFloat(prompt(th"How much was your expense?"));

// ========= Function to hold if/else statements ============
// if/else menuChoise === 1 etc. 
// prompt/alert result of manuChoice. 
function menu() {
    const menuChoice = parseFloat(prompt(
        "START TRACKING YOUR EXPENCES!\nPlease select a nr from the menu:\n1) Add income\n2) Add expense\n3) List of all expenses\n4) See total balance"
        ));

    if (menuChoice === 1) {
        prompt("Add your monthly income after tax:");
        } else if (menuChoice === "2") {
            prompt("What was your expense? (food, rent, etc)\n");
        } else if (menuChoice === "3") {
            prompt("List of all expenses:\n");
        } else if (menuChoice === "4") {
            alert("Total balance:\n");
        }
};