// kono string k eksathe jora lagano

const first= 'abid';
const second='rakib';

// const fullName= first + second;
// const fullName= first+ ' ' + second;  // ekhane ' ' ey string  add kora mane majkhane gap dia : OUTPUT : abid  rakib asbe
const fullName= first.concat('').concat(second);  // ekhane concat  ey string  add kore  and .concat('') mane majkhane gap dia : OUTPUT : abid  rakib asbe

console.log(fullName);

consol.log( second.includes('b'))  // includes  mane kono kisu ekta okkhor ase kina ta jana  