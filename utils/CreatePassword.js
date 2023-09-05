const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const createPassword = (length = 8, has_numbers = true, has_symbols = true) => {

    let chars = alpha;
    has_numbers ? chars += numbers : '';
    has_symbols ? chars += symbols : '';

    return generatePassword(length, chars);
};


function generatePassword(length, chars)
{
    let password = '';

    for (let index = 0; index < length; index++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return password;
}

module.exports = createPassword;