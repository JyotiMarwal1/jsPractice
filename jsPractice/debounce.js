
// Debounce 2 argument accept krta h , ek function and time, 
// function - jis function ko hum call krna chahte h
// time - is function ko hum kitni der bad m call krna chahte h
// debounce function , ek function return krta h, jis m as setTimeout run krta h
// or hum setTimeout m jo function call krwana h vo and time pass kr dete h

let count =1;
function showCount(){
    count++;
    console.log("count", count)

}

function debounce(fn, time){
    return function(){
        setTimeout(fn, time)
    }
}

let showCountD = debounce(showCount, 4000)
showCountD()