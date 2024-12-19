function createLibrary(name,author) {
  return  book={
  name ,
  author,
 detail:function(){
    return {name:this.name,author:this.author};
  },
  removebook:function(name){
    return book.name.delete
  }
}
}

const item = createLibrary("Laptop", "Electronics");
console.log(item.detail());
console.log(item.removebook());
const library = createLibrary();

const book1 = book("To Kill a Mockingbird", "Harper Lee");
const book2 = book("1984", "George Orwell");

createLibrary.book(book1);
createLibrary.book(book2);

createLibrary.detail();


createLibrary.removeBook("1984");
createLibrary.detail();
