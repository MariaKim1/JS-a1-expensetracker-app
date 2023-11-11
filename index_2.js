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
// 3. take the input from the  user and store it (save it) in a variable
// 4. use the stored/saved variable to display the correct menu choice

// TODO: store choices in a variable that has an exchangable value. Array? Manipulate the array? 


//___________________ coaching med Helena   _____________________

// ========= OBJECT ============
const accountObject = {
    name: "Maria",
    expenses: [],
    incomes: [],
     
    addIncomes: function () {
        // ((vill du bara ha tex amount för income då du behöver du inte spara som ett objekt!))
        // Vill ge möjlighet till att räkna med flera inkomster så då gör jag som med expenses
        // och skapar 2 input types och sparar/pushar dem som ett objekt.
        // 1. skapa en variabel för att ta emot och spara input av INKOMST TYP. 
        const incomeType = prompt("What type of income?");
        // 2. sen skapar jag en variabel för att ta emot SUMMAN AV INKOMSTEN och spara inputen
        const incomeAmount = parseFloat(prompt("Please add amount of this icome:"));

        // 3. spara som ett income-object med två properties.
        // 4. pusha detta för att läggas till i min incomes-array = lista på olika inkomster.
        this.incomes.push({incomeType, incomeAmount});
        // [2000, 10000, ]
  
        // 5. kalla på menyn
        menu();

        /*------------------------------------------------
        // ===== INPUT VALIDATION - inspo? ======
            if (name.value === "" || Number(amount.value) === 0) 
                return alert("Incorrect Input"); 
            if (Number(amount.value) <= 0)  
                return alert( 
                    "Incorrect amount! can't add negative"
                ); 
        --------------------------------------------------*/
        return this.incomes;
    },


    addExpenses: function () {
        // 1. först vill du ta emot vilken typ av expense och spara inputen någonstans
        const expenseType = prompt("What type of expense?");
        // 2. sen vill du ta emot summan för expense och spara inputen
        const expenseAmount = parseFloat(prompt("Please add amount of this expense:"));
        // 3. du vill spara expense som ett objekt som har två properties.
        // Genom att använda ({ }) så skapar du ett objekt
        // 4. du vill lägga till expense objektet till din expenses array
        this.expenses.push({expenseType, expenseAmount });
        // [{"food", 1000}, {"rent", 6000}, {"gas", 1000}]
    
        // en lite debugger bara för att kolla att det faktiskt funka
        console.log(this.expenses);
    
        // 5. kalla på menyn igen
        menu();
        return this.expenses;
    },


    listAllIncomes: function () {
        let messageIncomes = "";
        this.incomes.forEach(function (income) {
          messageIncomes +=
            "INCOME: " +
            income.incomeType +
            "   AMOUNT: " +
            income.incomeAmount +
            "\n";
        });
  
        alert(messageIncomes);
    
        menu();
        return messageIncomes;
    },

    listAllExpenses: function () {
        // *** Hur får jag till en alert som visar en lista på alla loggade/sparade expenses? 
        // Jag behöver kopla min alert till de sparade expenses (de objekt) som finns i min expenses array.
        // Jag behöver skapa en lista av dessa som ska visas i min alert. 
        // ** Loopa igenom expenses-arrayen mha en funktion i en forEach-funktion för att skapa en lista att visa i en alert
        // 1. skapa en variabel (message) som kan hålla en string - dvs. presentera listan av min array      
        let messageExpenses = "";
        // 2. skapa en funktion i listAllExpenses-funktionen för att "hämta och presentera/lista" de values som blivit sparade i min expenses-array
        // 3. döp parametern (expense) till nåt som representerar en av det du har i din expenses array
        // 4. Använda min list-variabel (message) för att skapa funktionen som ska lista ett expense-objekt.  
        // underförstått så vet JS att expense är ett objekt den vet för att expenses är en array med objekt och vi behöver då inte använda {}
        this.expenses.forEach(function (expense) {
        // här börjar loopen
        // 5. för varje expense i expenses arrayen vill vi lista innehållet, alltså typen och summan
            messageExpenses +=
            "EXPENSE: " +
            expense.expenseType +
            "   AMOUNT: " +
            expense.expenseAmount +
            "\n";
            //alert()
            // kan inte ha alert inuti loopen för då får vi flera alerts på rad
        });

        // 6. vi vill visa det här i en alert
        alert(messageExpenses);
    
        // 7. tillbaka till menyn
        menu();
        //alert(this.expenses);
        // I need to be able to store NEW VALUES that the user put into the prompt.
        // Could I do that by adding expenses (what and how much) to two separet arrays and then for-loop them into a two column list??
        return messageExpenses;
    },

        // ======= KIKA HÄR!!! ========= 
        // HUR RÄKNAR JAG IHOP?
    getSummary: function () {
        // träna på att skriva en liten plan på vilka steg du tror att du behöver göra i funktionen
        // I getSummary vill jag göra en kalkylering/addering: getSummary = Alla incomeAmount - alla expensesAmout
        // Hur adderar jag?
        // 1. skapa en message variabel som kan hålla funktionen som skapar listan (dvs. hämtar alla amount values och adderar dem)
        // let messageSummary = "";
        
        // 1. skapa en variabel som adderar alla incomes (sumIncomes) 
        //this.sumIncomes.forEach(function (inAmount) {
        // 2. skapa en variabel som adderar/holds alla expenses (semExpenses)
        //--- let sumIncomes = (this.incomesAmount.length);
        //--- let sumExpenses = (this.expensesAmount.length);
        let sumIncomes = 0;
        let sumExpenses = 0;

        for (let i = 0; i < this.incomeAmount; i++) {
            sumIncomes += this.incomesAmount[i];
        }

        for (let i = 0; i < this.expenseAmount; i++) {
            sumExpenses += this.expenseAmount[i];
        }
        //I cannot get this right...what does the i stand for?? - look up!

        /*for (let i = 0; i < this.expenses.length; i++) {
            sumExpenses += this.expenses[i];
        }*/
        // eller behöver jag specificera this.expenseAmount??
        // 3. skapa en function? / `en sån här` som sparar en kalkylering av sumIncomes - sumExpenses
        // --- this.sumCalc.push[sumIncomes - sumExpenses];
        const sumCalc = sumIncomes - sumExpenses;
        let messageSummary = `The total amount left is: ${sumCalc}kr`;

        // 4. skicka ut den här kalkyleringen via ett messageSummary
        alert(messageSummary);
  
        menu();
        return this.sumCalc;
    },
};
  


  
  // ========= Function to hold if/else statements ============
  // if/else menuChoise === 1 etc.
  // prompt/alert result of manuChoice.
