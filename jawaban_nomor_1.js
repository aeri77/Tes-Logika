// 1. Buatlah sebuah function untuk menghasilkan deret bilangan prima. Kemudian implementasikan
// function tersebut untuk menghasilkan deret berikut ini :
// Contoh :
// Bilangan Prima : 2, 3, 5, 7, 11, 13, ……
// Input n = 4
// Hasil = 0, 2, 5, 10
// Input n = 6
// Hasil = 0, 2, 5, 10, 17, 28

isPrime = (n) => {
    if ( n === 1) {
        return false;
    } else if( n === 2 ){
        return true;
    } else{
        for(let x = 2; x < n; x++){
            if(n % x === 0){
                return false
               }
            }
        return true
        }  
}
generateNumber = (startNumber, endNumber) => {
    let numberList = [] 
    for(i = startNumber; i < endNumber + 1; i++){
        numberList.push(i)
      }
    return numberList
}
generatePrime = (startNumber, endNumber) => {
    let numberList = generateNumber(startNumber, endNumber)
    let prime = []
    numberList.map(x =>{
            if (isPrime(x) === true){
                prime.push(numberList[numberList.indexOf(x)])
            }
        })
    return prime
}

inputN = (n) => {
    const prime = generatePrime(1,30) 
    let output = []
    for(let i = 0; i < n; i++){
        if(output.length === 0){
            output.push(0)
        } else {
            output.push(output[i - 1] + prime[i - 1])
        }
    }
    return output
}
console.log(`Bilangan Prima = ${generatePrime(1,120)}`)
console.log(`Input n = 4, Hasil = ${inputN(4)}`)
console.log(`Input n = 6, Hasil = ${inputN(6)}`)