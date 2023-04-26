const pick = document.getElementById("pick");

const addwall = document.querySelector("button.addWall");
const add3 = document.getElementById("add3");
const add4 = document.getElementById("add4");
var lenght = document.getElementById("lenght");
var height = document.getElementById("height");
var result = document.getElementById("result");
var resultWindow = document.getElementById("WindowResult");
const BathFloorResult = document.getElementById("BathFloorResult");
var windowW = document.getElementById('windowwidth')
var windowH = document.getElementById('windowheight')
const windowFinal = document.getElementById('windowfinal')
const wallFinal = document.getElementById('wallfinal')
const bathroomWidth = document.getElementById('bathWidth')
const bathroomLenght = document.getElementById('bathLenght')

add3.addEventListener('click', () => {

    let lenghtValue = lenght.value;
    let heightValue = height.value;
    let bathWidth = bathroomWidth.value;
    let bathLenght = bathroomLenght.value;
    let wallResult = parseFloat(lenghtValue) * parseFloat(heightValue);
    result.textContent = wallResult;
    console.log(wallResult);
    let windowWidth = windowW.value;
    let windowHeight = windowH.value;
    let windowResult = parseFloat(windowWidth) * parseFloat(windowHeight);
    const BathFloorResultTotal = parseFloat(bathWidth) * parseFloat(bathLenght);
    BathFloorResult.textContent = BathFloorResultTotal;
    console.log(windowResult);
    windowFinal.innerText = windowResult;
 const wallFinalValue =parseFloat(wallResult) - parseFloat(windowResult);
    wallfinal.innerText = wallFinalValue
    add4.addEventListener('click', () => {
        const dataBase =[
            tileCrush =50,
            plaster = 30,
            ground =10,
            tiles =150,
            ceiling = 100,
            electricity= 30,
            hydraulics = 100,
            bath = 350,
            pool =400,
            framesite = 300,
            site = 150,
            mirror = 100
        ]
        const tilescrush = document.getElementById('tilescrush');
        if(tilescrush.checked){
            console.log("Cena za skuwanie płytek to: " ) 
            const tileCrushTotal = parseFloat(wallFinalValue + BathFloorResultTotal);
            console.log(tileCrushTotal)
            const tileCrushValue = dataBase[0] * tileCrushTotal
            const tilescrushspan = document.getElementById("tilescrushspan")
            tilescrushspan.innerText = tileCrushValue
    
        }
        else{
            console.log("false")
        }
        const Plaster = document.getElementById('plaster');
        if(Plaster.checked){
            console.log("Cena za tynkowanie to: " ) 
            const plasterTotal = dataBase[1] * wallFinalValue;
            const plasterspan = document.getElementById("plasterspan")
            plasterspan.innerText = plasterTotal
        
    
        }
        else{
            console.log("false")
        }
        const Ground = document.getElementById('ground');
        if(Ground.checked){
            console.log("Cena za gruntowanie to: " ) 
            const groundTotal = parseFloat(wallFinalValue + BathFloorResultTotal);
            console.log(groundTotal)
            const groundTotalValue = dataBase[2] * groundTotal
            const groundspan = document.getElementById("groundspan")
            groundspan.innerText = groundTotalValue;
        
    
        }
        else{
            console.log("false")
        }
        const Tiles = document.getElementById('Tiles');
        if(Tiles.checked){
            console.log("Cena za płytki to: " ) 
            const tilesTotal = parseFloat(wallFinalValue + BathFloorResultTotal);
            const tilesTotalValue = dataBase[3] * tilesTotal
            const tilespan = document.getElementById("tilespan")
            tilespan.innerText = tilesTotalValue;
        
    
        }
        else{
            console.log("false")
        }
    });
  
});


