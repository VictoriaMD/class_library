//This is the parent class. This class shares getters and properties to the other classes.

class Media {
    constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = true;
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(title) {
        this._isCheckedOut = this.toggleCheckOutStatus() ;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) =>
         currentSum + rating);
        return ratingsSum /this.ratings.length;
    }

    addRating(rating) {
        this._ratings.push(rating);
    }
}

// This class takes getters and properties from class Media

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages = pages;
    }
}

// This class takes getters and properties from class Media

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
            this._runTime = runTime;
            this._director = director;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

// New class instance

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

// New class instance

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());