function reverseString(str){
    const text = str.substr(0, str.length - 1);
    const takeNumber = str.substr(-1);
    // console.log(takeNumber);

    const reversedWord = text.split('').reverse().join('');
    
    const result = reversedWord + takeNumber
    return result;

}
const text = "NEGIE1";
const reversed = reverseString(text);
// console.log(reversed);

// nomor 2
function countText(sentence){
    const word = sentence.split(' ');

    let findWord = '';

    for (let i = 0; i < word.length; i++){
        if (word[i].length > findWord.length){
            findWord = word[i];
            // console.log(findWord);
        }
    }

    return `${findWord}: ${findWord.length} character`;
}
const sentence = "Saya sangat senang mengerjakan soal algoritma";
// console.log(countText(sentence));

// nomor 3
function similiarWord(input, query){
    const OUTPUT = [0,0,0];

    for (let i = 0; i < query.length; i++){
        const queryWord = query[i];

        for (let j = 0; j < input.length; j++){
            if (input[j] === queryWord){
                OUTPUT[i]++;
            }
        }
    }
    return OUTPUT;
}
const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const countSameWord = similiarWord(INPUT, QUERY);
// console.log(countSameWord); 

// nomor 4
function matrik(mat, n){

    let principal = 0, secondary = 0;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            
            if(i == j){
                principal += mat[i][j];
            }

            if ((i + j) == (n - 1)){
                secondary += mat[i][j];
            }
        }
    }

    let difference = principal - secondary;

    return difference;
}

let a = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
let result = matrik(a, 3);

console.log("Hasilnya adalah:", result);
  