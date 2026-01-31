const sentence=  ' I am learning Web Dev.'
//   const result = ' .veD beW gniinrael ma  I' ;


let reverse  = ''  ;     // eyta reverse e vumika palon korbe
for (  const letter of sentence){
    // console.log(letter);
    reverse=  letter + reverse ; 
    


}
console.log (  reverse)

// for  loop dia  reverse eyta ignore koro
let  rev = ''
for( let i=0  ; i <  sentence.length  ; i ++ ){
    // console.log (i )
    // console.log(sentence[i])
    const letter = sentence[i];
    rev =  letter + rev  ;
    console.log(rev);
}

// short cut
const reversed=  sentence.split('').reverse().join('');
