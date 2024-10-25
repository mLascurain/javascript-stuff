function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}
const harryPotter = new Book("Harry Potter", "J.K. Rowling", 400, true);
console.log(harryPotter.info());