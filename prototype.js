class user {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    sayTheName(){
        return 'my name is '+this.firstName+" "+this.lastName
    }
}

user.prototype.sayLastName = function(){
    return "my last name is "+this.lastName
}

const obj1 = new user("mohan", "patel")
const obj2 = new user("Seema", "John")

console.log(obj1.firstName, obj1.lastName)
console.log(obj2.firstName, obj2.lastName)
console.log(obj1.sayLastName())
// console.log(obj2.sayTheName())
console.log(obj2.sayLastName())