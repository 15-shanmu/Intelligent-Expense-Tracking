document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalAmount = document.getElementById('total-amount');
    
    let expenses = [];
    const exchangeRate = 83; // Example exchange rate: 1 USD = 83 INR

    function updateTotal() {
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        const totalInRupees = total * exchangeRate;
        totalAmount.textContent = `₹${totalInRupees.toFixed(2)}`;
    }

    function addExpenseToList(description, amount, category) {
        const amountInRupees = amount * exchangeRate;
        const li = document.createElement('li');
        li.textContent = `${description} - ₹${amountInRupees.toFixed(2)} [${category}]`;
        expenseList.appendChild(li);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const category = document.getElementById('category').value;

        if (description && amount && !isNaN(amount)) {
            expenses.push({ description, amount, category });
            addExpenseToList(description, amount, category);
            updateTotal();
            
            // Clear form fields after submission
            form.reset();
        }
    });
});
    
