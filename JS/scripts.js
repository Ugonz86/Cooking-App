var conversion = function(liquid) {
  return (liquid * 3.785);
};

var liquid = parseFloat(prompt("Enter the measurement in gallons: "));
var result = conversion(liquid);
alert(("One gallon equals ") + result.toFixed(1) + " liters!");
