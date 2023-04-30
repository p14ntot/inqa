const copyBtnOper = document.querySelectorAll(".to-all-oper");
const copyBtnBreak = document.querySelectorAll('.to-all-break');

//Antigrafi tis timis input se osa inputs exoun idio class
function copyOpToAll(day) {
    console.log(`Copying operation times for ${day}`);
  
    const opStart = document.getElementById(`start-op-${day}`);
    const opEnd = document.getElementById(`end-op-${day}`);
    const allOpStart = document.querySelectorAll(`input[name*="start-op-"]`);
    const allOpEnd = document.querySelectorAll(`input[name*="end-op-"]`);
    
  
    allOpStart.forEach((input) => {    
      input.value = opStart.value;
    });
  
    allOpEnd.forEach((input) => {     
      input.value = opEnd.value;
    });
  
}

function copyBreakToAll(day) {
    console.log(`Copying operation times for ${day}`);
  
    const brStart = document.getElementById(`break-start-${day}`);
    const brEnd = document.getElementById(`break-ends-${day}`);
    const allBrStart = document.querySelectorAll(`input[name*="break-start-"]`);
    const allBrEnd = document.querySelectorAll(`input[name*="break-ends-"]`);
    
  
    allBrStart.forEach((input) => {    
      input.value = brStart.value;
    });
  
    allBrEnd.forEach((input) => {     
      input.value = brEnd.value;
    });
  
}


// Προσθέτουμε event listener σε όλα τα κουμπιά "Apply to all days" των ωρών λειτουργίας
copyBtnOper.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const day = event.target.dataset.day;
    copyOpToAll(day);
  });
});

// Προσθέτουμε event listener σε όλα τα κουμπιά "Apply to all days" των διαλειμμάτων
copyBtnBreak.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const day = event.target.dataset.day;
    console.log("Clicked apply to all button for day:", day);
    copyBreakToAll(day);
  });
});


// =======================================================================================================================

