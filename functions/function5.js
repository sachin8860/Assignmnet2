function celsiusToFahrenheit(c) {
    console.log(c + "° Celsius is = " + ((c * 9 / 5) + 32) + "°F");
}
function fahrenheitToCelsius(f)
{
    console.log(f + "° Fahrenheit is = " + ((f - 32) * 5/9).toFixed(2) + "°C");
}
celsiusToFahrenheit(38)
fahrenheitToCelsius(100)