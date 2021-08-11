//Manipulacion del las opciones radio del formulario

const OpcionRadio = document.querySelectorAll(".input-radio");

for(let a = 0; a < 3; a++){
    OpcionRadio[a].addEventListener("click", ()=>{
        let OptionCheck = OpcionRadio[a].firstElementChild;
        if(OptionCheck.checked){
            console.log(OptionCheck.value);
        }
    });
}

//Manipulacion del las opciones rango del formulario

const OpcionRange = document.querySelector(".form-input-range");

OpcionRange.addEventListener("click", ()=>{
    let OptionRangeText = document.querySelector(".form-input-range-text");

    if(OpcionRange.value == 1)
        OptionRangeText.innerHTML = "Conosco las bases";
    else if(OpcionRange.value == 2)
        OptionRangeText.innerHTML = "Tengo poco experiencia";
    else if(OpcionRange.value == 3)
        OptionRangeText.innerHTML = "Tengo experiencia";
    else if(OpcionRange.value == 4)
        OptionRangeText.innerHTML = "Tengo mucha experiencia";
    else
        OptionRangeText.innerHTML = "Soy un experto";
});

//Manipulacion del las opciones rango del formulario

const OptionCheckBox = document.querySelectorAll(".input-checkbox");

for(let a = 0; a < 2; a++){
    OptionCheckBox[a].addEventListener("click", ()=>{
        let OptionRangeText = document.querySelectorAll(".form-input-range-text");
    
        if(OptionCheckBox[0].checked && OptionCheckBox[1].checked){
            let OptionButton = document.querySelector(".form-input-submit");
            OptionButton.removeAttribute("disabled");
        }

        if(!OptionCheckBox[0].checked || !OptionCheckBox[1].checked){
            let OptionButton = document.querySelector(".form-input-submit");
            OptionButton.setAttribute("disabled", true);
        }
    });
}