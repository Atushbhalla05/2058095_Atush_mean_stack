
class Item{
    constructor(public name: string,public price:number){ 
        
    }
}
let myCart:Array <Item> = new Array();
sessionStorage.setItem("myCart" , JSON.stringify(myCart));


function addItem(name:string, price:number, image?:any){
    myCart = JSON.parse(sessionStorage.myCart);
    myCart.push(new Item(name, price));
    console.log(myCart.length);
    sessionStorage.setItem("myCart" , JSON.stringify(myCart))
    let cartSize = document.getElementById('cartSize');
    if(cartSize){
        cartSize.innerText = myCart.length.toString();
    } 
}

   

