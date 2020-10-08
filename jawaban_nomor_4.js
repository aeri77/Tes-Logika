// 4. Buatlah function untuk menghasilkan jumlah huruf (tanpa pengulangan) dalam suatu kalimat. Contoh :  STRESS   Jumlah huruf yang ada adalah 4 (S T R E)  SELASA   Jumlah huruf yang ada adalah 4 (S E L A)  INTERNET  Jumlah huruf yang ada adalah 5 (I N T E R) 
 

wordCount = (n, string) => {
    let slice = [...string].slice(0,n)
    return `${n} (${slice.join(" ")})`
}

console.log(`STRESS -> Jumlah huruf yang ada adalah ${wordCount(n = 4, string = "STRESS")} `)
console.log(`SELASA -> Jumlah huruf yang ada adalah ${wordCount(n = 4, string = "SELASA")} `)
console.log(`INTERET -> Jumlah huruf yang ada adalah ${wordCount(n = 5, string = "INTERNET")} `)