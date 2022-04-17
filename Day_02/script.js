//Exercise Level 1

let challange = '30 Days Of JavaScript'
console.log(challange)

console.log(`length: ${challange.length}`)

let toCapital = challange.toUpperCase()
console.log(`upperCase: ${toCapital}`)

let toSmallCase = challange.toLowerCase()
console.log(`lowerCase: ${toSmallCase}`)

let firstWord = challange.substring(0,2)
console.log(`firstWord : ${firstWord}`)

let slicedPhrase = challange.substring(3) //If you only mention 1st index, it will slice it till the end.
console.log(slicedPhrase)

let check = challange.includes('Script')
console.log(check)

let toArray = challange.split()
console.log(toArray)
//.split() = ['30 Days Of JavaScript']
//.split('') = ['3', '0', ' ', 'D', 'a', 'y', 's', ' ', 'O', .....]
//.split(' ') = ['30', 'Days', 'Of', 'JavaScript']

let arrayAtSpace = challange.split(' ')
console.log(arrayAtSpace)

let techGiants = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let stringToArray = techGiants.split(' ')
console.log(stringToArray)

let replacingAword = challange.replace('JavaScript', 'Python')
console.log(replacingAword)
//Notice, in replace we include prevValue and newValue in 2 different strings i.e. ''

let findLetterAtIndex = challange.charAt(15) //returns the value at that index
console.log(findLetterAtIndex)

let findCodeOfJ = challange.charCodeAt(11) //returns the ASCII number of the value at that index
console.log(findCodeOfJ)

let findIndexOfaCharacter = challange.indexOf('a') //returns the index of first occurence
console.log(findIndexOfaCharacter)

let lastOccurence = challange.lastIndexOf('a') //returns the index of last occurence
console.log(lastOccurence)

//17
let str1 = 'You cannot end a sentence with because because because is a conjunction'
let finding1stOccurrence = str1.indexOf('because')
console.log(finding1stOccurrence)

//18
console.log(str1.lastIndexOf('because'))

//19
console.log(str1.search("because")) //returns the index of the first occurrence
// diff bet indexOf() and search() == both return the index of the first occurrence but 
// in search() we can also use regex e.g.
console.log(str1.search(/Because/i)) //here beacuse == Beacuse since, i==case sensetive in regex, 
//otherwise it would have thrown an error

//20
let whiteSpacesStr = ' 30 Days Of JavaScript '
let trimmed = whiteSpacesStr.trim()
console.log(trimmed)

//21
let checkingStartingString = challange.startsWith('30 D')
console.log(checkingStartingString)

//22
console.log(challange.endsWith('Script'))

//23
console.log(challange.match(/a/gi)) //g = search the whole text

//24
let s1 = '30 days of'
let s2 = ' JavaScript'

let mearge = s1.concat(s2)
console.log(mearge)

//25
console.log(challange.repeat(2))
