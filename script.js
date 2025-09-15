function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        return "Please enter positive numbers";
    }

    let bmi = weight / (height * height);
    
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal";
    } else {
        category = "Overweight";
    }

    return {
        bmi: Math.round(bmi * 10) / 10,  
        category: category
    };
}

console.log(calculateBMI(70, 1.75)); 
console.log(calculateBMI(50, 1.75)); 
console.log(calculateBMI(90, 1.75)); 