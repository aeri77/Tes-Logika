// 3. Buatlah function untuk menghasilkan format berikut ini :
// Contoh :
// N adalah panjang character
// Input N = 5 Input N = 5
// Input Nilai = 1 Input Nilai = 12.35
// Hasil = 00100 Hasil = 01235
// Input N = 10 Input N = 7
// Input Nilai = 350 Input Nilai = 215.3
// Hasil = 0000035000 Hasil = 0021530

// let input = 5
// let checked = 1
// let check = checked.toString()
// let checkedNew = check.split('.').join("");
// let lastSlices = 0

addingZero = (n , nilai) => {
    let nilaiString = nilai.toString()
    let nilaiNoPoint = nilaiString.split('.').join("");
    let lastSlices = 0
    if(nilaiString.includes(".")){
        lastSlices = nilaiString.slice(nilaiString.lastIndexOf('.') - nilaiString.lastIndexOf(nilaiString[nilaiString.length - 1])).length
    }
    
    let neededLength = n - nilaiNoPoint.length - lastSlices
    if(lastSlices == 2) {
        let i = 0
        while(i < neededLength + 2 ){
            i++
            nilaiNoPoint = "0" + nilaiNoPoint 
        }
        return nilaiNoPoint
    } else if ( lastSlices == 1) {
        let i = 0
        while(i < neededLength ){
            i++
            nilaiNoPoint = "0" + nilaiNoPoint 
        }
        return nilaiNoPoint = nilaiNoPoint + "0"
    } else {
        let i = 0
        while(i < neededLength - 2 ){
            i++
            nilaiNoPoint = "0" + nilaiNoPoint 
        }
        return nilaiNoPoint = nilaiNoPoint + "00"
    }
}

console.log(`Input N = 5, Input Nilai = 1 , Hasil = ${addingZero(n = 5, nilai = 1)}`)
console.log(`Input N = 10, Input Nilai = 350 , Hasil = ${addingZero(n = 10, nilai = 350)}`)
console.log(`Input N = 5, Input Nilai = 12.35 , Hasil = ${addingZero(n = 5, nilai = 12.35)}`)
console.log(`Input N = 7, Input Nilai = 215.3 , Hasil = ${addingZero(n = 7, nilai = 215.3)}`)
