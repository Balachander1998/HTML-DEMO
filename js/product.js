var arr = new Array();
$(document).ready(function(){
 $("#but1").click(function addProduct(){
    var name= $("#name").val();
    var price =parseInt($("#price").val());
    var product = {productName:name,cost:price}
    arr.push(product);
    let json= JSON.stringify(arr);
    console.log(json);
 })
});
