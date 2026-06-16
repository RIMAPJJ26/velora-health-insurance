function calculatePremium(){

const product =
document.getElementById("product").value;

let premium = "Rp50.000";

if(product==="Velora Smart Protect"){
premium="Rp100.000";
}

if(product==="Velora Family Shield"){
premium="Rp250.000";
}

if(product==="Velora Executive Care"){
premium="Rp500.000";
}

document.getElementById("premiumResult")
.innerHTML=
"Estimasi Premi: "+premium+"/bulan";
}
