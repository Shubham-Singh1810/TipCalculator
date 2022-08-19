const tipcal = () => {
    let billAmount = document.getElementById("billAmount").value;
    let tipRate = document.getElementById("tipRate").value;
    let tip = Math.round(billAmount * (tipRate / 100));
    let total = tip + Number(billAmount);
    let sum = Math.round(total)
    document.getElementById("tipAmount").innerHTML = `Tip :  <span>${tip}</span`;
    document.getElementById("totalAmount").innerHTML =
      `Total Amount :   <span>${sum}</span>`;
  };
  const refresh = () => {
    window.location.reload("Refresh");
  };