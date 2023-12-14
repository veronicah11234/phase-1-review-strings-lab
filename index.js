const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

const firstInitial = currentUser[0];
const shortGreeting = `Welcome, ${firstInitial}!`;

console.log('currentUser:', currentUser);
console.log('welcomeMessage:', welcomeMessage);
console.log('excitedWelcomeMessage:', excitedWelcomeMessage);
console.log('shortGreeting:', shortGreeting);

module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting,
};
