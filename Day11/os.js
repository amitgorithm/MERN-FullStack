const os = require('os');

console.log(os.homedir());
console.log(os.uptime()/60);
console.log(os.platform());

console.log(os.release());
console.log(os.freemem());
console.log("The total memory in bytes is ",os.totalmem())

const user = os.userInfo();
console.log(user);

console.log(os.hostname());