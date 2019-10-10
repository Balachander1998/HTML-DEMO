var arr = new Array();
function addProduct(){
 var name =document.getElementById("name").value;
 var price =document.getElementById("price").value;
 var product = {productName:name,cost:price}

 arr.push(product);
 var json= JSON.stringify(arr);
 
console.log(json);
}