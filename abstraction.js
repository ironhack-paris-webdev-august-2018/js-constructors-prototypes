// compoundInterest
//   principal is how much you are borrowing (10000€)
//   rate      is the percent interest (0.1 for 10%)
//   n         is how many times per year you charge interest
//   years     is how many years you take to pay it off
function compoundInterest(principal, rate, n, years) {
  return principal * (1 + (rate/n)) ** (n * years);
}


// Example:
// Loan of 30k at 5% interest charged every month for 6 years
console.log( compoundInterest(30000, 0.05, 12, 3) );

for (var years = 3; years <= 10; years += 1) {
  var totalPayed = compoundInterest(30000, 0.05, 12, years);
  var extraPayment = totalPayed - 30000;

  // 5 years pays an extra €9999
  console.log(years + " years pays an extra €" + extraPayment);
}
