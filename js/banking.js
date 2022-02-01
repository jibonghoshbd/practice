const depostiBtn = document.getElementById('deposit-button');
const withdrawBtn = document.getElementById('withdraw-button');


function getInputValue(inputId) {
    const inputFiled = document.getElementById(inputId);
    const value = parseFloat(inputFiled.value);
    inputFiled.value = '';
    return value;

}
function updateTotal(inputId, amount) {
    const depostiTag = document.getElementById(inputId);
    const previousDeopositAmount = parseFloat(depostiTag.innerText);
    const newDepositAmount = previousDeopositAmount + amount;
    depostiTag.innerText = newDepositAmount;
}
function updateBlance(amount, isAdding) {
    const balanceTag = document.getElementById('blance-amount');
    const previousBalanceAmount = parseFloat(balanceTag.innerText);
    let newBalance;
    if (isAdding) {
        newBalance = previousBalanceAmount + amount;
    } else {
        newBalance = previousBalanceAmount - amount;
    }
    balanceTag.innerText = newBalance;

}


depostiBtn.addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposti-total', amount);
        updateBlance(amount, true);
    }
})


withdrawBtn.addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    if (amount > 0) {
        updateTotal('widhdraw-total', amount)
        updateBlance(amount, false);
    }
})