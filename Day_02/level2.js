//Exercise-Level 2

//1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
//If multiple '' exist in a console statement, put \ before both ''

//2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//3 
console.log(typeof('10'))
console.log((typeof'10')==10) //false = string and number
console.log(parseInt('10')==10) // true = number to number
console.log(Number('10')==10) // true again, since Number works the same way as parseInt

//4
console.log(Math.ceil(parseFloat('9.8')))
console.log(Math.round(parseFloat('9.8'))) //Math.ceil() to round off to larger num and parseFloat/Number to convert to string to number.

//5
let strg1 = 'Python'
let strg2 = 'Jargon'
console.log(strg1.match('on'))
console.log(strg2.search(/On/i))

//6
let phraseCheck = 'I hope this course is not full of jargon.'
console.log(phraseCheck.search(/jargon/gi))

//7
console.log(Math.floor(Math.random() * 101))
//Math.rondom() = generates a random number between 0-0.99 and by multiplying it to 110, it gives a number 
//between 0-99.99 and lastly by including it in Math.floor() it makes to 0-99

//8
console.log(Math.floor(Math.random() * (100-50) + 50))
//for generating a number between two values = (max-min) + min

//9
console.log(Math.floor(Math.random() * 256))

//10
let sliceOut = 'You cannot end a sentence with because because because is a conjunction'
console.log(sliceOut.substring(40))

//11
console.log('1 1 1 1 1\ 2 1 2 4 8\ 3 1 3 9 27\ 4 1 4 16 64\ 5 1 5 25 125')
