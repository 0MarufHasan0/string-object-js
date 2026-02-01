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
for(const prop in college){
    // console.log(prop)
    // console.log(college[prop])

}

const keys = Object.keys(college)
console.log(keys)

for(  const key of keys){
    console.log(key)
    console.log(key, college[key])

}