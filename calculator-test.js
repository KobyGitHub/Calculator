
it('should calculate the monthly rate correctly', function () {
  const accValues = getCurrentUIValues();
  expect(calculateMonthlyPayment(accValues)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
