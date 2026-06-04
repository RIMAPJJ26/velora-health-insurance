function sendMessage(){

const input =
document.getElementById("userInput");

const chat =
document.getElementById("chat-box");

const userMessage = input.value;

if(userMessage === "") return;

chat.innerHTML += `
<p><strong>Anda:</strong> ${userMessage}</p>
`;

let response =
"Silakan pilih Velora Smart Protect untuk perlindungan kesehatan komprehensif.";

if(userMessage.toLowerCase().includes("klaim")){
response =
"Klaim dapat diajukan melalui aplikasi Velora atau rumah sakit rekanan.";
}

if(userMessage.toLowerCase().includes("telemedicine")){
response =
"Velora menyediakan layanan telemedicine 24 jam melalui aplikasi.";
}

if(userMessage.toLowerCase().includes("premi")){
response =
"Premi mulai dari Rp150.000 per bulan sesuai usia tertanggung.";
}

chat.innerHTML += `
<p><strong>Velora AI:</strong> ${response}</p>
`;

input.value = "";

chat.scrollTop =
chat.scrollHeight;
}

document.getElementById("darkModeBtn")
.addEventListener("click",function(){
document.body.classList.toggle("dark");
});