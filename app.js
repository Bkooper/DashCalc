document.getElementById('processScreenshot').addEventListener('click', function() {
    const fileInput = document.getElementById('screenshot');
    if (fileInput.files.length === 0) {
        alert("Please upload a screenshot.");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;
        img.onload = function() {
            Tesseract.recognize(img, 'eng', {
                logger: (m) => console.log(m)
            }).then(({ data: { text } }) => {
                console.log(text);
                parseText(text);
            });
        };
    };
    reader.readAsDataURL(file);
});

function parseText(text) {
    const basePayMatch = text.match(/\$\d+\.\d{2}/);
    const distanceMatch = text.match(/\((\d+\.?\d*)\s?mi\)/);
    const timeMatch = text.match(/(\d+)\s?min/);

    if (basePayMatch) {
        const basePay = parseFloat(basePayMatch[0].replace('$', ''));
        document.getElementById('basePay').value = basePay;
    }

    if (distanceMatch) {
        const distance = parseFloat(distanceMatch[1].trim());
        document.getElementById('distance').value = distance;
    }

    if (timeMatch) {
        const time = parseInt(timeMatch[1].trim(), 10);
        document.getElementById('deliveryTime').value = time;
    }


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