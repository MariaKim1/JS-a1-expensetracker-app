// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:
// name: the account holders name, should be a string
// expenses: an array that should hold all of your expenses, can be empty from start
// income: an array that should hold all of your income, can be empty from start
// addExpenses: a function that vill add an expense to the expenses array
// addIncome: a function that vill add an income to the income array
// listAllExpenses: a function that should list all the expenses in the expenses array
// getSummary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances (income - expenses).

// TODO
// 1. put the name property in the object as the datatype string - DONE
// 2. create the menu and the different choices for the user - parseFloat/prompt - DONE
// 3. take the input from the user and store it (save it) in a variable
// 4. use the stored/saved variable to display the correct menu choice

// ======== ACCOUNT OBJECT - THE LOGIC / CALCULATIONS ========

const menuChoice = 1;
if (menuChoice === 1) {
    prompt("Add your monthly income after tax:");
    } else if (menuChoice === "2") {
        prompt("What was your expense? (food, rent, etc)\n");
    } else if (menuChoice === "3") {
        prompt("List of all expenses:\n");
    } else if (menuChoice === "4") {
        alert("Total balance:\n");
    }
const account = {
    // OBJECT SCOPE INSIDE HERE: 
    // name: the account holders name, should be a string
    name: "Maria",
    income: [1],
    expense: [2],
    
    addIncome: function(){
        const income = `Your monthly income after tax: ${income}`;
        return income; 
    },
    addExpenses: function(){
        const newExpense = `${expense}`;
        return newExpense;
    },
    listAllExpenses: function(){
        const list = `This months expenses: ${newExpense}`;
        return list;
    },
    getSummary: function(){
        const summary = `Income: ${addIncome}\nExpenses: ${listAllExpenses}\nLeft over this month: ${addIncome - newExpense}`;
        return summary;
    },
  };



  // ========= FUNCTION - THE MENU =============
  // I chose to do mymenufunction because it was neater and more compact. 

  
/* console.log(
  "Please select from the menu:\n1) Add income\n2) Add expense\n3)List all expenses\n4) See total balance"
); */

// ---------- First prompt menu -----------

  const menu = parseFloat(prompt(
        "START TRACKING YOUR EXPENCES!\nPlease select a nr from the menu:\n1) Add income\n2) Add expense\n3) List of all expenses\n4) See total balance"
        ));

 

//   TODO: store choices in a variable that has an exchangable value. Array? Manipulate the array? 
//const amount = parseFloat(prompt(th"How much was your expense?"));




//  console.log("Choice: " + choice);

    
 