const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method to return the system uptime in seconds
const uptime = os.uptime();
console.log(`The system uptime is ${uptime / 60 / 60} hour(s)`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
};
console.log(currentOS);
