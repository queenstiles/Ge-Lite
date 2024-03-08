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



document.querySelector('.mov1').addEventListener('click', ()=>{
 const v1 = document.querySelector(".vali").value;
 const v2 = document.querySelector(".vali2").value;
 const v3 = document.querySelector(".vali3").value;
 const v4 = document.querySelector(".vali4").value;
 if(v1 == ""){
  notyf.error('all filed are required');
 }else{
   if(v2 == ""){
    notyf.error('all filed are required');
   }else{
    if(v3 == ""){
      notyf.error('all filed are required');
    }else{
      if(v4 == ""){
        notyf.error('all filed are required');
      }else{
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
      }
    }
   }
 
 }
 
});

document.querySelector('.mov2').addEventListener('click', ()=>{
  const vb1 = document.querySelector(".valib").value;
  const vb2 = document.querySelector(".valib2").value;
  const vb3 = document.querySelector(".valib3").value;
  const vb4 = document.querySelector(".valib4").value;
  const vb5 = document.querySelector(".valib5").value;
  const vb6 = document.querySelector(".valib6").value;
  const vb7 = document.querySelector(".valib7").value;
  if(vb1 == ""){
    notyf.error('all filed are required');
   }else{
     if(vb2 == ""){
      notyf.error('all filed are required');
     }else{
      if(vb3 == ""){
        notyf.error('all filed are required');
      }else{
        if(vb4 == ""){
          notyf.error('all filed are required');
        }else{
        if(vb5 == ""){
          notyf.error('all filed are required');
        }else{
          if(vb6 == ""){
            notyf.error('all filed are required');
          }else{
            if(vb7 == ""){
              notyf.error('all filed are required');
            }else{
              formStepsNum++;
              updateFormSteps();
              updateProgressbar();
            }
          }
        }
        }
      }
     }
   
   }
  
 });


 document.querySelector('.mov3').addEventListener('click', ()=>{
  const vc1 = document.querySelector(".valic").value;
   const vc2 = document.querySelector(".valic2").value;
   const vc3 = document.querySelector(".valic3").value;
   const vc4 = document.querySelector(".valic4").value;
   const vc5 = document.querySelector(".valic5").value;
   if(vc1 == ""){
    notyf.error('all filed are required');
   }else{
     if(vc2 == ""){
      notyf.error('all filed are required');
     }else{
      if(vc3 == ""){
        notyf.error('all filed are required');
      }else{
        if(vc4 == ""){
          notyf.error('all filed are required');
        }else{
          if(vc5 == ""){
            notyf.error('all filed are required');
          }else{
            formStepsNum++;
            updateFormSteps();
            updateProgressbar();
          }
        }
      }
     }
   
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