// 0, 1, 1, 2, 3, 5, 8 


const fibonnicSeries = (num) => {
    if(num <2){
        return num 
    }

    let prev =0 ,  current =1, next
    for(let i=2; i<=num;i++){
        next = prev+ current
        prev = current
        current = next
    }
    return next
}

console.log(fibonnicSeries(6)) //8 yh bta rha h ki is position pr kya hoga number


