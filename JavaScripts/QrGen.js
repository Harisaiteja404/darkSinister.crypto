function generateRandomString(prefix, length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = prefix;
    for (let i = 0; i < length; i++) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return randomString;
}

function generateQRCode() {
    const taskID = generateRandomString('stx', 4); // Generates random Task ID like stx9874
    const bitcoinAccount = generateRandomString('', 8); // Generates random Bitcoin Account

    const qrData = `Task_id=${taskID}&Bitcoin_account=${bitcoinAccount}`;
    
    // Clear previous QR code
    document.getElementById("qrcode").innerHTML = "";

    // Generate new QR code
    new QRCode(document.getElementById("qrcode"), qrData);
}