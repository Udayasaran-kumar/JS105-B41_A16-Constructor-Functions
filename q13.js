function createInventoryItem(name,category,price) {return{
  name ,
  category,
  price,
  describeItem:function(){
    return {name:this.name,category:this.category,price:this.price};
  },
  addItemDiscount:function(discount){
    console.log(`Discounted price is ${this.price-(this.price*discount/100)}`)
  }
}
}

const item = createInventoryItem("Laptop", "Electronics", 1500);
console.log(item.describeItem());
console.log(item.addItemDiscount(10));
