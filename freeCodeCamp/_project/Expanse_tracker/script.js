const balance = document.getElementById('balance');
const incomeAmmount = document.getElementById('income-ammount');
const expensesAmmount = document.getElementById('expenses-ammount');
const transactionList = document.getElementById('transaction-list');
const transactionForm = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');

let transactions =JSON.parse(localStorage.getItem('transactions')) || [];

transactionForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (description !== '' && !isNaN(amount)) {
        const transaction = {
            id: Date.now(),
            description: description,
            amount: amount
        };

        transactions.push(transaction);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        updateUI();
        transactionForm.reset();
    }
});

function updateUI() {
    transactionList.innerHTML = '';
    let income = 0;
    let expenses = 0;

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        const sign = transaction.amount < 0 ? '-' : '+';
        listItem.innerHTML = `
            <span>${transaction.description}</span>
            <span>${sign}${formatCurrency(Math.abs(transaction.amount))}</span>
            <button onclick="removeTransaction(${transaction.id})">x</button>
        `;
        transactionList.appendChild(listItem);

        if (transaction.amount > 0) {
            income += transaction.amount;
        } else {
            expenses += Math.abs(transaction.amount);
        }
    });

    incomeAmmount.textContent = formatCurrency(income);
    expensesAmmount.textContent = formatCurrency(expenses);
    balance.textContent = formatCurrency(income - expenses);
}

function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number);
}

function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    updateUI();
}

updateUI();