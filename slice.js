const address = 'andorkilla';
 const part = address.slice(2,5) ;  // slice holo   dhor andorkilla te 9 ta  index ase .ekhane tumi sudhu dor tuku output dekhate catso taile slice  use kore tumi 2 number
//  index theke 5 number index niba   ====> ekhane 2 number index theke start hobe and 5 number index er agay sesh hobe .  OUTPUT paba dor
 console.log(part)
 
const sentence='I am a good and hardworking person'
// console.log(sentence.split(' '))  // eyta vag   kore felbe
console.log(sentence.split('a')) // eyta a vag   kore felbe

const friends= ' Rahim ,  Korim,  Rakib  , Sobuj, Imran'
const  friend= friends.split(','); //  ekhane sob alada string asbe like 'Rahim' ,
console.log(friend) 

const realFriend= [' Rahim ,  Korim,  Rakib  , Sobuj, Imran'];
console.log(realFriend.join('|')); // .join kono string alada vag kora jabe
console.log(realFriend.join('-')); // .join kono string alada vag kora jabe
console.log(realFriend.join('_')); // .join kono string alada vag kora jabe