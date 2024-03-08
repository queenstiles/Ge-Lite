const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");



let formStepsNum = 0;

// nextBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     formStepsNum++;
//     updateFormSteps();
//     updateProgressbar();
//   });
// });


//NOTE!!!!!!!!!  WITH NOTY USE THIS COMMENTED CODE BELOW ELsE USE THE ALERT FUNCTION TYPE 🚨
//NOTE!!!!!!!!!  WITH NOTY USE THIS COMMENTED CODE BELOW ELsE USE THE ALERT FUNCTION TYPE 🚨
//NOTE!!!!!!!!!  WITH NOTY USE THIS COMMENTED CODE BELOW ELsE USE THE ALERT FUNCTION TYPE 🚨
//NOTE!!!!!!!!!  WITH NOTY USE THIS COMMENTED CODE BELOW ELsE USE THE ALERT FUNCTION TYPE 🚨
//NOTE!!!!!!!!!  WITH NOTY USE THIS COMMENTED CODE BELOW ELsE USE THE ALERT FUNCTION TYPE 🚨
//NOTE!!!!!!!!!  WITH NOTY USE THIS COMMENTED CODE BELOW ELsE USE THE ALERT FUNCTION TYPE 🚨
//NOTE!!!!!!!!!  WITH NOTY USE THIS COMMENTED CODE BELOW ELsE USE THE ALERT FUNCTION TYPE 🚨

       
// document.querySelector('.mov1').addEventListener('click', ()=>{
//  const v1 = document.querySelector(".vali").value;
//  const v2 = document.querySelector(".vali2").value;
//  const v3 = document.querySelector(".vali3").value;
//  const v4 = document.querySelector(".vali4").value;
//  if(v1 == ""){
//   notyf.error('all filed are required');
//  }else{
//    if(v2 == ""){
//     notyf.error('all filed are required');
//    }else{
//     if(v3 == ""){
//       notyf.error('all filed are required');
//     }else{
//       if(v4 == ""){
//         notyf.error('all filed are required');
//       }else{
//         formStepsNum++;
//         updateFormSteps();
//         updateProgressbar();
//       }
//     }
//    }
 
//  }
 
// });

// ONLY IF THERE IS NOTYF YOU CAN USE THIS ALERT FUNCTION SIDE 🚨
// ONLY IF THERE IS NOTYF YOU CAN USE THIS ALERT FUNCTION SIDE 🚨
// ONLY IF THERE IS NOTYF YOU CAN USE THIS ALERT FUNCTION SIDE 🚨
// ONLY IF THERE IS NOTYF YOU CAN USE THIS ALERT FUNCTION SIDE 🚨
// ONLY IF THERE IS NOTYF YOU CAN USE THIS ALERT FUNCTION SIDE 🚨
// ONLY IF THERE IS NOTYF YOU CAN USE THIS ALERT FUNCTION SIDE 🚨

document.querySelector('.mov1').addEventListener('click', ()=>{
  const v1 = document.querySelector(".vali").value;
  const v2 = document.querySelector(".vali2").value;
  const v3 = document.querySelector(".vali3").value;
  if(v1 == ""){
  notyf.error('all filed are required');
  }else{
    if(v2 == ""){
    notyf.error('all filed are required');
    }else{
     if(v3 == ""){
      notyf.error('all filed are required');
     }else{
      formStepsNum++;
         updateFormSteps();
         updateProgressbar();
     }
    }
  
  }
  
 });



document.querySelector('.mov2').addEventListener('click', ()=>{
  const vb1 = document.querySelector(".valib").value;
     if(vb1 == ""){
      notyf.error('all filed are required');
     }else{
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
     }
 });


prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});


function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}