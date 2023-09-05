const chalk = require('chalk');
const program = require('commander');
const clipboardy = require('clipboardy');
const log = console.log;
const createPassword = require('./utils/CreatePassword');
const savePassword = require('./utils/SavePassword');

program
    .version('1.0.0')
    .description('Simple Password Generator');

// program
//     .command('generate')
//     .action(
//         () => {
//             log('Generated');
//         }
//     )
//     .parse();


program
    .option('-l, --length <number>', 'Length of a password', 8)
    .option('-s, --save', 'Save password to passwords.txt')
    .option('-nn, --no-numbers', 'Remove numbers')
    .option('-ns, --no-symbols', 'Remove symbols')
    .parse();


const { 
    length,
    save,
    numbers,
    symbols
} = program.opts();

// Creating password
const password = createPassword(length, numbers, symbols);

// Copy to Clipboard
clipboardy.writeSync(password);

// Saving password to file
if (save) savePassword(password)

// Printing output
log( chalk.blue('Generated Password : ') + chalk.bold(password) );
log( chalk.yellow('Password copied to clipboard') );