var conversion = function(liquid) {
  return (liquid * 3.785);
};

var liquid = parseFloat(prompt("Enter the measurement in gallons: "));
var result = conversion(liquid);
alert(("It equals ") + result.toFixed(1) + " liters!");

var conversionTwo = function(weight) {
  return (weight / 16);
};

var weight = parseFloat(prompt("Enter the weight in ounces"));
var result = conversionTwo(weight);
alert(("It weighs ") + result.toFixed(1) + " pounds!");
