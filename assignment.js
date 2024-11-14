//*question1
// var num = +prompt("Enter you First number ");
// console.log("number is : ", num);
// ========================================================

//*question2
// var num = +prompt("Enter The number ");
// if (num % 3 == 0) {
//   console.log(num, "yes , accepted");
// } else {
//   console.log(num, "No isn't accepted");
// }

// ========================================================

//*question3
// var num1 = +prompt("please Enter the First number ");
// var num2 = +prompt("please Enter the second number ");
// if (num1 > num2) {
//   console.log("The maximium is : ", num1);
// } else {
//   console.log("The maximium is : ", num2);
// }

// ========================================================
//*question4
// var num = +prompt("please Enter the Number ");

// if (num < 0) {
//   console.log("The Number is Negative : ", num);
// } else {
//   console.log("The Number is Positive : ", num);
// }

//======================================================
// *question5
// var num1 = +prompt("please Enter the First number ");
// var num2 = +prompt("please Enter the second number ");
// var num3 = +prompt("please Enter the Third number ");
// var max = num1;
// var min = num1;
// if (num2 > max) {
//   max = num2;
// }
// if (num3 > max) {
//   max = num3;
// }
// if (num2 < min) {
//   min = num2;
// }
// if (num3 < min) {
//   min = num3;
// }
// console.log("All inputs number is : ", num1, num2, num3);
// console.log("The max Number is : ", max);
// console.log("The min Number is : ", min);

//======================================================
// *question6
// var num = +prompt("please Enter the number ");
// if (num % 2 == 0) {
//   console.log(num, " The number is Even ");
// } else {
//   console.log(num, " The number is odd ");
// }

//======================================================
// *question8
// var character = prompt("Enter your Character please : ");
// if (
//   character == "a" ||
//   character == "e" ||
//   character == "l" ||
//   character == "o" ||
//   character == "u"
// ) {
//   console.log("The character is Vowel Chars ", character);
// } else {
//   console.log("The character is consonant Chars ", character);
// }
//======================================================
// *question9
// var num = +prompt("Enter The Number Please : ");
// for (i = 0; i <= num; i++) {
//   console.log(i);
// }
//======================================================
// *question10
// var num = +prompt("Enter The Number please : ");
// for (i = 1; i <= 12; i++) {
//   console.log(num, "*", i, " = ", i * num);
// }
//======================================================
// *question11
// var num = +prompt("Enter The Number please : ");
// for (i = 1; i <= num; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
//======================================================
// *question12
// var num1 = +prompt("Enter The First Number please : ");
// var num2 = +prompt("Enter The Second Number please : ");
// console.log("The power of Two numbers is : ", num1 ** num2);
//======================================================
// *question12
// var sub1 = +prompt("Enter the marks :");
// var sub2 = +prompt("Enter the marks :");
// var sub3 = +prompt("Enter the marks :");
// var sub4 = +prompt("Enter the marks :");
// var sub5 = +prompt("Enter the marks :");
// sum = sub1 + sub2 + sub3 + sub4 + sub5;
// avg = sum / 5;
// percentage = (sum / 500) * 100;
// console.log("The Total is  : ", sum);
// console.log("The Average is : ", avg);
// console.log("The percentage is : ", percentage, "%");
//======================================================
// *question13
// var month = +prompt("Enter Month number (1- 12) : ");
// if (
//   month == 1 ||
//   month == 3 ||
//   month == 5 ||
//   month == 7 ||
//   month == 8 ||
//   month == 10 ||
//   month == 12
// ) {
//   var days = 31;
//   console.log("The Month is : ", month, "The days is : ", days);
// } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//   var days = 30;
//   console.log("The Month is : ", month, "The days is : ", days);
// } else {
//   var days = 28;
//   console.log("The Month is : ", month, "The days is : ", days);
// }

//======================================================
// *question14
// var sub1 = +prompt("Enter the physics mark  :");
// var sub2 = +prompt("Enter the chemistry mark  :");
// var sub3 = +prompt("Enter the math mark  :");
// var sub4 = +prompt("Enter the Biology mark  :");
// var sub5 = +prompt("Enter the computer mark  :");
// sum = sub1 + sub2 + sub3 + sub4 + sub5;

// percentage = (sum / 500) * 100;
// var grade;
// if (percentage >= 90) {
//   grade = "A";
// } else if (percentage >= 80) {
//   grade = "B";
// } else if (percentage >= 70) {
//   grade = "C";
// } else if (percentage >= 60) {
//   grade = "D";
// } else if (percentage >= 40) {
//   grade = "E";
// } else {
//   grade = "F";
// }
// console.log("The Total is  : ", sum);

// console.log("The percentage is : ", percentage, "% ", " Grade is : ", grade);

//======================================================
// *question15
// var month = +prompt("Enter Month number (1- 12) : ");
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     days = 31;
//     console.log("The Month is : ", month, "The days is : ", days);
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     days = 30;
//     console.log("The Month is : ", month, "The days is : ", days);
//     break;
//   case 2:
//     days = 28;
//     console.log("The Month is : ", month, "The days is : ", days);
//     break;
// }

//======================================================
// *question16
// var character = prompt("Enter the character : ");
// switch (character) {
//   case "e":
//   case "a":
//   case "i":
//   case "o":
//   case "u":
//     console.log("The character is vowel : ", character);
//     break;
//   default:
//     console.log("this is consonant : ", character);
// }
//======================================================
// *question17
// var num1 = +prompt("Enter the first number : ");
// var num2 = +prompt("Enter the second number : ");
// switch (true) {
//   case num1 > num2:
//     console.log("the max is : ", num1);
//     break;
//   case num2 > num1:
//     console.log("The max is : ", num2);
//     break;
//   default:
//     console.log("Both are equal : ", num1, num2);
// }

//======================================================
// *question18
// var num = +prompt("Enter the number : ");

// switch (true) {
//   case num % 2 == 0:
//     console.log("the number is Even : ", num);
//     break;

//   default:
//     console.log("The Num is odd : ", num);
// }

//======================================================
// *question19
// var num = +prompt("Enter the number : ");
// switch (true) {
//   case num > 0:
//     console.log("the number is Positive : ", num);
//     break;
//   case num < 0:
//     console.log("The Num is negative : ", num);
//     break;
//   default:
//     console.log("The number is Zero ", num);
// }
//======================================================
// *question20
// var num1 = +prompt("Enter the number : ");
// var num2 = +prompt("Enter the number : ");
// var operation = prompt("Enter the process you need (+ , - , * , / ) : ");

// switch (operation) {
//   case "+":
//     var result = num1 + num2;
//     console.log("the total is  : ", result);
//     break;
//   case " - ":
//     var result = num1 - num2;
//     console.log("the result is  : ", result);
//     break;
//   case "/":
//     var result = num1 / num2;
//     console.log("the result is  : ", result);
//     break;
//   case "*":
//     var result = num1 * num2;
//     console.log("the result is  : ", result);
//     break;
//   default:
//     console.log("The operation isn't valid ");
// }
