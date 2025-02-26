const library = {
    books: {
        "Pather Panchali": { author: "Bibhutibhushan Bandyopadhyay", available: 3 },
        "Gitanjali": { author: "Rabindranath Ragore", available: 5 }
    },
    borrowBook: function(bookName) {
        if (this.books[bookName] && this.books[bookName].available > 0) {
            this.books[bookName].available--;
            console.log(`You borrowed ${bookName}.`);
        } else {
            console.log(`Sorry, ${bookName} is not available.`);
        }
    },
    returnBook: function(bookName) {
        if (this.books[bookName]) {
            this.books[bookName].available++;
            console.log(`You returned ${bookName}.`);
        } else {
            console.log(`Invalid book: ${bookName}.`);
        }
    }
};

library.borrowBook("Pather Panchali");
console.log(library.books["Gitanjali"].available);