function menu() {
    // parseFloat gör så att vi kan ta emot ett nummer istället för en sträng. Prompt tar by default emot allt som en sträng
    const menuChoice = parseFloat(prompt(
        "START TRACKING YOUR EXPENSES!\nPlease select a nr from the menu:\n1) Add income\n2) Add expense\n3) List of all incomes\n4) List of all expenses\n5) See summary"
      ));
  
    if (menuChoice === 1) {
        accountObject.addIncomes();
        //  prompt(accountObject.incomes);
        //  prompt("Add an income (after tax):");
        // Need to store this in a variable to be able to reuse it in a calculation later.
    } else if (menuChoice === 2) {
        accountObject.addExpenses();
        // account.addExpenses();
        // account.expenceWhat(prompt("What was your expense? (food, rent, etc)\n"));
        //account.expenceHowMuch(prompt("How much was this expence on XX?"));
  
        // Need to store both these values in different variable to be able to reuse it in an alert "List of all expences" - a list of two columns.
        // Can I use the for Loop here somehow?
    } else if (menuChoice === 3) {
        accountObject.listAllIncomes();
        // alert("List of all expenses:\n");
        // alert: "List of all expenses" - a list of two columns.
        // Can I stor this in the object? shall it be a function? How do I call it/make this code relate to the account-object?
    } else if (menuChoice === 4) {
        accountObject.listAllExpenses();
    } else if (menuChoice === 5) {
        accountObject.getSummary();
    }
};
  
  
menu();






  // ---------- First prompt menu -----------


/*
// ========= OBJECT ============
const account = {
    name: "Maria",
    expenseWhat: [],
    expenceHowMuch: [],
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
            account.expenceWhat(prompt("What was your expense? (food, rent, etc)\n"));
            account.expenceHowMuch(prompt("How much was this expence on XX?"));
        
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


*/