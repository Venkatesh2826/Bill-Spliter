function SplitBill() {
  const billAmount = document.getElementById("billAmount").value;
  const noOfpersons = document.getElementById("noOfPersons").value;
  const splitbill = document.getElementById("output");
  const cgstbill = document.getElementById("cgst");
  const sgstbill = document.getElementById("sgst");
  const output =billAmount/noOfpersons;

  if (billAmount <= 0 || noOfpersons == 0) {
    alert("Enter the valid Amount");
  } 
  else if (isNaN(billAmount) || isNaN(noOfpersons)) {
    alert("Enter Valid Bill Amount and Number of People");
  } 
  else if (billAmount <= 0) {
    alert("Bill Amount cannot be negative");
  } 
  else if (billAmount > 0 && billAmount < 100) {
    cgstbill.innerHTML = `CGST: ZERO TAX`;
    sgstbill.innerHTML = `SGST: ZERO TAX`;
    splitbill.value =Math.round(output);
    

  }
   else if (billAmount > 100) {
    cgstbill.innerHTML = `CGST: ${billAmount * 0.09}`;
    sgstbill.innerHTML = `SGST: ${billAmount * 0.09}`;
    splitbill.value =Math.round(output);
    
  }
  else {
    splitbill.value =Math.round(output);
    
  }
}

function discount() {
  const billAmount = document.getElementById("billAmount").value;
  const splitbill = document.getElementById("output");
  const noOfpersons = document.getElementById("noOfPersons").value;
  const cgstbill = document.getElementById("cgst");
  const sgstbill = document.getElementById("sgst");
  if (billAmount > 0 && billAmount < 100) {
    const online = billAmount * 0.05;
    const totalAmount = billAmount - online;
    cgstbill.innerHTML = `CGST: ZERO TAX`;
    sgstbill.innerHTML = `SGST: ZERO TAX`;
    splitbill.value =Math.round(totalAmount/noOfpersons); 
    document.getElementById("billAmount").value ="";
    document.getElementById("noOfPersons").value= "";

}
else if (billAmount > 100) {
  const online = billAmount * 0.05;
  const totalAmount = billAmount - online;
  cgstbill.innerHTML = `CGST: ${totalAmount* 0.09}`;
  sgstbill.innerHTML = `SGST: ${totalAmount * 0.09}`;
  splitbill.value =Math.round(totalAmount/noOfpersons);
  document.getElementById("billAmount").value ="";
  document.getElementById("noOfPersons").value= "";
}
else{
  const online = billAmount * 0.05;
  const totalAmount = billAmount - online;
  splitbill.value = Math.round(totalAmount/noOfpersons);
  document.getElementById("billAmount").value ="";
  document.getElementById("noOfPersons").value= "";

}
}