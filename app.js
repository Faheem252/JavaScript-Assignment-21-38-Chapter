///////////////////////Asignment 6///////////////////////////


/////Assignment 21-25////////
////String methods//////////

///Task1////
// var userInput1 = prompt("Your firstname?");
// var userInput2 = prompt("Your lastname?");
// var fullName = userInput1 + " " + userInput2;
// alert(fullName);

//////Task2////
// var fav = prompt("Your favourite mobile phone model?");
// var length = fav.length;
// document.write("My favourite phone is: " + fav + "<br>" +"Length of string is: " + length);

//////Task3/////
// var findIndex = "Pakistani";
// var findIndex2 = findIndex.indexOf("n");
// document.write("String: " + findIndex + "<br>" + "Index of 'n' is: " + findIndex2);

//////Task4//////
// var lastIndex = "Hello World!";
// var lastIndex2 = lastIndex.lastIndexOf("l");
// document.write("String:" + lastIndex + "<br>" + "Last index of 'l' is: " + lastIndex2);


/////Task5////////

// var char = "Pakistani";
// var char3 = char.charAt(3);
// document.write("String:" + char + "<br>" + "Character at index 3 is:" + char3);

//////Task6////////
// var a = prompt("your firstname");
// var b = prompt("your lastname");
// var c = a.concat(b);
// document.write(c + " ");

/////Task7///////
// var word = "Hyderabad";
// var replaceWord = word.replace("Hyderabad","Islamabad");
// document.write("City:" + word + "<br>" + "After replacement :" + replaceWord);

/////Task8//////
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var messageReplace = message.replace(/and/g,"&");
// document.write(messageReplace);

////////Task9////
// var typeString = "472";
// var convertInNumber = parseInt(typeString);
// var typeString = "472"; 
// document.write("Value :" + convertInNumber + "<br>" + "Type:Number" + "<br>Value :" + typeString + "<br>" + "Type:String");

///////Task10/////
// var userInput3 = prompt("Who's is your favourite biscuit brand?");
// var userInput4 = userInput3.toUpperCase();
// document.write("User Input: " +userInput3 +"<br>"+ "Uppercase: " + userInput4);


/////Task11/////
// var value = "javascript";
// var copy = value.slice(0,1);
// var copy2 = copy.toUpperCase();
// var copy3 = value.slice(1);
// var copy4 = copy3.toLowerCase();
// var combine = copy2 + copy4;
// document.write("User input: " + value + "<br>" + "title case: " + combine); 

//////Task12//////
// var num = 35.36;
// var conversionIntoNumber = num.toString();
// var removeDot = Math.floor(conversionIntoNumber);
// document.write(conversionIntoNumber);


///Task16//////
// var university = "<br>U<br>n<br>i<br>v<br>e<br>r<br>s<br>i<br>t<br>y<br> <br>o<br>f<br> <br>K<br>a<br>r<br>a<br>c<br>h<br>i<br>";
// var splitUniversity = university.split(" ");
// document.write(splitUniversity);


//////Task17/////
// var lastChar = "Pakistan";
// var lastCharCheck = lastChar.charAt(7);
// document.write("User input:" + lastChar + "<br>" + "Last character of input is:" + lastCharCheck);


////////Assignment 6/////

/////Chapter 26-30///////
//////Math Methods//////

/////Task1//////

// var integer = +prompt("Enter Positive integer");
// var round = Math.round(integer);
// var floor = Math.floor(integer);
// var ceil = Math.ceil(integer);
// document.write("Number:" + integer + "<br>" + "Round off value:" + round + "<br>" + "Floor value:" + floor + "<br>" + "Ceil  value:" + ceil);

/////Task2/////
// var negativeInteger = +prompt("Enter Negative integer");
// var round2 = Math.round(negativeInteger);
// var floor2 = Math.floor(negativeInteger);
// var ceil2 = Math.ceil(negativeInteger);
// document.write("Number:" + negativeInteger + "<br>" + "Round off value:" + round2 + "<br>" + "Floor value:" + floor2 + "<br>" + "Ceil value:" + ceil2);

