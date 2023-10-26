const cardNumber = document.getElementById("card-number");
const userInput = document.getElementsByClassName("userInput");
const btn = document.getElementById("btn");
const form = document.getElementById("form");	

$("#btn").click(function() {
    let cardNumber = $("#card-number").val();
    let cardHolder = $("#card-holder").val();
    let expiry = $("#expiry").val();
    let cvv = $("#cvv").val();
    let amount = $("#amount").val();
    
    if (cardNumber == "" || cardHolder == "" || expiry == "" || cvv == "" || amount == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please ensure all values are entered',
       
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Thank you for your contribution',
        text: 'Donation has been sent',
       
      })
    }
}) 