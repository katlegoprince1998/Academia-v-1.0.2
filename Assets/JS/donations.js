
console.log("ashley")
let count=0;
function Donate() {
    let cardNo=document.getElementById("cardNUm").value;
    let cardholder=document.getElementById("cardHolder").value;
    let amount=document.getElementById("amount").value;
    count++;
   
        db.collection("Donations").add({
         CardNumber:cardNo,
         cardHolder:cardholder,
         Amount:amount
        
        })
        .then(()=>{
          
            console.log(count);
          alert("Successfully donated to the school.")
        })
     
    
   
}