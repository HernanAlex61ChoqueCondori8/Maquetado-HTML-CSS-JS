const OpcionRange = document.querySelector(".form-input-range");

console.log(OpcionRange);

OpcionRange.addEventListener("onmouseup",()=>{
    console.log(OpcionRange.value);
});

OpcionRange.onmouseup = function() {
    let TextRange = document.querySelector(".form-input-range-text");
    const RangeValueMoment = OpcionRange.value;

    if(RangeValueMoment == 1)
        TextRange.innerHTML = "Conosco las bases del tema";
    else if(RangeValueMoment == 2)
        TextRange.innerHTML = "Tengo poco experiencia";
    else if(RangeValueMoment == 3)
        TextRange.innerHTML = "Tengo experiencia";
    else if(RangeValueMoment == 4)
        TextRange.innerHTML = "Tengo mucha experiencia";
    else
        TextRange.innerHTML = "Soy un experto";
  };

const FormButton = document.querySelector("#form-input-submit");

FormButton.addEventListener("click",()=>{
    alert("Formulario enviado");
});

const OpcionCheck1 = document.querySelector("#form-input-checkbox1");
const OpcionCheck2 = document.querySelector("#form-input-checkbox2");

OpcionCheck1.addEventListener("click",()=>{
    
    if(OpcionCheck1.checked && OpcionCheck2.checked)
        FormButton.removeAttribute("disabled");
    else
        FormButton.setAttribute("disabled", "")
    
    console.log(OpcionCheck1.checked + " " + OpcionCheck2.checked);
});

OpcionCheck2.addEventListener("click",()=>{

    if(OpcionCheck1.checked && OpcionCheck2.checked)
        FormButton.removeAttribute("disabled");
    else
        FormButton.setAttribute("disabled", "");

    console.log(OpcionCheck1.checked + " " + OpcionCheck2.checked);
});


const OptionRadioH = document.querySelector("#form-input-radioH");
const OptionRadioC = document.querySelector("#form-input-radioC");
const OptionRadioJ = document.querySelector("#form-input-radioJ");

OptionRadioH.addEventListener("click",()=>{
    if(OptionRadioH.checked)
        console.log(OptionRadioH.checked);
});