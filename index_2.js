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
    expenses: [],
    income: [],

    addExpences: function () {
        this.expenses.push();
// push to add something to this variable... what are my thoughts exactly..!?!
    },
    addIncome: function () {
        this.income.push();
    },
    listAllExpenses: function () {
        alert(this.expences);
// I need to be able to store NEW VALUES that the user put into the prompt. 
// Could I do that by adding expenses (what and how much) to two separet arrays and then for-loop them into a two column list??
    }, 
}



//const amount = parseFloat(prompt(th"How much was your expense?"));

// ========= Function to hold if/else statements ============
// if/else menuChoise === 1 etc. 
// prompt/alert result of manuChoice. 
function menu() {
    const menuChoice = parseFloat(prompt(
        "START TRACKING YOUR EXPENCES!\nPlease select a nr from the menu:\n1) Add income\n2) Add expense\n3) List of all expenses\n4) See total balance"
        ));

    if (menuChoice === "1") {
        prompt("Add your monthly income after tax:");
// Need to store this in a variable to be able to reuse it in a calculation later.
        } else if (menuChoice === "2") {
            prompt("What was your expense? (food, rent, etc)\n");
            prompt("How much was this expence on XX?");
// Need to store both these values in different variable to be able to reuse it in an alert "List of all expences" - a list of two columns.
// Can I use the for Loop here somehow?
        } else if (menuChoice === "3") {
            alert("List of all expenses:\n");
// alert: "List of all expences" - a list of two columns.
// Can I stor this in the object? shall it be a function? How do I call it/make this code relate to the account-object?
        } else if (menuChoice === "4") {
            alert("Total balance:\n");
        }
};