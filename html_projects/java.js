function change() {
    const bulb = document.getElementById('bulb');
    bulb.src = 'photos/light_on.png';
    bulb.style.border='5px dashed red';
}
function change1() {
    //was var instead of const - by intern
    const bulb = document.getElementById('bulb');
    bulb.src='photos/light_off.png';
    bulb.style.border='5px solid green';

}