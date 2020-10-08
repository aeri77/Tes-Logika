// 2. Buatlah function untuk meng-format angka/nominal?
// Function yang dibuat tidak boleh menggunakan function formatting yang sudah ada dalam Bahasa
// pemrograman (seperti DecimalFormat / NumberFormat (Java), Format (VB), dll) karena yang akan
// dinilai adalah bagaimana logika melakukan formatting angka.
// Contoh :
// Input = 2500000.90  menjadi 2,500,000.90
// Input = 1200.00  menjadi 1,200.00
// Input = 1200  menjadi 1,200.00

numberWithCommas = (n) => {
    let num = n.toString()
    let splitted = num.toString().split(".");
    let lastSlices = "00"
    splitted[0] = splitted[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let output = splitted.join(".")
    if (output.includes(".") && output[output.length - 1] !== ".")
    {
        lastSlices = num.slice(num.lastIndexOf('.') - num.lastIndexOf(num[num.length - 1]))
        if(lastSlices.length === 1){
            output = output.substring(output.lastIndexOf('.'),output.lastIndexOf(output[output.length])) + "." + lastSlices + "0"
            return output
        } else {
            output = output.substring(output.lastIndexOf('.'),output.lastIndexOf(output[output.length])) + "." + lastSlices + "0"
            return output
        }
    }
    else{
        if (output.includes(".")){
            lastSlices = "00"
            return output = output + lastSlices
        }
        lastSlices = ".00"
        return output = output + lastSlices
    }
}

console.log(`Input n = 2500000.90 , Menjadi -> ${numberWithCommas(2500000.90)}`)
console.log(`Input n = 1200.00 , Menjadi -> ${numberWithCommas(1200.00)}`)
console.log(`Input n = 1200 , Menjadi -> ${numberWithCommas(1200)}`)