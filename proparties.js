const person={
    name : 'Maruf Hasan' ,
    age : 23 ,
    profession : ' developer',
    salary : 25000,
    married : false
}
console.log( person.name)
// ekhane .name just output name show korbe
const income = person.salary // ekhane .salary just output koto salary show korbe 2nd way
console.log(income)
// third way eyta try korba
console.log(person['age'])
const boys=  person['married']
console.log(boys)