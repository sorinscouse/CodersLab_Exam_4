class Product {
  constructor(title, author, selector) {
    this.title = title;
    this.author = author;
    this.selector = selector;
  }

  updateInfo() {
    $(this.selector)
      .find(".title strong")
      .text(this.title);
    $(this.selector)
      .find(".author strong")
      .text(this.author);
  }
}

class Book extends Product {
  order() {
    console.log("Enter your delivery address!");
  }
}

class Ebook extends Product {
  download() {
    console.log(`Download... ${this.title}`);
  }
}

$(document).ready(() => {
  let ebook = new Ebook("A Darker Sky", "Ruben Eliasen", ".ebook");
  let book = new Book("The Girl on the Train", "Paula Hawkins", ".book");

  ebook.updateInfo();
  book.updateInfo();

  $(".ebook button").click(() => {
    ebook.download();
  });

  $(".book button").click(book.order);
});
