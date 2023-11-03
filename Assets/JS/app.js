

const cardNumber = document.getElementById("card-number");
const userInput = document.getElementsByClassName("userInput");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const btnDonateAmt = document.querySelector('#amount');

$("#btn").click(function () {
  let cardNumber = $("#card-number").val();
  let cardHolder = $("#card-holder").val();
  let expiry = $("#expiry").val();
  let cvv = $("#cvv").val();
  let amount = $("#amount").val();
  
 

  

  if (cardNumber == "" || cardHolder == "" || expiry == "" || cvv == "" || amount == "" || cardNumber.length!=16 || expiry.substring(0,2) > 12 || 
  expiry.substring(2,4) < 23 || cvv.length != 3 || cardHolder.length < 3) {
  
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please ensure all values are entered or the card number has 16 digits',

    })
  } else {
    submitData();
   
    Swal.fire({
      icon: 'success',
      title: 'Thank you for your contribution',
      text: 'Donation has been sent',

    })
  }
})

function submitData(){
  let formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  const jasonData = JSON.stringify(data);
  console.log(jasonData);
}


// // navigation bar

const navItemHover = document.querySelectorAll('.nav-item');

navItemHover.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.color = 'black';
  });

  item.addEventListener('mouseout', () => {

    item.style.color = '#808000'; // Restore the background color on mouseout

  });
});
// Donate keyboard events
// Donate keyboard events
btnDonateAmt.addEventListener('keydown', function (e) {
	let cardNumber = $('#card-number').val();
	let cardHolder = $('#card-holder').val();
	let expiry = $('#expiry').val();
	let cvv = $('#cvv').val();
	let amount = $('#amount').val();

	if (e.key === 'Enter') {
		e.preventDefault();
    if (
      cardNumber == '' ||
      cardHolder == '' ||
      expiry == '' ||
      cvv == '' ||
      amount == '' ||
      cardNumber.length != 16 ||
      expiry.substring(0, 2) > 12 ||
      expiry.substring(2, 4) < 23 ||
      cvv.length != 3
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please ensure all values are entered or the card number has 16 digits',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Thank you for your contribution',
        text: 'Donation has been sent',
      });
    }
	}
	
});


////////////////////////////////////////////////////////////////
//charts
