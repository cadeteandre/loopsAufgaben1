// ========================================
//          Loops-TS-Level-1_1
// ========================================
console.log('%c Loops Level-1_1 ', 'background: black; color: gold;');
for(let num: number = 1; num < 11; num++) {
    console.log(`Hello World ${num}`);
}

// ========================================
//          Loops-TS-Level-1_2
// ========================================
console.log('%c Loops Level-1_2 ', 'background: black; color: gold;');

let numbersToTen: number[] = [];
for(let num: number = 1; num < 11; num++) {
    numbersToTen.push(num);
};
console.log(numbersToTen);

// ========================================
//          Loops-TS-Level-1_4
// ========================================
console.log('%c Loops Level-1_4 ', 'background: black; color: gold;');

const friendNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

for(let indexNum: number = 0; indexNum < friendNames.length; indexNum++) {
    console.log(friendNames[indexNum]);
};

// ========================================
//          Loops-TS-Level-1_9
// ========================================
console.log('%c Loops Level-1_9 ', 'background: black; color: gold;');
console.log('Wortfilter in HTML');


const inputWord = document.querySelector('#inputWord') as HTMLInputElement;
const inputLength = document.querySelector('#inputLength') as HTMLInputElement;
const btnAdd = document.querySelector('#btnAdd') as HTMLInputElement;
const btnFilter = document.querySelector('#btnFilter') as HTMLInputElement;
const showResults = document.querySelector('#showResults') as HTMLElement;
let words: string[] = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

if(inputLength && inputWord && btnAdd && btnFilter && showResults) {

    btnAdd.addEventListener('click', () => {
        const word = inputWord.value;
        words.push(word);
        inputWord.value = '';
    });

    btnFilter.addEventListener('click', () => {
        const wordLength: number = Number(inputLength.value);
        showResults.innerHTML = '';
        for(let i: number = 0; i < words.length; i++) {
            switch(true) {
                case (words[i].length === wordLength):
                    showResults.innerHTML += `<p>${words[i]}</p>`;
            };
        };
    });
};

// ========================================
//          Loops-TS-Level-1_10
// ========================================
console.log('%c Loops Level-1_10 ', 'background: black; color: gold;');

const arrNum1: number[] = [2, 5, 8, 1, 4, 88, 32, 99, 251];
const arrNum2: number[] = [6, 12, 43, 989, 62, 69, 348, 312, 11, 83];
const arrNum3: number[] = [9, 2, 5, 89, 66, 19, 30, 1012, 17, 81];
const getHighestNumber = (numArr: number[]) => {
    let largestNum: number = numArr[0];
    for(let i = 0; i < numArr.length; i++) {
        if(numArr[i] > largestNum) {
            largestNum = numArr[i];
        }
    }
    return largestNum;
}
console.log(getHighestNumber(arrNum1));
console.log(getHighestNumber(arrNum2));
console.log(getHighestNumber(arrNum3));


// ========================================
//          Loops-TS-Level-1_11
// ========================================
console.log('%c Loops Level-1_11 ', 'background: black; color: gold;');

const calculateSum = (maxNumber: number) => {
    let result: number = 0;
    for(let num: number = 1; num <= maxNumber; num++) {
        result += num;
    };
    console.log(result);
};
calculateSum(27);

// ========================================
//          Loops-TS-Level-2_1
// ========================================
console.log('%c Loops Level-2_1 ', 'background: black; color: gold;');

const createImageNames = () => {
    let returnArr = [];
    let stringTest: string = 'image_';
    for(let i: number = 100; i < 101; i++) {
        for(let j: number = 1; j < 10; j++) {
            returnArr.push(`${stringTest.padEnd(8, '0')}${j}.jpg`);
        }
        for(let k: number = 10; k < 100; k++) {
            returnArr.push(`${stringTest.padEnd(7, '0')}${k}.jpg`);
        }
        returnArr.push(`${stringTest}${i}.jpg`);
    }
    return returnArr;
}

console.log(createImageNames());

// ========================================
//          Loops-TS-Level-2_2
// ========================================
console.log('%c Loops Level-2_2 ', 'background: black; color: gold;');
console.log('Looooops Level 2_2 in HTML');


const inputNumber = document.querySelector('#inputNumber') as HTMLInputElement;
const btnLoop = document.querySelector('#btnLoop') as HTMLInputElement;
const loopResults = document.querySelector('#loopResults') as HTMLElement;

if(inputNumber && btnLoop && loopResults) {

    btnLoop.addEventListener('click', () => {
        loopResults.innerHTML = '';
        const number: number = Number(inputNumber.value);
        let loop: string = 'Loop';
        let letter: string = '';
        const middleLoop = loop.length - 1;
        const firstLetter = loop.slice(0, 1);
        const lastLetter = loop.slice(middleLoop);
        for(let i: number = 0; i < number; i++) {
            letter += 'o';
        }
        loopResults.innerHTML = `<p class="loop__style">${firstLetter}${letter}${lastLetter}</p>`;
    });
};

// ========================================
//          Loops-TS-Level-2_3
// ========================================
console.log('%c Loops Level-2_3 ', 'background: black; color: gold;');

const getNumberOfVowels = (string: string) => {
    const stringLow = string.toLowerCase();
    let vowelsNum: number = 0;
    for(let i: number = 0; i < string.length; i++) {
        if(
            stringLow[i] === 'a' ||
            stringLow[i] === 'e' ||
            stringLow[i] === 'i' ||
            stringLow[i] === 'o' ||
            stringLow[i] === 'u'
        ) {
            vowelsNum++;
        }
    }
    console.log(vowelsNum);
} 
getNumberOfVowels('Papagaio');
getNumberOfVowels('Duesseldorf');
getNumberOfVowels('Tastatur');
getNumberOfVowels('Dortmund');
getNumberOfVowels('Schlecht');

// ========================================
//          Loops-TS-Level-2_4
// ========================================
console.log('%c Loops Level-2_4 ', 'background: black; color: gold;');

const addToFifty = (): void => {
    let sumNum: number = 0;
    for(let i: number = 0; sumNum < 51; i++) {
        let randomNum: number = Math.ceil(Math.random() * 10);
        console.log(randomNum);
        sumNum += randomNum;
        console.log(sumNum);
    }
    console.log(`${sumNum} > 50. Stopping right here.` );
}

addToFifty();