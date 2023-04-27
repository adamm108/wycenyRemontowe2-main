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
const points = document.getElementById('points')
add3.addEventListener('click', () => {

    let lenghtValue = lenght.value;
    let heightValue = height.value;
    let bathWidth = bathroomWidth.value;
    let bathLenght = bathroomLenght.value;
    let wallResult = parseFloat(lenghtValue) * parseFloat(heightValue);
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
        var totalcost= 0
        const tilescrush = document.getElementById('tilescrush');
        if(tilescrush.checked){
            console.log("Cena za skuwanie płytek to: " ) 
            const tileCrushTotal = parseFloat(wallFinalValue + BathFloorResultTotal);
            console.log(tileCrushTotal)
            const tileCrushValue = dataBase[0] * tileCrushTotal
            const tilescrushspan = document.getElementById("tilescrushspan")
            tilescrushspan.innerText = tileCrushValue
    totalcost = totalcost + tileCrushValue
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
            totalcost = totalcost + plasterTotal
    
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
            totalcost = totalcost + groundTotalValue
        
    
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
            totalcost = totalcost + tilesTotalValue
        
    
        }
        else{
            console.log("false")
        }
        const Ceiling = document.getElementById('ceiling');
        if(Ceiling.checked){
            console.log("cena za sufit to: " ) 
            const ceilingTotal =  parseFloat( BathFloorResultTotal);
            const ceilingTotalValue = dataBase[4] * ceilingTotal
            const ceilingspan = document.getElementById("ceilingspan")
            ceilingspan.innerText = ceilingTotalValue;
            totalcost = totalcost + ceilingTotalValue
        
    
        }
        const Bath = document.getElementById('bath');
        if(Bath.checked){
            console.log("Cena za wannę   to: " ) 
            const bathTotalValue = dataBase[7] ;
            const bathspan = document.getElementById("bathgspan")
            bathspan.innerText = bathTotalValue;
            totalcost = totalcost + bathTotalValue
        
    
        }
        const Pool = document.getElementById('pool');
        if(Pool.checked){
            console.log("Cena za brodzik   to: " ) 
            const poolTotalValue = dataBase[8] ;
            const bathspan = document.getElementById("poolspan")
            bathspan.innerText = poolTotalValue;
            totalcost = totalcost + poolTotalValue
        
    
        }
        else{
            console.log("false")
        }
        const Frame = document.getElementById('framesite');
        if(Frame.checked){
            console.log("Cena za  stelaż : " ) 
            const FrameTotal = dataBase[9] ;
            const Framespan = document.getElementById("Framespan")
            Framespan.innerText = FrameTotal
            totalcost = totalcost + FrameTotal
        
    
        }
        else{
            console.log("false")
        }
        const Toilet = document.getElementById('Toilet');
        if(Toilet.checked){
            console.log("Cena za  miskę : " ) 
            const toiletotal = dataBase[10] ;
            const toiletspan = document.getElementById("Wcspan")
            toiletspan.innerText = toiletotal
            totalcost = totalcost + toiletotal
        
    
        }
        else{
            console.log("false")
        }
        

    const electric = document.getElementById('electricity');
    const electricvalue = electric.value;
    if(electricvalue > 0){
        console.log("Punkty elektryczne") 
        const electrictotal = parseFloat(dataBase[5] * electricvalue) ;
        const electricspan = document.getElementById("electricspan")
        electricspan.innerText = electrictotal
        totalcost = totalcost + electrictotal
        console.log(electrictotal)
}
const hydraulic = document.getElementById('hydraulics');
const hydraulicvalue = hydraulic.value;
if(hydraulicvalue > 0){
    console.log("Punkty hydrauliczne") 
    const hydraulictotal = parseFloat(dataBase[6] * hydraulicvalue) ;
    const hydraulicspan = document.getElementById("hydraulicspan")
    hydraulicspan.innerText = hydraulictotal
    totalcost = totalcost + hydraulictotal
    console.log(hydraulictotal)
}

    const finalcost= document.getElementById("finalCost") 
        const Tcost =document.getElementById("Tcost")
        Tcost.innerText = totalcost
        console.log(totalcost)

  
});}

)


