function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let colorSetting = 2;
const x = document.getElementById('container');
const sizeButton =document.getElementById('Sides');
const bW =document.getElementById('B/w');
const rainbow =document.getElementById('Rainbow');
const dark =document.getElementById('Darker');
const reset = document.getElementById('Reset Color')
let size = 100;
sizeButton.addEventListener('click',() =>{
    do{
         size = parseInt(prompt("Please enter a number from 1 to 100 for the sides of the grid", ""), 10);
    }while(isNaN(size) || size > 100 || size < 1);
    removeAllChildNodes(x)
    createDiv(size)
})
bW.addEventListener('click',() => colorSetting =1)
rainbow.addEventListener('click',() => colorSetting =2)
dark.addEventListener('click',() => {
    (dark.textContent.includes('On')) ? dark.textContent ='Colors Gets Darker :Off':
    dark.textContent ='Colors Gets Darker :On';
})
reset.addEventListener('click',() => {
    removeAllChildNodes(x)
    createDiv(size)})
createDiv(size)

function createDiv(y){
    for(i =0;i <(y**2);i++){
    const newDiv = document.createElement('div')
    newDiv.classList.add('grid')
    newDiv.style.minHeight =((100)/(y)) + "%";
    newDiv.style.minWidth = ((100)/(y))+ "%";
    newDiv.setAttribute('data-interacted',false)
    newDiv.style.filter='brightness(100%)';


    newDiv.addEventListener('mouseenter', () => {
        if (colorSetting ===1 ){
        newDiv.style.backgroundColor ='black'
        }
        else if (colorSetting ===2 && newDiv.dataset['interacted'] === 'false'){
            newDiv.style.backgroundColor = randomHSLA()
        }
        else if (newDiv.dataset['interacted'] ==='true' && dark.textContent.includes("On")){
            newDiv.style.filter ='brightness(' + ((parseInt(newDiv.style.filter.replace(/[^\d.-]/g, '')))-10) +"%)";
        }


        newDiv.dataset['interacted'] =true;
    } )
    x.appendChild(newDiv);
}
}
function randomHSLA(){
    return `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`
}
