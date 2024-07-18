let balance = 0;

function showBalance() {
    displayMessage(`Your balance is ₹${balance.toFixed(2)}`);
}

function deposit() {
    const amount = prompt("Enter an amount to deposit:");
    if (amount === null || amount === "") {
        displayMessage("Deposit canceled or invalid amount.");
        return;
    }
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
        displayMessage("Invalid amount for deposit.");
        return;
    }
    balance += parsedAmount;
    updateBalance();
}

function withdraw() {
    const amount = prompt("Enter an amount to withdraw:");
    if (amount === null || amount === "") {
        displayMessage("Withdrawal canceled or invalid amount.");
        return;
    }
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
        displayMessage("Invalid amount for withdrawal.");
        return;
    }
    if (parsedAmount > balance) {
        displayMessage("Insufficient funds.");
        return;
    }
    balance -= parsedAmount;
    updateBalance();
}

function exit() {
    displayMessage("Thank you! Have a nice day!");
    document.getElementById("inputSection").style.display = "none";
}

function displayMessage(msg) {
    document.getElementById("message").textContent = msg;
}

function updateBalance() {
    document.getElementById("balanceDisplay").textContent = `Balance: ₹${balance.toFixed(2)}`;
    displayMessage(""); // Clear any previous messages
}

