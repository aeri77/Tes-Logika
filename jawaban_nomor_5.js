// 5. Buatlah function untuk menghasilkan deret dan jumlah bola memantul dengan input ketinggian bola pertama kali dilempar. Jika diketahui bola memantul setengah dari ketinggiannya dan jika jatuh dari ketinggian kurang atau sama dengan 0.5 meter bila tidak memantul lagi. 

let dropList = []
throwingBall = (height) => {
    if(height <= 0.5){
        return dropList
    } else {
        let currentHeight = height / 2
        let heightFixed = currentHeight.toFixed(1)
        dropList.push(heightFixed)
        throwingBall(heightFixed)
        return dropList
    }
}

console.log(`Jika Bola Memantul setinggi 100m maka pantulannya = ${throwingBall(100)}`)