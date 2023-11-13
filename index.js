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
        // och skapar 2 input types och sparar/pushar dem som ETT objekt.
        // 1. skapa en variabel för att ta emot och spara input av INKOMST TYP. 
        const incomeType = prompt("What type of income?");
        // 2. sen skapar jag en variabel för att ta emot SUMMAN AV INKOMSTEN och spara inputen
        const incomeAmount = parseFloat(prompt("Please add amount of this icome:"));

        // 3. spara som ett income-object med två properties.
        // 4. pusha detta för att läggas till i min incomes-array = lista på olika inkomster.
        // LÄGGA DETTA I EN IF/ELSE? this.incomes.push({incomeType, incomeAmount});
        // [2000, 10000, ]
  
        // ===== INPUT VALIDATION ======
            
        if (!isNaN(incomeAmount)) {
        // if (inte-är-ickenummer = nummer)
        // if incomeAmount är ett nummer run this code:
            this.incomes.push({incomeType, incomeAmount});
        } else {
        // if not/else, ge en alert och försök igen.
            alert("Incorrect input. Please enter a valid number.");
            this.addIncomes();
        }
        
        // 5. kalla på menyn
        menu();

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
        // this.expenses.push({expenseType, expenseAmount });
        // [{"food", 1000}, {"rent", 6000}, {"gas", 1000}]
    
        // ===== INPUT VALIDATION ======
       
        if (!isNaN(expenseAmount)) {
            // if (inte-är-NotaNumber = nummer)
            // if incomeAmount är ett nummer run this code:
                this.expenses.push({expenseType, expenseAmount});
            } else {
            // if not/else, ge en alert och försök igen.
                alert("Incorrect input. Please enter a valid number.");
                this.addExpenses();
            }
            
        // 5. kalla på menyn igen
        menu();
        return this.expenses;
    },


    listAllIncomes: function () {
        // Samma tänk som nedan listAllExpenses
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
        return messageExpenses;
    },

    getSummary: function () {
        // träna på att skriva en liten plan på vilka steg du tror att du behöver göra i funktionen
        // I getSummary vill jag göra en kalkylering/addering: getSummary = Alla incomeAmount - alla expensesAmout
        // Hur adderar jag? i en for loop
        // 1. skapa en message variabel som kan hålla funktionen som skapar listan (dvs. hämtar alla amount values och adderar dem)
        // let messageSummary = "";
        
    
        // 1. skapa en variabel som kan HÅLLA de ADDERADE VÄRDENA av expenses/incomes (sumExpenses)
        let sumIncomes = 0;
        let sumExpenses = 0;

        // 2. skapa en funktion/ngt som kan gå igenom min variabel av incomes och expenses och sendan spara dem i variablerna sumIncome/sumExpenses
        // for-loop för att addera. DET HÄR VAR SVÅRT!! Behöver bryta ner för att förstå. Såhär blev det tillslut:
        // let i ==> variabel, loop counter
        // i < this.incomes.length; ==> The condition - Betyder loopa genom hela längden på incomes / loopa så länge det här är true. 
        // i++ ==> gå igenom loopen genom att öka med 1. 
        // sumIncomes += this.incomes[i].incomeAmount; ==> så länge for loopens condition är true, så kör den här koden.
        // sumIncomes += ==> "är samma som" (det som kommer efter = )
        // this.incomes[i].incomeAmount; ==> vajrje loop/iteration tittar efter värdet incomeAmount. Detta gör att jag kan komma åt just incomeAmount i incomes och spara det i sumIncomes.
        for (let i = 0; i < this.incomes.length; i++) {
            sumIncomes += this.incomes[i].incomeAmount;
        }

        for (let i = 0; i < this.expenses.length; i++) {
            sumExpenses += this.expenses[i].expenseAmount;
        }
    
        // 3. använda variablerna för atat få e slutsumma (sumCalculation)
        let sumCalculation = sumIncomes - sumExpenses;
        // 4. SKapa ett meddelande som presenterar variabeln sumCalculation
        let messageSummary = `The total amount left is: ${sumCalculation}kr\nYour total income was: ${sumIncomes}kr\nYour total expenses was: ${sumExpenses}kr`;

        // 5. skicka ut den här kalkyleringen via ett messageSummary
        alert(messageSummary);
  
        menu();
        return sumCalculation;
    },
};
  


  
  // ========= Function to hold if/else statements ============
  // if/else menuChoise === 1 etc.
  // prompt/alert result of manuChoice.
  // I CHOSE TO USE IF/ELSE STATEMENT BCS IT WAS THE MOSTE COMPACT CHOICE BETWEEN IF/ELSE AND SWITCH.
  // IT GAVE ME A GOOD OVERVIEW OF THE CODE AND I ALSO USED IT BEFORE IN THE TIP CALCULATOR WHICH I THOUGH  
  // SEEMED SIMILAR TO THIS ASSIGNMENT. ALSO THE FLOW OF SAYING "IF" AND "ELSE" ALSO HELPES ME UNDERSTAND THE FLOW AND THE LOGIC.

function menu() {
    // parseFloat gör så att vi kan ta emot ett nummer istället för en sträng. Prompt tar by default emot allt som en sträng
    const menuChoice = parseFloat(prompt(
        "START TRACKING YOUR EXPENSES!\nPlease select a nr from the menu:\n1) Add income\n2) Add expense\n3) List of all incomes\n4) List of all expenses\n5) See summary"
      ));
  
    if (menuChoice === 1) {
        accountObject.addIncomes();
    } else if (menuChoice === 2) {
        accountObject.addExpenses();
    } else if (menuChoice === 3) {
        accountObject.listAllIncomes();
    } else if (menuChoice === 4) {
        accountObject.listAllExpenses();
    } else if (menuChoice === 5) {
        accountObject.getSummary();
    }
};
  
  
menu();

