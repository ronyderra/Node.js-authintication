const candies = [
    { id: 1, candy: " Lollypop" },
    { id: 1, candy: " Kifkef" },
    { id: 1, candy: " Oreo" },
    { id: 1, candy: " Ice-ream" },
    { id: 1, candy: " Loaker" },
]

//is for everyone
function getCandyShopDescription() {
    return " our candy shop is the best"
}

//only for registers
function getCandys() {
    return candies;
}

//only for admin
function addCandy(candy) {
    candy.id = candies.length + 1;
    candies.push(candy)
    return candy;
}

module.exports ={
    getCandyShopDescription ,
    getCandys ,
    addCandy,
}