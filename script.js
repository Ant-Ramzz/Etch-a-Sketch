function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


const x = document.getElementById('container');
const sizeButton =document.getElementById('Sides')
let size = 100;
sizeButton.addEventListener('click',() =>{
    do{
         size = parseInt(prompt("Please enter a number from 1 to 100 for the sides of the grid", ""), 10);
    }while(isNaN(size) || size > 100 || size < 1);
    removeAllChildNodes(x)
    createDiv(size)
})

createDiv(size)

function createDiv(y){
    for(i =0;i <(y**2);i++){
    const newDiv = document.createElement('div')
    newDiv.classList.add('grid')
    newDiv.style.minHeight =((100)/(y)) + "%";
    newDiv.style.minWidth = ((100)/(y))+ "%";


    newDiv.addEventListener('mouseenter', () => {
        newDiv.style.backgroundColor ='black'
    } )
    x.appendChild(newDiv);
}
}
