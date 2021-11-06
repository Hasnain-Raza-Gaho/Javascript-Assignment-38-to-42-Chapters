// --- ASSIGNMENT --- 
// Chapters 38 to 42 Starts 







// task 1

// function power(a,b) {
//     return Math.pow(a,b);
// }
// document.write(power(2,5))




// task 2

// function leapYear(year) {
//     if (year%4 == 0) {
//         return 'Yes it is leap year';
//     }
//     else{
//         return 'No, it is not leap year';
//     }
// }
// document.write(leapYear(2024));






// task 3
// function Area(a,b,c) {
//     area = Sides()*(Sides() - a)*(Sides() - b)*(Sides() - c)
//     function Sides() {
//         return (a+b+c)/2;
//     }
//     return area;
// }
// document.write(Area(2,2,2))






// task 4

// function mainFunction(a,b,c) {
//     function averge() {
//         return 'Average is ' + ((a + b + c)/ 3).toFixed() + '<br>'
//     }
//     function per() {
//         return 'Percentage is ' + (((a + b + c) / 300)*100).toFixed(2) + '%<br>'
//     }
//     return averge() + per()
// }
// document.write(mainFunction(80,30,20))





// task 5

// function myIndexOf(a) {
//     str = 'This is demo string'
//     for (let b = 0; b < str.length; b++) {
//         if (str[b] == a ) {
//             c = b;
//             break
//         }
//         else{
//             c = 'word did not found'
//         }
//     }
//     return c;
// }
// document.write(myIndexOf('i'))







// task 6

// function removeVowel(a) {   
//     a =  a.replace(/a/g,'')
//     a =  a.replace(/e/g,'')
//     a =  a.replace(/i/g,'')
//     a =  a.replace(/o/g,'')
//     a =  a.replace(/u/g,'')
//     return a;
// }
// document.write(removeVowel('hi hello kese ho sab'))
 







// task 7

// var str = 'Pleases read this application and give me gratuity'

// d = str.length;
// var a = 0;
// b = 0;
// c = []
// function vowels(str) {
//         while (a<d) {
//             switch(str.charAt(a)) {
//                 case  'a':
//                 switch (str.charAt(a+1)) {
//                     case 'a':
//                     c.push(str.charAt(a) + str.charAt(a+1))
//                         break;
//                     case 'e':
//                     c.push(str.charAt(a) + str.charAt(a+1))
//                         break;
//                     case 'i':
//                     c.push(str.charAt(a) + str.charAt(a+1))
//                         break;
//                     case 'o':
//                     c.push(str.charAt(a) + str.charAt(a+1))
//                         break;
//                     case 'u':
//                     c.push(str.charAt(a) + str.charAt(a+1))
//                         break;
//                 }
//                 break;

//                 case  'e':
//                     switch (str.charAt(a+1)) {
//                         case 'a':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'e':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'i':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'o':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'u':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                     }
//                 break;

//                 case  'i':
//                     switch (str.charAt(a+1)) {
//                         case 'a':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'e':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'i':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'o':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'u':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                     } 
//                 break;

//                 case  'o':
//                     switch (str.charAt(a+1)) {
//                         case 'a':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'e':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'i':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'o':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'u':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                     } 
//                 break;

//                 case  'u':
//                     switch (str.charAt(a+1)) {
//                         case 'a':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'e':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'i':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'o':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                         case 'u':
//                         c.push(str.charAt(a) + str.charAt(a+1))
//                             break;
//                     }
//                 break;
                    
//                 default:
//                 break;
//                 }    
//                 a++
//                 }
//                 console.log(c)
//             }

// vowels(str)







// task 8


// var distance = prompt('Enter distance between 2 cities in km');

// function distanceInKM(distance) {
    
//     function distInMeter() {
//         return 'distance in Meter ' + distance * 1000;
//     }
//     function distInFeet() {
//         return 'distance in Feet ' + distance * 3280.84 ;
//     }
//     function distInInch() {
//         return 'distance in Inches ' + distance * 39370.08;
//     }
//     function distInCenti() {
//         return 'distance in Centimeter ' + distance * 100000;
        
//     }
//     console.log(distInMeter())
//     console.log(distInFeet())
//     console.log(distInInch())
//     console.log(distInCenti())

//     return;
// }


// distanceInKM(distance)






// task 9

// var hours = 45
// var salary = 20000;
// var overPay = 12;
// while (hours > 40) {
//     overTime = (hours - 40) * overPay;
//     salary = overTime + salary; 
//     break;
// }

// console.log(salary);







// task 10


// var amount = prompt('Enter amount to withdraw!!' , 200)
// str = ''
// str1 = ''

// while (amount.length == 3) {
    
//     switch (amount.charAt(0)) {
//         case '1':
//             str = 'you will have 1 hundred note'
//            break;
//         case '2':
//             str = 'you will have 2 hundred notes'
//            break;
//         case '3':
//             str = 'you will have 3 hundred notes'
//            break;
//         case '4':
//             str = 'you will have 4 hundred notes'
//            break;
//         case '5':
//             str = 'you will have 5 hundred notes'
//            break;
//         case '6':
//             str = 'you will have 6 hundred notes'
//            break;
//         case '7':
//             str = 'you will have 7 hundred notes'
//            break;
//         case '8':
//             str = 'you will have 8 hundred notes'
//            break;
//         case '9':
//             str = 'you will have 9 hundred notes'
//            break;
    
//         default:
//             str = 'you entered wrong number'
//             break;
//     }


// switch (amount.charAt(1)) {
//         case '1':
//             str1 = '1 ten note'
//            break;
//         case '2':
//             str1 = '2 ten notes'
//            break;
//         case '3':
//             str1 = '3 ten notes'
//            break;
//         case '4':
//             str1 = '4 ten notes'
//            break;
//         case '5':
//             str1 = '1 fifty note'
//            break;
//         case '6':
//             str1 = '1 fifty note and 1 ten note'
//            break;
//         case '7':
//             str1 = '1 fifty note and 2 ten notes'
//            break;
//         case '8':
//             str1 = '1 fifty note and 3 ten notes'
//            break;
//         case '9':
//             str1 = '1 fifty note and 4 ten notes'
//            break;
//         case '0':
//             str1 = 'you have not any ten note'
//            break;
    
//         default:
//             str1 = 'Please Enter Valid Number'
//             break;
//     }
// break;
// }

// if (str == '' && str1 == '' ) {
//     console.log('Please Enter Valid Number between 100 to 990')

// }
// else{
    
//     console.log( str + ' & ' + str1)
// }








// --- ASSIGNMENT COMPLETED --------!! 































