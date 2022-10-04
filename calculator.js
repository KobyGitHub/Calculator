window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  const loanAmount = document.getElementById("loan-amount")
  const loanYears = document.getElementById("loan-years")
  const loanRate = document.getElementById("loan-rate")
  //const cal = document.getElementById("calc-submit") 
  const newBalance = document.getElementById("monthly-payment")
  let amount = 5000
  let years = 5
  let rate = 5
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }



  function getCurrentUIValues() {
    return {
      amount: +(loanAmount.value),
      years: +(loanYears.value),
      rate: +(loanRate.value),
    }
  }


  function setupIntialValues() {
  
  loanAmount.value = amount
  loanYears.value = years
  loanRate.value = rate
  update();
   
  }



  function update() {
   const accValues = getCurrentUIValues();
   updateMonthly(calculateMonthlyPayment(accValues));
  }


  function calculateMonthlyPayment(values) {
    let P = loanAmount.value
    let i = Math.floor(loanYears.value * 12)
    let n = (loanRate.value / 100)  / 12

    let monthlyPayment = ((n * amount) / (1 - Math.pow((1 + n), -i))).toFixed(2)
    return monthlyPayment
    
  }

  function updateMonthly(monthly) {
   newBalance.innerText = "$" +monthly
  }
});