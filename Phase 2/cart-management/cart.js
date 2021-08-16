var Item = /** @class */ (function () {
    function Item(name, price) {
        this.name = name;
        this.price = price;
    }
    return Item;
}());
var myCart = new Array();
sessionStorage.setItem("myCart", JSON.stringify(myCart));
function addItem(name, price, image) {
    myCart = JSON.parse(sessionStorage.myCart);
    myCart.push(new Item(name, price));
    console.log(myCart.length);
    sessionStorage.setItem("myCart", JSON.stringify(myCart));
    var cartSize = document.getElementById('cartSize');
    if (cartSize) {
        cartSize.innerText = myCart.length.toString();
    }
}
