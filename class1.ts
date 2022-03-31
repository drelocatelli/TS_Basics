import { User } from './types/User';

const showWelcomeMessage = (user : User) => {
    return `Welcome ${user.name}, your e-mail is ${user.email}. ${(typeof user.address.city != 'undefined') ? `Your city is ${user.address.city}` : ''} and your state is ${user.address.state}`;
}

const user1 : User = {
    name: "John Doe", 
    address: {
        state: "US"
    }, 
    email: "John@doe.com"
};

console.log(showWelcomeMessage(user1));