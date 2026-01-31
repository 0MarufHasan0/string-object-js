const school = ' Akbar Ali Govt college'
console.log(school)
console.log(school.toLowerCase()) //  ekhan .tolowercase() eyta sob okkhor k soto kore felbe
console.log(school.toUpperCase()) //  ekhan .toUpperCase() eyta sob okkhor k boro kore felbe


const sub =  ' Chemistry'
const book =  ' chemistry'
if(sub.toLocaleLowerCase() === book.toLocaleLowerCase()){
    console.log( 'i can read this book')
}

else{
    console.log('need to change this book')
}

// otput asbe before .tolowercase() ====> need to change this book . karon compare korte parbe na karon ekta boro hater okkhor ase ar ekta soto
// otput asbe after.tolowercase() added ====> need to change this book 




const drink =  ' water' 
const liquid =  'water   '
if(drink.trim() === liquid.trim()){  // ekhane .trim wide space re vanish kore dey
    console.log( 'i can drink')
}

else{
    
    console.log('i cant drink') // without . trim dile liquid er bam pase wide space thakai   ey output asebe .tara compare korte parbe na 
}
