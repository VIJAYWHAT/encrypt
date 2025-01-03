function encryptText() {
    const plainText = document.getElementById('plainText').value;
    const secretKey = document.getElementById('secretKey').value;
    if (!plainText || !secretKey) {
        alert('Please provide both plain text and secret key.');
        return;
    }
    const encrypted = CryptoJS.AES.encrypt(plainText, secretKey).toString();
    document.getElementById('encryptedText').value = encrypted;
}

function decryptText() {
    const encryptedText = document.getElementById('encryptedTextInput').value;
    const secretKey = document.getElementById('secretKey').value;
    if (!encryptedText || !secretKey) {
        alert('Please provide both encrypted text and secret key.');
        return;
    }
    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedText, secretKey).toString(CryptoJS.enc.Utf8);
        if (!decrypted) {
            throw new Error();
        }
        document.getElementById('decryptedText').value = decrypted;
        
        // Clear the secret key field after decryption
        document.getElementById('secretKey').value = '';
    } catch {
        alert('Decryption failed. Please check the secret key and encrypted text.');
    }
}

// Hide and show the secret key
document.getElementById('toggleSecretKey').addEventListener('click', function () {
    const secretKeyInput = document.getElementById('secretKey');
    const toggleIcon = this;

    if (secretKeyInput.type === 'password') {
        secretKeyInput.type = 'text';
        toggleIcon.textContent = '👁️'; 
    } else {
        secretKeyInput.type = 'password';
        toggleIcon.textContent = '🙈'; 
    }
});


// Copy Encrypted text to clipboard
document.getElementById('copyButton').addEventListener('click', function () {
    const encryptedText = document.getElementById('encryptedText');
    encryptedText.select();
    navigator.clipboard.writeText(encryptedText.value).then(() => {
        showSnackbar("Encrypted text copied!");
    });
});

// Copy decrypted text to clipboard
document.getElementById('copyButton').addEventListener('click', function () {
    const encryptedText = document.getElementById('decryptedText');
    encryptedText.select();
    navigator.clipboard.writeText(encryptedText.value).then(() => {
        showSnackbar("Decrypted text copied!");
    });
});

// Function to display the snackbar
function showSnackbar(message) {
    const snackbar = document.getElementById('snackbar');
    snackbar.textContent = message;
    snackbar.className = "show";

    // Hide the snackbar after 3 seconds
    setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}
