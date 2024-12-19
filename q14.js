function createBook(title, author) {
  return {
    title: title,
    author: author,
    printInfo: () => {
      console.log(`Book:  ${title }, Author:  ${author}`);
    }
  };
}

const book = createBook("1984", "George Orwell");
book.printInfo();
