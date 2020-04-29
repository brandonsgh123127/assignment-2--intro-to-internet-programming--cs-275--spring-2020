// eslint-disable-next-line no-unused-vars
let riceOz,waterOz,oilOz,dRiceOz,dWaterOz,dOilOz,typeRice,listAmounts;
// eslint-disable-next-line no-unused-vars
let caliRecipeVars,whiteRecipeVars;
window.onload = () => {
    riceOz= 8,waterOz=16,oilOz=8;
    listAmounts=document.getElementsByClassName(`recipe`)[0];
    caliRecipeVars= [];
    caliRecipeVars[0]= listAmounts.querySelector(`#r-ounce`);
    caliRecipeVars[1]= listAmounts.querySelector(`#w-ounce`);
    caliRecipeVars[2]= listAmounts.querySelector(`#o-ounce`);

};
document.getElementById(`cali-button`).onclick = () => {
    document.getElementById(`cali-recipe`).hidden = false;
    document.getElementById(`white-recipe`).hidden = false;
};
document.getElementById(`white-button`).onclick = () => {
    document.getElementById(`cali-recipe`).hidden = true;
    document.getElementById(`white-recipe`).hidden = false;
};
//unused
document.getElementById(`oz-input`).onchange = () =>{
    calculateAmount();
};
function getTypeRice() {
    if (document.getElementById(`cali-recipe`).hidden == false) {
        typeRice = `cali`;
    } else if (document.getElementById(`cali-recipe`).hidden == false) {
        typeRice = `white`;
    }
}

function calculateAmount() {
    getTypeRice();
    const input = document.getElementById(`oz-input`).value;
    if (typeRice==`cali`) {
        calcRegular(input);
        calcDente(input);
        caliRecipeVars[0].textContent=riceOz;
        caliRecipeVars[1].textContent=waterOz;
        caliRecipeVars[2].textContent=oilOz;
    }
    else if(typeRice==`white`)
    {
        calcRegular(input);
    }
    else{
        console.log(`Error in retrieving button pressed`);
    }
}

function calcRegular(input){
    riceOz=input;
    waterOz=input * 2;
    oilOz=input/2;
}
function calcDente(input){
    dRiceOz=input;
    dWaterOz=input * 2-2;
    dOilOz=input/2-2;
}