//////Task3/////
// var absolute = prompt("Input your value for finding absolute value?");
// var findingAbsolute = Math.abs(absolute);
// document.write("The absolute value of " + absolute + " is" + " " + findingAbsolute);

/////Task4//////
// var random = Math.random() * 6 ;
// var round3 = Math.round(random);
// alert("Random dice value " + round3);

//////Task5//////
// var head = prompt("Head Username");
// var tail = prompt("Tail Username");
// var randomNum = Math.random() * 2;
// var  conversionInFloor = Math.floor(randomNum);
// if(conversionInFloor === 0){
//     document.write(conversionInFloor + "<br>" + "Random coin value:" + "Head");
// }
// else{
//     document.write(conversionInFloor + "<br>" + "Random coin value:" + "Tail");
// }

////////Task6//////
// var randomNumber5 = Math.random() * 100;
// var floorToRandom = Math.floor(randomNumber5);
// document.write("Random number between 1 and 100: " + floorToRandom);


///////Task7///////
// var userResponse = +prompt("What is your's Weight");
// var parse = parseInt(userResponse);
// document.write("The weight of user is " + parse + " Kilograms");


///////Task8/////
// var response = +prompt("Enter secret number");
// var randomNumber6 = Math.random() * 11;
// var converting = Math.floor(randomNumber6);
// if(converting === response){
//     alert("Congratulation!");
// }
// else{
//     alert("Try Again!");
// }



//////////Assignment 6//////

/////Chapter 31-34//////////
/////Date Methods//////////

/////Task1///////
// var currentDate = new Date ();
// alert(currentDate);

////Task2////////
// var arr = ["January","February","March","April","May","June"];
// var currentMonth = new Date();
// var nowMonth = currentMonth.getMonth();
// var nameOfMonth = arr[nowMonth];
// document.write("Current Month:" + nameOfMonth);

/////Task3/////////

// var today = new Date();
// var convertInString = today.toString();
// var copy = convertInString.slice(0,3);
// document.write("Today is " + copy);

////////Task6//////

// var today = new Date();
// var milliSeconds = today.getTime();
// var minutes = today.getTime();
// var minutes2 = minutes / 60000; 
// document.write("Current Date: " + today + "<br>" + "Elapsed milli-seconds from january 1, 1970 : " + milliSeconds + "<br>" + "Elapsed minutes from january 1, 1970 :" + minutes2);


/////Task 7/////

// var today = new Date();
// var time = today.getHours();
// if( time === 12){
//      alert("IT's AM");
// }
// else{
//    alert("IT's PM");
// }
//////Task 8/////
// var a = new Date("Thu Dec 31 2020 00:00:00 GMT+0500(PKT)");
// document.write("Later Date: " + a);


//////Task 10/////
// var date = new Date();
// var secondsPastCurrent = date.getTime();
// var dateCheck = new Date("DEC 31, 2014");
// var secondsPastPrevious = dateCheck.getTime();
// var diff = secondsPastCurrent  - secondsPastPrevious;
// document.write("On refernce date : " + date + "," + "<br>" + diff +" have passed from beginning of 2015");

////Task13/////
// var dob = new Date(prompt("Enter your date of birth","Feb 14 ,2000")) 
// var dobMilli = dob.getTime();
// var copy = dob.getFullYear();
// var today = new Date();
// var todayMilli = today.getTime();
// var diff = todayMilli - dobMilli;
// var accuage = diff/(1000*60*60*24*30*12);
// var converting = Math.floor(accuage);
// document.write("Your age is " + converting + "<br>" + "Your birth year is " + copy);

