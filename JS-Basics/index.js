/*
let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};





let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}



let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const createAddress = new CreateAddress('a', 'b', 'c')
console.log(CreateAddress[street])


///this also works
console.log(createAddress('a', 'b', 'c'))

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}



function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address = new CreateAddress('a', 'b', 'c');

console.log(address)
*/

///let address = createAddress('a', 'b', 'c');

let address = new Address('a', 'b', 'c');

console.log(address)


//factory function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}


//constructor function
function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

