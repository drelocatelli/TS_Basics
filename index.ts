import { User } from './types/User';

function showWelcomeMessage(user : User) {
    return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
}

const user1 : User = {name: "Andressa", address: {state: "ES"}, email: "andressa@c.com"};

console.log(showWelcomeMessage(user1));