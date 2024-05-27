function calculateCostPerMile(mileage, gasPrice) {
    return gasPrice / mileage;
}

function calculateTotalCost(distance, costPerMile) {
    return distance * costPerMile;
}

function calculateProfitPerMile(profit, distance) {
    return profit / distance;
}

function calculateDollarPerHour(profit, deliveryTimeInMinutes) {
    const deliveryTimeInHours = deliveryTimeInMinutes / 60;
    return profit / deliveryTimeInHours;
}

document.getElementById('calculate').addEventListener('click', function() {
    const mileage = parseFloat(document.getElementById('mileage').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const basePay = parseFloat(document.getElementById('basePay').value);
    const gasPrice = parseFloat(document.getElementById('gasPrice').value);
    const deliveryTime = parseFloat(document.getElementById('deliveryTime').value);

    const costPerMile = calculateCostPerMile(mileage, gasPrice);
    const totalCost = calculateTotalCost(distance, costPerMile);
    const profit = basePay - totalCost;
    const profitPerMile = calculateProfitPerMile(profit, distance);
    const dollarPerHour = calculateDollarPerHour(profit, deliveryTime);

    document.getElementById('totalCost').innerText = `Total cost of the delivery trip: $${totalCost.toFixed(2)}`;
    document.getElementById('profit').innerText = `Profit: $${profit.toFixed(2)}`;
    document.getElementById('profitPerMile').innerText = `Profit per mile: $${profitPerMile.toFixed(2)}`;
    document.getElementById('dollarPerHour').innerText = `Dollar per hour: $${dollarPerHour.toFixed(2)}`;
});
