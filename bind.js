const book = {title: 'Js'};

function setPrice(price){
    this.price = price;
}

setPrice.apply(book,[1000]);
setPrice.call(book,2000);
const changePrice = setPrice.bind(book)
changePrice(3000);
console.log(book);