//////Task 14//////
// var heading = "<h1>K-Electric Bill</h1>"
// var numberOfUnits = 450;
// var chargesPerUnit = 14;
// var netAmount =  numberOfUnits * chargesPerUnit;
// var lateAmount = 250;
// var grossAmount = netAmount + lateAmount;
// document.write(heading + "<br><br>" + "Customer Name :XYZ Customer" + "<br>" + "Bill of Month : July" + "<br>" + "Number of units:" + numberOfUnits + "<br>" + "Charges per unit:" + chargesPerUnit + "<br><br>" + "Net amount payable (within due date):" + netAmount + "<br>" + "Late amount surcharges:" + lateAmount + "<br>" + "Gross amount payable (after due date):" + grossAmount);


//////Assignment 6/////

/////Chapter 35-38;
/////Function/////

/////Task 1///////
// function time(){
//     var a = new Date();
//      alert(a);
// }
// time();

//////Task 2/////
// function greet(){
//     var a = prompt("Your First Name?");
//     var b = prompt("Your Last Name?");
//     alert("Hello " + a + " " + b);
// }
// greet();

/////Task 3//////
// function input(x,y){
//        return x+y
// }
// alert(input(10,10));

/////Task 4//////
// function calc(num1,oper,num2){
//         if(oper === "+"){
//             return num1 + num2
//         }
//         else if(oper === "-"){
//             return num1 - num2
//         }
//         else if(oper === "*"){
//             return num1*num2
//         }
//         else if(oper === "/"){
//             return num1/num2
//         }
//         else if(oper === "%"){
//             return num1 % num2
//         }
//         else{
//             return "You Put incorrect Statement!"
//         }
// }
// var result = calc(5,"+",100);
// var result1 = calc(100,"-",80);
// var result2 = calc(100,"*",2);
// var result3 = calc(9,"/",3);
// var result4 = calc(13,"%",3);
// alert(result);
// alert(result1);
// alert(result2);
// alert(result3);
// alert(result4);

/////Task 5/////
// var num = +prompt("Enter a number for finding square?");
// function square(x){
//     var result = " " + x * x;
//     alert("Square of " + num + " is" + result);
// }
// square(num);

/////Task 6/////
// var num = prompt("Enter your number for factorial?");
// var fact = 1;
// function factorial(){
//     for(var i = num; i>=1;i--){
//         fact = fact * i;
//     }
//     alert("Factorial of " + num + "!"  + " is" + " " +  fact);
// }
// factorial();

/////Task 7//////
// var userInput12 = +prompt("Enter start number?");
// var userInput13 = +prompt("Enter end number?");
// function count(){
//     for(var i = userInput12; i<= userInput13; i++){
//         document.write(i + "<br>");
//     }
// }
// count();

/////Task 8///////
/////Not working/////
// var base = +prompt("Enter Base value ?");
// var perpendicular = +prompt("Enter perpendicular value ?");
// function hypotenuse(a,b){
//     function square(x){
//         return x*x;
//     }
//     return Math.sqrt(square(a) + square(b));
// }
// console.log(hypotenuse() + square(base,perpendicular) + " = ");

/////Task 9//////
// var w = parseInt(+prompt("Enter width"));
// var l = parseInt(+prompt("Enter length"));
// function area(){
//     var area = w * l;
//     return area
// }
// document.write("Width :" + w + "<br>" + "Length :" + l + "<br>" + "Area of rectangle is :" + area());


//////Task 10/////
// var word =  prompt("Type word for checking of palindrome?");
// var check = "";
// function pal(){
//     for(var i = word.length - 1 ; i >= 0; i--){
//         check += word[i];
//     }
//    if(check === word){
//        alert(word + " is a palindrome word")
//    }
//    else{
//        alert(word + " is not a palindrome word");
//    }
// }
// pal();


/////Task 12/////
// function findLongestWord(str){
//    var word = str.split(" ");
//    var longest = "";
//    for(var i = 0; i < word.length[i]; i++){
//        if(word.length > longest.length){
//            longest = word;
//        }
//    }
//    return longest.length;
// }
// console.log(findLongestWord("the quick brown fox jumped over the lazy dog"));






 



