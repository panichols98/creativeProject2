/*global fetch */

const url = "http://data.fixer.io/api/latest?access_key=4d70bf6038783e294dd236fff72127ce";
console.log(url);
fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let conversionRate = "";
        conversionRate += "<div class=\"grid-item\">";
        conversionRate += "<p> United States Dollars (USD): " + json.rates.USD + "</p>"
        conversionRate += "</div>";
        conversionRate += "<div class=\"grid-item\">";
        conversionRate += "<p> Mexican Pesos (MXN): " + json.rates.MXN + "</p>"
        conversionRate += "</div>";
        conversionRate += "<div class=\"grid-item\">";
        conversionRate += "<p> British Pound (GBP): " + json.rates.GBP + "</p>"
        conversionRate += "</div>";
        conversionRate += "<div class=\"grid-item\">";
        conversionRate += "<p> Russian Ruble (RUB): " + json.rates.RUB + "</p>"
        conversionRate += "</div>";
        conversionRate += "<div class=\"grid-item\">";
        conversionRate += "<p> Canadian Dollar (CAD): " + json.rates.CAD + "</p>"
        conversionRate += "</div>";
        conversionRate += "<div class=\"grid-item\">";
        conversionRate += "<p> Chinese Renminbi (CNY): " + json.rates.CNY + "</p>"
        conversionRate += "</div>";
        conversionRate += "<div class=\"grid-item\">";
        conversionRate += "<p> Japanese Yen (JPY): " + json.rates.JPY + "</p>"
        conversionRate += "</div>";
        conversionRate += "<div class=\"grid-item\">";
        conversionRate += "<p> Indian Rupee (INR): " + json.rates.INR + "</p>"
        conversionRate += "</div>";
        conversionRate += "<div class=\"grid-item\">";
        conversionRate += "<p> Australian Dollar (AUD): " + json.rates.AUD + "</p>"
        conversionRate += "</div>";
        document.getElementById("conversionTable").innerHTML = conversionRate;

    });

document.getElementById("euroSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const euroAmount = document.getElementById("euroInput").value;
    if (euroAmount === "")
        return;
    console.log(euroAmount);
    const newCurrency = document.getElementById("newCurrency").value;
    if (newCurrency === "")
        return;
    console.log(newCurrency);
    const url = "http://data.fixer.io/api/latest?access_key=4d70bf6038783e294dd236fff72127ce";
    console.log(url);
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let  conversionRate = json.rates[newCurrency];
            console.log(conversionRate);
            var newAmount = "<p>Your new amount is " + (conversionRate * euroAmount) + " " + newCurrency + "</p>";
            console.log(newAmount);
            console.log(conversionRate);
            console.log(euroAmount);
            console.log(conversionRate * euroAmount);
            document.getElementById("conversionResults").innerHTML = newAmount;
        });
});