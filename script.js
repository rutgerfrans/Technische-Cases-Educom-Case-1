import fetch from "node-fetch";

async function GetAPI(){
    const response = await fetch("https://data.buienradar.nl/2.0/feed/json", {mode: "no-cors"});
    const data = await response.json();
    console.log(data)
}

document.getElementById("zoekButton").addEventListener("click", GetAPI);
