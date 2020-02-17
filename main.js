function makeBanner(text){
    console.log('#########' + ' ' + 'Challenge' + ' ' + text + ' ' + '#########')
} //display ######## + space + Challenge + inserted text + space + ########

makeBanner(1)

let fiveNumber = 1

while (fiveNumber < 6){  //as long fiveNumber is less than 6
    console.log(fiveNumber) //console.log result
    fiveNumber = fiveNumber +1 //adds plus 1 until fiveNumber equals 6
}

makeBanner(2)

function countUpTo(max) {

}

let randomFun = 1
let num1 = 6

while (num1 >= randomFun) { //as long as num1 is greater or equal to randomFun, print randomFun + 1
    console.log(randomFun)
    randomFun = randomFun + 1
    
}

countUpTo(6);

makeBanner(3)

function countInclusive(para1, para2){
let first = para1


while (first <= para2){
    console.log(first)
    first = first +1
}
}

countInclusive(1,6)

makeBanner(4)

function evenOdd(givenNumber){
let oddNum = "Odd"
let evenNum = "Even" 
let baseNumber = 5

while (givenNumber <= baseNumber){
    console.log(baseNumber)
    baseNumber = baseNumber + 1 
}
if (baseNumber %2 == 0){
    console.log(baseNumber +  " " + evenNum)

}
else{
    console.log(baseNumber + " " + oddNum)
}
}
evenOdd()

makeBanner(5)

function onlyEven(placeNum){
let even = 1

while (even <= placeNum){
    if (even % 2 == 0){
        console.log(even)
    }
    even = even + 1
}
}

onlyEven(8)

makeBanner(6)

function descending(start){ //function takes starting number and subtracts 1 until it hits down
let down = 1

while (start >= down){
    console.log(start)
    start = start - 1
}
}

descending(10)

makeBanner(7)

function blastOff(){ //function starts with 10 until empty then blast off text
    let ship = 10
    
    while (ship >= 1){
        console.log(ship)
        ship = ship - 1
}
    console.log('Blast off!')
}

blastOff()

makeBanner(8)

function reduced(insertNum){
    let reduceNum = insertNum
    
    while (reduceNum >= 1){
        console.log(reduceNum)
        reduceNum = reduceNum - 3
    }
}

reduced(20)

makeBanner(9)

function printHello(){
    let hello = 1

    while (hello <= 7){
    console.log(hello + ' ' + 'Hello!')
    hello = hello + 1
    }
}

printHello()

makeBanner(10)

function printHello2(newText){
    let hello2 = 1

    while (hello2 <= 7){
        console.log((hello2) + (' ' + newText))
        hello2 = hello2 + 1
    }
}

printHello2('NEW')

makeBanner(11)

function multiWord(newText2, insert1){
    let insert2 = 0

    while(insert2 <= insert1){
        console.log (newText2)
        insert2 = insert2 + 1
    }
}

multiWord('"Good-bye..."', 4)


makeBanner(12)

// //function separateWord(sepWord){ creates loop, not sure why
//     let sep1 = 1

//     while(sep1 < sepWord.length){
//         console.log(sepWord[sep1])
//         sepWord = sepWord + 1
//     }

// }

//separateWord('print')

makeBanner(13)



makeBanner(14)