// window.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById("calc-form");
  
//   if (form) {
//     setupIntialValues();
//     form.addEventListener("submit", function(e) {
//       e.preventDefault();
//       update();
//     });
//   }
// });


// //const cal = document.getElementById("calc-submit") 



// function getCurrentUIValues() {
//   const loanAmount = document.getElementById("loan-amount")
//   const loanYears = document.getElementById("loan-years")
//   const loanRate = document.getElementById("loan-rate")
//   return {
//     amount: +(loanAmount.value),
//     years: +(loanYears.value),
//     rate: +(loanRate.value),
//   }
// }


// function setupIntialValues() {
//   const loanAmount = document.getElementById("loan-amount")
//   const loanYears = document.getElementById("loan-years")
//   const loanRate = document.getElementById("loan-rate")
//   let amount = 5000
//   let years = 5
//   let rate = 5
// loanAmount.value = amount
// loanYears.value = years
// loanRate.value = rate
// update();
  
// }



// function update() {
//   const accValues = getCurrentUIValues();
//   updateMonthly(calculateMonthlyPayment(accValues));
// }


// function calculateMonthlyPayment(values) {
//   let P = loanAmount.value
//   let i = Math.floor(loanYears.value * 12)
//   let n = (loanRate.value / 100)  / 12

//   let monthlyPayment = ((n * amount) / (1 - Math.pow((1 + n), -i))).toFixed(2)
//   return monthlyPayment
  
// }

// function updateMonthly(monthly) {
//   const newBalance = document.getElementById("monthly-payment")
//   newBalance.innerText = "$" +monthly
// }

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const values  = { amount: 10000, years: 10, rate: 4.5 };
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
  update();
}

function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}

function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}
