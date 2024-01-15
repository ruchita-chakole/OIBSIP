function convertTemperature() {
    var celsiusInput = document.getElementById("celsius").value;
    var celsius = parseFloat(celsiusInput);

    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result").innerText = "Result: " + fahrenheit.toFixed(2) + " °F";
}