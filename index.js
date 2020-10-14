// let billTotal = Number(document.getElementById("totalAmount").value);
// let tip = (Number(document.getElementById("tip").value))/100;
// let people = Number(document.getElementById("people").value);


function displayTotal(total) {
    let totalDiv = document.getElementById('total');
    let newTotalDiv = `<div class='newDiv'>The Total is ${total}</div>`
    totalDiv.innerHTML = newTotalDiv
}


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let billTotal = Number(document.getElementById("totalAmount").value);
    let tip = (Number(document.getElementById("tip").value))/100;
    let people = Number(document.getElementById("people").value);
    
    let billTip = parseFloat(((billTotal * tip) + billTotal)/people).toFixed(2);
    let resultBillTip = people > 1 ? `$${billTip} per person` : `$${billTip}`
    
    displayTotal(resultBillTip)   
})




