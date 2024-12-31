# Encryption and Decryption Web App

This is a simple web-based application that allows users to encrypt and decrypt text using AES encryption, powered by the [CryptoJS](https://github.com/brix/crypto-js) library. It provides a user-friendly interface for encrypting plain text and decrypting encrypted text with a secret key.

## Features
- **Encrypt Text**: Enter plain text and a secret key to encrypt the text using AES encryption.
- **Decrypt Text**: Enter encrypted text and a secret key to decrypt the text back to its original form.
- **Toggle Password Visibility**: View or hide the secret key input using a toggle icon.
- **Copy to Clipboard**: Copy the encrypted or decrypted text to the clipboard for easy sharing or storage.
- **Snackbar Notifications**: Display messages when actions like copying text to the clipboard are completed.

## Requirements

- Web browser (Chrome, Firefox, Safari, etc.)
- No installation required, just open the HTML file in a browser.

## How to Use

1. **Encrypt Text**:
    - Enter your plain text into the "Plain Text" textarea.
    - Enter a secret key in the "Secret Key" input field.
    - Click the "Encrypt" button to get the encrypted text.
    - You can then copy the encrypted text using the 📋 icon.

2. **Decrypt Text**:
    - Visit the [Decryption Page](decrypt.html).
    - Enter the encrypted text you want to decrypt in the "Encrypted Text" field.
    - Enter the same secret key used during encryption.
    - Click the "Decrypt" button to get the decrypted text.

3. **Toggle Secret Key Visibility**:
    - You can view or hide the secret key input by clicking the "🙈" or "👁️" icon next to the input field.

4. **Copy to Clipboard**:
    - Click the 📋 icon next to the encrypted or decrypted text to copy it to your clipboard.

## Technologies Used
- **HTML**: Structure of the app.
- **CSS**: Styling the app for a clean user interface.
- **JavaScript**: Implementing encryption, decryption, and interactivity.
- **CryptoJS**: AES encryption and decryption.

## Files
- `index.html`: The main page for encryption.
- `decrypt.html`: The page for decrypting text.
- `styles.css`: The stylesheet for the app's layout and design.
- `script.js`: The JavaScript code for encryption, decryption, and other functionality.
- `crypto-js.min.js`: The minified CryptoJS library used for encryption and decryption.

## Example

### Encrypt Text:
- **Plain Text**: `Hello, World!`
- **Secret Key**: `mySecretKey`
- **Encrypted Text**: `U2FsdGVkX1+cD...` (Example encrypted output)

### Decrypt Text:
- **Encrypted Text**: `U2FsdGVkX1+cD...` (Paste the encrypted text)
- **Secret Key**: `mySecretKey`
- **Decrypted Text**: `Hello, World!`

## Contributing
Feel free to fork the repository and submit pull requests. Contributions are always welcome.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any questions or suggestions, feel free to open an issue or reach out via email.

