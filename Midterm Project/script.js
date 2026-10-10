"use strict";

/*
  JavaScript Midterm
  Mini Expense Tracker

  Complete the application using the requirements
  provided in the exam instructions.
*/

// ------------------------------------
// 1. SELECT DOM ELEMENTS
// ------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  const expenseDescription = document.querySelector('#description');  // description input field
  const expenseAmount = document.querySelector('#amount');            // amount input field
  const expenseCategory = document.querySelector('#category');        // category dropdown
  const addExpenseButton = document.querySelector('#add-expense');    // Add Expense button
  const resetButton = document.querySelector('#reset');               // Reset button
  const messageDisplay = document.querySelector('#message');          // paragraph to display messages to the user
  const expenseList = document.querySelector('#expense-list');        // area to display existing expenses
  const expenseCount = document.querySelector('#expense-count');      // displays count of existing expenses
  const expenseTotal = document.querySelector('#total');              // displays sum of existing expenses
  const budgetStatus = document.querySelector('#budget-status');      // displays message indicating whether the user is under or over budget
  
  


// ------------------------------------
// 2. APPLICATION DATA
// ------------------------------------

// Create an empty array for expenses.
let expenses = [];

// Create a variable or constant for the budget.
const budget = 500.0;

// ------------------------------------
// 3. FUNCTIONS
// ------------------------------------

// Create a function for adding an expense.
function addExpense() {

  if(expenseDescription.value == '') {
    messageDisplay.textContent = "Please enter a description and try again.";
  } else if (expenseAmount.value <= 0 || isNaN(expenseAmount.value) || expenseAmount.value == '') {
    messageDisplay.textContent = "Please enter an amount of $0.01 or more and try again.";
  } else {
      let newExpense = {
      description: expenseDescription.value,
      amount: Number(expenseAmount.value),
      category: expenseCategory.value
    };
  
    expenses.push(newExpense);
    messageDisplay.textContent = `${newExpense.description} was successfully added to the expenses list!`
    
    // update all affected values and clear form for the next entry
    showExpenses();
    calculateTotal();
    updateStatus();
    resetForm();
  }
}

// Create a function for displaying expenses.
function showExpenses () {
  expenseList.innerHTML = '';

  if (expenses.length > 0) {
    for (const expense of expenses) {
      expenseList.innerHTML += 
      `<div class=expense-item>
        <div class=expense-description>${expense.description}</div>
        <div class=expense-amount>$${expense.amount.toFixed(2)}</div>
        <div class=expense-category>${expense.category}</div>
      </div>
      `
    }
  } else {
      expenseList.innerHTML += '<p>No expenses have been added yet.</p>'
  }
  
  expenseCount.textContent = `${expenses.length} Expenses`;
  
}

// Create a function for calculating the total.
function calculateTotal() {
  let total = 0;
  for (const expense of expenses) {
    total += expense.amount;
  }
  expenseTotal.textContent = `$${total.toFixed(2)}`;
  return total;
}

// Create a function for updating the budget status.
function updateStatus() {
  if (calculateTotal() > budget) {
    budgetStatus.textContent = "You are over budget.";
    budgetStatus.classList.add('over-budget');
    budgetStatus.classList.remove('under-budget');
  } else {
    budgetStatus.textContent = "You are under budget.";
    budgetStatus.classList.add('under-budget');
    budgetStatus.classList.remove('over-budget');
  }
}

// Create a function for resetting the application.
function resetApp() {
  expenses = [];
  messageDisplay.textContent = '';
  showExpenses();
  calculateTotal();
  updateStatus();
  resetForm();
}

// Resets the application.
function resetForm() {
  expenseDescription.value = '';
  expenseAmount.value = '';
  expenseCategory.value = 'Food';
}

// ------------------------------------
// 4. EVENT LISTENERS
// ------------------------------------

// Add an event listener to the Add Expense button.
addExpenseButton.addEventListener('click', addExpense);
// Add an event listener to the Reset button.
resetButton.addEventListener('click', resetApp);

})