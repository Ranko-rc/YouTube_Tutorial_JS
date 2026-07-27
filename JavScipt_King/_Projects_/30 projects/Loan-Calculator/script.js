function calculateLoan() {

    const loanAmountValue =  document.getElementById("loan-amount").value
    console.log(loanAmountValue);

    const interestRateValue = document.getElementById("interest-rate").value
    console.log(interestRateValue);

    const mounthToPayValue = document.getElementById("mounth-to-pay").value
    console.log(mounthToPayValue);


    interest = (loanAmountValue * (interestRateValue * 0.01)) /  mounthToPayValue;

    monthlyPayment= (loanAmountValue /  mounthToPayValue + interest);
    resultMP = Math.floor(monthlyPayment * 10) /10;


    // Výpis měsíční splátky
    document.getElementById("payment").innerHTML = `Monthly payment: ${resultMP}`;


}
