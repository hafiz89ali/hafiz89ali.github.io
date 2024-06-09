//  this is an example of pseudocode
//  pseudocode is a way of planning out your code before you write it

// BMI calculator web app
// BMI is calculated by dividing a person's weight in kilograms by the square of his/her height in meters
// BMI = kg/m^2
// BMI = kg/m/m
// BMI = kg/(m*m)

// category	BMI (kg/m2)
// 1. Very severely underweight	< 15
// 2. Severely underweight	< 16
// 3. Underweight	< 18.5
// 4. Normal (healthy weight)	18.5 - 25
// 5. Overweight	25 - 30
// 6. Obese Class I (Moderately obese)	30 - 35
// 7. Obese Class II (Severely obese)	35 - 40
// 8. Obese Class III (Very severely obese)	> 40

// how our app will work:
// input user for weight in kilograms
// input user for height in meters
// calculate BMI based on user input (weight and height) when user click the button
// display BMI at h2 with id="bmiValue" by execute the calculation when user click the button
// display BMI category at h2 with id="bmiCategory" by using if else statement

const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const calculate = document.querySelector("#calculate");

weight.addEventListener("input", function (e) {
  console.log(e.target.value);
});

height.addEventListener("input", function (e) {
  console.log(e.target.value);
});

calculate.addEventListener("click", function () {
  console.log("Button clicked");
  const kg = weight.value;
  const m = height.value;
  const bmi = kg / (m * m);
  console.log(bmi.toFixed(2));
  bmiValue.innerText = bmi.toFixed(2);

  if (bmi < 15) {
    bmiCategory.innerText = "Very severely underweight";
  } else if (bmi < 16) {
    bmiCategory.innerText = "Severely underweight";
  } else if (bmi < 18.5) {
    bmiCategory.innerText = "Underweight";
  } else if (bmi < 25) {
    bmiCategory.innerText = "Normal (healthy weight)";
  } else if (bmi < 30) {
    bmiCategory.innerText = "Overweight";
  } else if (bmi < 35) {
    bmiCategory.innerText = "Obese Class I (Moderately obese)";
  } else if (bmi < 40) {
    bmiCategory.innerText = "Obese Class II (Severely obese)";
  } else {
    bmiCategory.innerText = "Obese Class III (Very severely obese)";
  }
});
