//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

var favoriteThings = {
    band: "Of Mice & Men",
    food: "Sushi",
    person: "Kellin",
    book: "The Phoenix Project",
    movie: "The Wolf of Wallstreet",
    holiday: "Christmas"
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "BMW M3";

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThings.food = "Lettuce";

favoriteThings.book = "50 Shades of Gray";

//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);

alert(favoriteThings.book);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

for(var key in user) {
    if(!user[key]) {
        delete user[key];
    }
}

//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = 'Casey Fronk';
user.username = 'caseyfronk';

//Now console.log your object and make sure it looks right.

console.log(user);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

var methodCollection = {
    
}

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

methodCollection.alertHello = function() {
    alert('hello');
}

methodCollection.logHello = function(msg) {
    console.log(msg);
}

//Now call your alertHello and logHello methods. 

methodCollection.alertHello();
methodCollection.log('hello');

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

function voweler(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    var result = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
        y: 0
    };
    for(var i = 0; i < str.length; i++) {
        for(var j = 0; j < vowels.length; j++) {
            if(str[i] === vowels[j]) {
                if(!result.hasOwnProperty(vowels[j])) {
                   result[vowels[j]] = 1;
                   } else {
                       result[vowels[j]]++;
                   }
            }
        }
    }
    for(var key in result) {
        if(!result[key]) {
            delete result[key];
        }
    }
    return result;
}

voweler("This is a test"); 