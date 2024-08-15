function convertToCelsius(temp) {
    console.log(((temp - 32) * (5 / 9)).toFixed(1));
}

function convertToFahrenheit(temp) {
    console.log((temp * (9 / 5) + 32).toFixed(1));
}

convertToCelsius(32);
convertToCelsius(64);
convertToCelsius(100);

convertToFahrenheit(0);
convertToFahrenheit(20);