const crypto = require('crypto');

// TODO: Salt?

// Defining algorithm
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const generateCipherAES = () => {
    return crypto.createCipheriv(
        'aes-256-cbc',
        Buffer.from(key),
        iv
    );
}

const encryptDataAES = (cipher, inText) => {
    return cipher.update(inText);
}

module.exports = {
    generateCipherAES,
    encryptDataAES
}

// Testing
console.log(generateCipherAES())