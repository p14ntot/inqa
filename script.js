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

    if (!validateBreakTimes(brStart.value, brEnd.value)) {
      console.error("Invalid break times");
      alert(`invalid time at day ${day}`); 
      return;
    }
  
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

function validateBreakTimes(start, end) {
  return new Date(`01/01/2021 ${end}`) > new Date(`01/01/2021 ${start}`);
}

function validateOpTimes(start, end) {
  return new Date(`01/01/2021 ${end}`) > new Date(`01/01/2021 ${start}`);
}

function checkTimeSpan(opStart,opEnd,brStart,brEnd){
  const brStartDate = new Date(`01/01/2021 ${brStart}`);
  const brEndDate = new Date(`01/01/2021 ${brEnd}`);
  const opStartDate = new Date(`01/01/2021 ${opStart}`);
  const opEndDate = new Date(`01/01/2021 ${opEnd}`);

  return brStartDate >= opStartDate && brStartDate < opEndDate && brEndDate <= opEndDate;
}

const submitBtn=document.getElementById('my-form');
submitBtn.addEventListener("click", (event) => {
 
  event.preventDefault(); // Ακυρώνει την προκαθορισμένη συμπεριφορά του κουμπιού submit
  const day = ['mon','tue','wed','thu','fri'];
  
  day.forEach((day) =>{
    const findErrorOp=0;
    const findErrorBr=0;
    const findErrorTimeSpan=0;
    //check the value of op-start, op-ends when the user press submit
    const opStart = document.getElementById(`start-op-${day}`);
    const opEnd = document.getElementById(`end-op-${day}`);
    // const startOp = opStart.value;
    // const endOp = opEnd.value;
    // validateOpTimes(startOp,endOp);
    
    
    
    if (!validateOpTimes(opStart.value, opEnd.value) && findErrorOp===0) {
      console.error("Invalid break times");
      alert(`invalid time at day ${day}`); 
      findErrorOp+=1
      return;
    }
   

    //check the value of br-start, br-ends when the user press submit
    const brStart = document.getElementById(`break-start-${day}`);
    const brEnd = document.getElementById(`break-ends-${day}`);
    // const startValue = brStart.value;
    // const endValue = brEnd.value;
    // validateBreakTimes(startValue,endValue);

    if (!validateBreakTimes(brStart.value, brEnd.value) && findErrorBr===0) {
      console.error("Invalid break times");
      alert(`invalid time at day ${day}`);     
      findErrorBr+=1; 
      return;
      
    }
    
    if(!checkTimeSpan(opStart.value,opEnd.value,brStart.value,brEnd.value) && findErrorTimeSpan===0){
      console.log('false in time-span');
      alert(`time-span does not fit at day: ${day}`);
      findErrorTimeSpan+=findErrorTimeSpan;
    }

  }) 



  
    
  
});