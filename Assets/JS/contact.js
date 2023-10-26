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
  alert("Please enter all the details")
  
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
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));
  }

}

