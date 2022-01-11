const PlanetName = ["Arnuu","Agit B-II","Anehim","Jeq Abdo"];
const PlanetType = ["Desert","Water","Lava","Paradise","Rock","snow"];

function Generate() {
    let Container = document.getElementById("container");

    let RanName = Math.floor(Math.random() * PlanetName.length);

    let RanType = Math.floor(Math.random() * PlanetType.length);

    let RanSize = Math.floor(Math.random() * 90000);


    let PlanetNameP = document.createElement("p");
    let PlanetTypeP = document.createElement("p");
    let PlanetSizeP = document.createElement("p");

    PlanetNameP.textContent = "Planet Name: " + PlanetName[RanName];
    PlanetTypeP.textContent = "Planet Type: " + PlanetType[RanType];
    PlanetSizeP.textContent = "Planet Size: " + RanSize + " Miles in Diameter";


    Container.appendChild(PlanetNameP);
    Container.appendChild(PlanetTypeP);
    Container.appendChild(PlanetSizeP);

    console.log(RanName);
}