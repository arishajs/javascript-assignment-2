// QuestionNo1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

// QuestionNo2
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction);
document.write("<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication);
document.write("<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + division);
document.write("<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus);


// QuestionNo3
var number;
 document.write("Value after variable declaration is: " + number);
document.write("<br>");
number = 5;
document.write("Initial value: " + number);
document.write("<br>");
number++;
 document.write("Value after increment is: " + number);
document.write("<br>");
number = number + 7;
document.write("Value after addition is: " + number);
 document.write("<br>");
number--;
document.write("Value after decrement is: " + number);
document.write("<br>");
var remainder = number % 3;
document.write("The remainder is: " + remainder);

// QuestionNo4
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Cost of one movie ticket is " + ticketPrice + " PKR");
document.write("<br>");
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

// QuestionNo5
var number = 4;
document.write("<br><br>");
 document.write("Table of " + number);
document.write("<br><br>");
document.write(number + "x1=" + (number * 1));
document.write("<br>");
document.write(number + "x2=" + (number * 2));
document.write("<br>");
document.write(number + "x3=" + (number * 3));
document.write("<br>");
document.write(number + "x4=" + (number * 4));
document.write("<br>");
document.write(number + "x5=" + (number * 5));
document.write("<br>");
document.write(number + "x6=" + (number * 6));
document.write("<br>");
document.write(number + "x7=" + (number * 7));
document.write("<br>");
document.write(number + "x8=" + (number * 8));
document.write("<br>");
document.write(number + "x9=" + (number * 9));
document.write("<br>");
document.write(number + "x10=" + (number * 10));

// QuestionNo6
// Celsius to Fahrenheit
document.write("<br><br>");
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F");
document.write("<br><br>");

// Fahrenheit to Celsius
var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;
document.write(fahrenheit2 + "°F is " + celsius2 + "°C");

// QuestionNo7
var priceItem1 = 650;
var priceItem2 = 100;

var quantityItem1 = 3;
var quantityItem2 = 7;

var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h1>Shopping Cart</h1>");

document.write("Price of item 1 is " + priceItem1);
document.write("<br>");

document.write("Quantity of item 1 is " + quantityItem1);
document.write("<br>");

document.write("Price of item 2 is " + priceItem2);
document.write("<br>");

document.write("Quantity of item 2 is " + quantityItem2);
document.write("<br><br>");

document.write("Shipping Charges " + shippingCharges);
document.write("<br><br>");

document.write("Total cost of your order is " + totalCost);

// QuestionNo8
var totalMarks = 980;
var obtainedMarks = 804;

var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");

document.write("Total Marks: " + totalMarks);
document.write("<br>");

document.write("Marks Obtained: " + obtainedMarks);
document.write("<br>");

document.write("Percentage: " + percentage + "%");

// QuestionNo9
var totalCurrency = (10 * 104.80) + (25 * 28);

document.write("<h1>Currency in PKR</h1>");

document.write("Total Currency in PKR: " + totalCurrency);

// QuestionNo10
document.write("<br>");
var number = 10;

var result = ((number + 5) * 10) / 2;

document.write("The result is: " + result);

// QuestionNo11
var currentYear = 2016;
var birthYear = 1992;

var age = currentYear - birthYear;

document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear);
document.write("<br>");
document.write("Birth Year: " + birthYear);
document.write("<br><br>");
document.write("Your age is: " + age);

// QuestionNo12
var radius = 5;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

console.log("The radius is " + radius);
console.log("The circumference is " + circumference);
console.log("The area is " + area);

// QuestionNo13
document.write("<h1>The Lifetime Supply Calculator</h1>");

var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maximumAge = 65;
var amountPerDay = 3;

var total = (maximumAge - currentAge) * amountPerDay;

document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");

document.write(
  "You will need " + total + " " + favoriteSnack +
  " to last you until the ripe old age of " + maximumAge
);