//import { Item } from "./cart";
function showItems() {
    var myCartJson = sessionStorage.getItem('myCart');
    var myCart = new Array();
    if (myCartJson) {
        myCart = JSON.parse(myCartJson);
    }
    var table = document.getElementById('table');
    var tableInfo = "<table style='border-width: 2px; border-style: solid;'><tr><th>Item</th><th>Price</th></tr>";
    console.log(myCart);
    var amount = 0;
    for (var i = 0; i < myCart.length; i++) {
        console.log(myCart[i]);
        // let itemInfo = "<tr><td>${currItem.name}</td><td>$${currItem.price}</td></tr>" 
        var itemInfo = "<tr><td>" + myCart[i].name + "</td><td>$" + myCart[i].price + "</td></tr>";
        tableInfo += itemInfo;
        amount += myCart[i].price;
    }
    var endTable = "</table>";
    tableInfo += endTable;
    if (table) {
        table.innerHTML = tableInfo;
    }
    var total = document.getElementById('total');
    if (total) {
        total.innerText = '$' + amount.toString();
    }
}
