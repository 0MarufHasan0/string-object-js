const college = {
    name : 'VNC',
    class : ['11', '12' ] ,
    events : ['Science fair', 'Bijoy dibos', '21 Feb'],
    unique :{
        color : 'Blue',
    } ,
    result :{
        gpa : 5,
        merit : 'top'

    }
}

// Merit er man change korte caile 

college.result.merit = 'top 10'

// ekhane sudhu color er value show korbe

console.log(college.unique.color)
console.log(college.result.merit)
// College  err vitor events e amra just bijoy dibos re  show korbo
college.events[1]= '16 December'
console.log(college.events[1])

// college er modhe kono  poperty deleted  korar jonno
delete college.events;
console.log (college)
