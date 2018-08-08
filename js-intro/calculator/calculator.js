// // Input prompts for two numbers and an operator
//
// var x = parseFloat(prompt('Enter a number: '));
// var op = prompt('Enter an operator (enter "**" or "sqrt" for power )');
// if (op != 'sqrt') {
//   var y = parseFloat(prompt('Enter another number'));
// }
//
// // function to perform a mathmatical operation
// function mathOp(x, op, y)
// {
//   switch (op)
//   {
//     case '+':
//         return x + y;
//     case '-':
//         return x - y;
//     case '*':
//         return x * y;
//     case '/':
//         return x / y;
//     case '**':
//         return x ** y;
//     case 'sqrt':
//         return x ** 0.5;
//     default: return 'Could not recognise input';
//   }
// }
//
// alert(mathOp(x, op, y));
//
// // BMI Calculator
// var user_choice = prompt('Enter (m) for metric system or (i) for imperial');
// if (user_choice == 'm') {
//   var user_height_metres = parseFloat(prompt('Enter your height in meters'));
//   var user_weight_kg = parseFloat(prompt('Enter your weight in kg'));
// }
//
// else if (user_choice == 'i') {
//   var user_height_ft = parseFloat(prompt('Enter your height in feet: )'));
//   var user_height_inches = parseFloat(prompt('Enter your height in inches: )'));
//   var user_weight_lbs = parseFloat(prompt('Enter your weight in pounds'));
//
//   // convert imperial to metric units
//   var user_height_metres = ((user_height_ft) + (user_height_inches/12))*0.3048;
//   var user_weight_kg = user_weight_lbs/2.2;
// }
//
// function BMICalulator(user_height, user_weight) {
//   result = user_weight/user_height;
//   return result/user_height;
// }
//
// alert(BMICalulator(user_height_metres, user_weight_kg));



// Trip Calculator
var user_distance = parseFloat(prompt('Enter distance in miles'));
var user_fuel_efficiency = parseFloat(prompt('Enter your fuel efficiency in mpg'));
var user_cost_per_gallon = parseFloat(prompt('Enter fuel cost per gallon'));
var user_speed = parseInt(prompt('Enter average speed'));

var time = user_distance/user_speed;

if (user_speed > 60){
  var new_fuel_efficiency = user_fuel_efficiency - ((user_speed - 60)*2);
}

var cost = (user_cost_per_gallon/user_fuel_efficiency)*user_distance;

alert('Your trip will take ' + time.toFixed(2) + ' hours and cost £ ' + cost.toFixed(2));
