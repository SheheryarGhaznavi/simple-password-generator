const program = require('commander');
const log = console.log;
const createPassword = require('./utils/CreatePassword');

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

const password = createPassword(length, numbers, symbols);
log(password);