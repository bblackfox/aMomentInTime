var moment = require('moment');
const chalk = require('chalk');

console.log(chalk.yellow.underline(moment().format('dddd')));

console.log(moment().format('H:mm'));



var hour = moment().format('H');

if (hour  < 12){
    console.log(chalk.blue.underline("Good Morning"));
} else if (hour < 17) {
    console.log(chalk.green.underline("Good Afternoon"));
} else {
    console.log(chalk.orange.underline("Good Evening"));
}

