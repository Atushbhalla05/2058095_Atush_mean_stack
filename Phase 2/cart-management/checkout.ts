//import { Item } from "./cart";
function showItems(){
    let myCartJson = sessionStorage.getItem('myCart')
    let myCart:Array <any> = new Array();
    if(myCartJson){
        myCart = JSON.parse(myCartJson);
    }

    let table = document.getElementById('table');
    let tableInfo:string = "<table style='border-width: 2px; border-style: solid;'><tr><th>Item</th><th>Price</th></tr>";
    console.log(myCart);
    let amount:number = 0;
    for(let i:number = 0; i < myCart.length; i++){
        console.log(myCart[i]);
       // let itemInfo = "<tr><td>${currItem.name}</td><td>$${currItem.price}</td></tr>" 
        let itemInfo = "<tr><td>" + myCart[i].name + "</td><td>$" + myCart[i].price + "</td></tr>"
        tableInfo += itemInfo;
        amount += myCart[i].price;
    }
    let endTable:string = "</table>"
    tableInfo += endTable;
    if(table){
        table.innerHTML = tableInfo;
    }
    let total = document.getElementById('total');
    if(total){
        total.innerText = '$' + amount.toString();
    }

}