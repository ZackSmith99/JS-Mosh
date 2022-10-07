/*
 let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

//Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address1.street = address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}


let blog = {
    title: 'Revenge of the Nuns',
    body: 
    `Four score, and seveny wimples ago, 
    our sisters in Christ were massacred
    by vicious vampire tax attorneys.  
    Now, vengence, nay Justice, will
    be ours!`,
    author: Mother Superior Charlemagne,
    views: viewcount,
    comments: {author: placeholder,
        body: body

    },
    isLive 



}


let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author: 'a', body: 'b' },
        { author: 'c', body: 'd' },
    ],
    isLive: true
};

console.log(post);



function Post() {
    this.title = 'a';
    this.body = 'b';
    this.author = 'c';
};

Post.call({});

console.log(Post)


let post = new Post('a', 'b', 'c')

console.log(post)



function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}


function Post('a', 'b', 'c',) {
    this.title;
    this.body;  
    this.author; 
};

Post.call({});

console.log(Post)

*/


let post = new Post('a', 'b', 'c')

console.log(post)



function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}


