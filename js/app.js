window.onload = () => {

}
document.getElementById(`cali-button`).onclick = () => {
    document.getElementById(`cali-recipe`).hidden = false;
    document.getElementById(`white-recipe`).hidden = false;

};
document.getElementById(`white-button`).onclick = () => {
    document.getElementById(`cali-recipe`).hidden = true;
    document.getElementById(`white-recipe`).hidden = false;
};


