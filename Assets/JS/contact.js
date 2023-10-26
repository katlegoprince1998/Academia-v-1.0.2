function sendMail() {
  let Name=document.getElementById("name").value;
  let Email=document.getElementById("email").value;
  let Message=document.getElementById("message").value;

  var params = {
    name: Name,
    email: Email,
    message: Message
  };
if (Name==""||Email==""||Message=="") {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please ensure all values are entered',
   
  })
  
}
else{

  const serviceID ="service_ydftyfp";
  const templateID = "template_2lup10g";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Thank you!',
          text: 'Your enquiry or suggestion will be reviewed!',
         
        })

    })
    .catch(err=>console.log(err));
  }

}

