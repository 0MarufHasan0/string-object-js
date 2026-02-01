const person={
    name : 'Maruf Hasan' ,
    age : 23 ,
    profession : ' developer',
    salary : 25000,
    married : false
}
 person.salary=30000;// ekhane 30000 hajar taka add hobe salary
 person['profession'] = 'web developer'
console.log( person)

// another way

const propName= 'profession'
person[propName] = 'dev'
console.log( person)