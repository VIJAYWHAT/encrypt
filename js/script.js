// Function to encrypt the plain text using AES encryption
function encryptText() {
    const plainText = document.getElementById('plainText').value; // Get plain text input
    const secretKey = document.getElementById('secretKey').value; // Get secret key input

    // Validate if inputs are provided
    if (!plainText || !secretKey) {
        alert('Please provide both plain text and secret key.');
        return;
    }

    // Encrypt the plain text using the secret key
    const encrypted = CryptoJS.AES.encrypt(plainText, secretKey).toString();
    document.getElementById('encryptedText').value = encrypted; // Display encrypted text
}

// Function to decrypt the encrypted text using AES decryption
function decryptText() {
    const encryptedText = document.getElementById('encryptedTextInput').value; // Get encrypted text input
    const secretKey = document.getElementById('secretKey').value; // Get secret key input

    // Validate if inputs are provided
    if (!encryptedText || !secretKey) {
        alert('Please provide both encrypted text and secret key.');
        return;
    }

    try {
        // Decrypt the text using the secret key
        const decrypted = CryptoJS.AES.decrypt(encryptedText, secretKey).toString(CryptoJS.enc.Utf8);
        if (!decrypted) throw new Error(); // Handle incorrect decryption
        document.getElementById('decryptedText').value = decrypted; // Display decrypted text
        
        // Clear the secret key field after decryption
        document.getElementById('secretKey').value = '';
    } catch {
        alert('Decryption failed. Please check the secret key and encrypted text.');
    }
}

// Toggle visibility of the secret key input
document.getElementById('toggleSecretKey').addEventListener('click', function () {
    const secretKeyInput = document.getElementById('secretKey');
    const toggleIcon = this;

    // Toggle between password and text input types
    if (secretKeyInput.type === 'password') {
        secretKeyInput.type = 'text';
        toggleIcon.textContent = '👁️'; // Show eye icon when visible
    } else {
        secretKeyInput.type = 'password';
        toggleIcon.textContent = '🙈'; // Show closed eye icon when hidden
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

// Display feedback message using snackbar
function showSnackbar(message) {
    const snackbar = document.getElementById('snackbar');
    snackbar.textContent = message; // Set the message
    snackbar.className = "show"; // Show the snackbar

    // Hide the snackbar after 3 seconds
    setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}

// Enable Enter key to trigger encryption
document.getElementById('encryptionForm').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent form submission
        encryptText();           // Trigger encryption
    }
});