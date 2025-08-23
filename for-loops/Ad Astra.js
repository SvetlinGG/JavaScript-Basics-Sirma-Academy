function calculateDays(inputData) {
    let foodItems = inputData[0].match(/[#|][A-Za-z\s]+[#|]\d{2}\/\d{2}\/\d{2}#\d+#|\|[A-Za-z\s]+\|\d{2}\/\d{2}\/\d{2}\|\d+\|/g);
    let totalCalories = 0;

    foodItems.forEach(item => {
        let data = item.split(/#|\|/).filter(Boolean);
        let itemName = data[0].trim();
        let expirationDate = data[1].trim();
        let calories = parseInt(data[2]);

        totalCalories += calories;
        let days = Math.floor(totalCalories / 2000);
        console.log(`You have food to last you for: ${days} days!`);
        console.log(`Item: ${itemName}, Best before: ${expirationDate}, Nutrition: ${calories}`);
    });

   
}

calculateDays([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);

