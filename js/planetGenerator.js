const PlanetName = ["Arnuu","Agit B-II","Anehim","Jeq Abdo","HistenBurg","Ven 8","Paige"];
const PlanetType = ["Desert","Water","Lava","Paradise","Rock","Snow"];
const PlanetImg = ["/images/DesertPlanet.png","/images/WaterPlanet.png","/images/LavaPlanet.png","/images/ParadisePlanet.png","/images/RockPlanet.png","/images/SnowPlanet.png"];

function Generate() {

    let Container = document.getElementById("container");

    let RanName = Math.floor(Math.random() * PlanetName.length);

    let RanType = Math.floor(Math.random() * PlanetType.length);

    let RanSize = Math.floor(Math.random() * 60000);

    let RanAlienNum = Math.floor(Math.random() * 10);


    let PlanetNameP = document.getElementById("PlanetNameP");
    let PlanetTypeP = document.getElementById("PlanetTypeP");
    let PlanetSizeP = document.getElementById("PlanetSizeP");
    let PlanetImage = document.getElementById("PlanetImage");
    let SpeciesAmount = document.getElementById("SpeciesAmount");

    PlanetImage.className = "PlanetImg";

    PlanetNameP.textContent = "Planet Name: " + PlanetName[RanName];
    PlanetImage.setAttribute("src",PlanetImg[RanType]);
    PlanetTypeP.textContent = "Planet Type: " + PlanetType[RanType];
    PlanetSizeP.textContent = "Planet Size: " + RanSize + " Miles in Diameter";
    SpeciesAmount.textContent = "Amount of Intelligent Life forms on the Planet: " + RanAlienNum;



    console.log(RanName);

    
}
