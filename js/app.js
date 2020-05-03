// eslint-disable-next-line no-unused-vars
//Variables that store calculations of recipes
let riceOz,waterOz,oilOz,dRiceOz,dWaterOz,dOilOz,typeRice,listAmounts;
// eslint-disable-next-line no-unused-vars
//Variables that contain elements to store Oz amounts
let whiteRecipeVars,denteRecipeVars;
//On window load, access all elements needed to be modified on html
window.onload = () => {
    riceOz= 8,waterOz=16,oilOz=8;
    //listElements contains all Li and Ol objects
    // which is needed to be used to change ounce amounts
    listAmounts=document.getElementsByClassName(`recipe`)[0];
    whiteRecipeVars= [];
    whiteRecipeVars[0]= listAmounts.querySelector(`#r-ounce`);
    whiteRecipeVars[1]= listAmounts.querySelector(`#w-ounce`);
    whiteRecipeVars[2]= listAmounts.querySelector(`#o-ounce`);
    listAmounts = document.getElementsByClassName(`recipe`)[1];
    denteRecipeVars= [];
    denteRecipeVars[0]= listAmounts.querySelector(`#cr-ounce`);
    denteRecipeVars[1]= listAmounts.querySelector(`#cw-ounce`);
    denteRecipeVars[2]= listAmounts.querySelector(`#co-ounce`);
};
//Button click events
document.getElementById(`cali-button`).onclick = () => {
    document.getElementById(`cali-recipe`).hidden = false;
    document.getElementById(`white-recipe`).hidden = true;

};
document.getElementById(`white-button`).onclick = () => {
    document.getElementById(`cali-recipe`).hidden = true;
    document.getElementById(`white-recipe`).hidden = false;

};

//Unused Code... Deletable////////
document.getElementById(`oz-input`).onchange = () =>{
    calculateAmount();
    //
};
//////////////////////////////////

/*
Retrieve the type of rice selected
 */
function getTypeRice() {
    if (document.getElementById(`cali-recipe`).hidden == false) {
        typeRice = `cali`;

    } else if (document.getElementById(`white-recipe`).hidden == false) {
        typeRice = `white`;
    }
}

/*
Calculates the amount of ounces necessary based on which recipe is clicked...
 */
function calculateAmount() {
    getTypeRice();
    const input = document.getElementById(`oz-input`).value;
    if (typeRice==`white`) {
        calcRegular(input);
        whiteRecipeVars[0].textContent=riceOz;
        whiteRecipeVars[1].textContent=waterOz;
        whiteRecipeVars[2].textContent=oilOz;
    }
    else if(typeRice==`cali`)
    {
        calcDente(input);
        denteRecipeVars[0].textContent=dRiceOz;
        denteRecipeVars[1].textContent=dWaterOz;
        denteRecipeVars[2].textContent=dOilOz;

    }
    else{
        console.log(`Error in retrieving button pressed`);
    }
}
/*Calculates White Rice Amount*/
function calcRegular(input){
    riceOz=input;
    waterOz=input * 2;
    oilOz=input/2;
}
/*Calculates Dente Rice Recipe*/
function calcDente(input){
    dRiceOz=input;
    dWaterOz=input * 2-2;
    dOilOz=input/2-2;
}



