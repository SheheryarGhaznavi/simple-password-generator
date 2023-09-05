const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const createPassword = (length = 8, has_numbers = true, has_symbols = true) => {

    let chars = alpha;
    has_numbers ? chars += numbers : '';
    has_symbols ? chars += symbols : '';

    return chars;
}

module.exports = createPassword;