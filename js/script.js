'use strict';

const words = ['cat', 'window', 'document', 'orange', 'message', 'animal', 'telephone'];
let randomWord = words[Math.floor(Math.random() * words.length)];
let answerArr = [];
let number = randomWord.length;

for(let i = 0; i < randomWord.length; i++){
    answerArr[i] = '_';
    console.log(randomWord[i]);
}

while(number > 0){
    console.log(answerArr.join(' '));
    alert(answerArr.join(' '));

    let enterSymbol = prompt('Enter 0ne symbol', '');

    if(enterSymbol === null){
        break;
    } else if (enterSymbol.length !== 1){
        alert('Enter just one symbol, please!');
    } else {
        for(let j = 0; j < randomWord.length; j++){
            if(randomWord[j] === enterSymbol){
                answerArr[j] = enterSymbol;
                number--;
            }
        }
    }

    
}

alert(answerArr.join(' '));
alert("Werry good. Word is " + randomWord);