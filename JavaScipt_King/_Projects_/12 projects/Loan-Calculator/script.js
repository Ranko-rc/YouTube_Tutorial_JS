function calculateLoan() {
    laonAmountValue = document.getElementById('loan-amount').value;

    interestRateValue = document.getElementById('interest-rate').value;

    monthsToPayValue = document.getElementById('months-to-pay').value;

    monthlyPayment = document.getElementById('monthly-payment').textContent = 0;




    interest = (laonAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
    document.getElementById('monthly-payment').textContent = interest.toFixed(2);

    monthlyPayment = (laonAmountValue / monthsToPayValue) + interest;
    document.getElementById('total-payment').textContent = monthlyPayment.toFixed(2);
}

calculateLoan();