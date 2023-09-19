const convertToCelsius = function(temp) {
  return Math.round(((temp - 32) / 1.8) * 10) / 10
};

const convertToFahrenheit = function(temp) {
  return Math.round(((temp * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
