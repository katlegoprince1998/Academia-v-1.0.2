console.log("ashley");

let div = '';  
let html = '';

function copyToHtml(student) 
{
    let bookDiv=document.getElementById("adm")


    div=
    `
    <tr>
        <td>${student.Name}</td>
        <td>${student.Surname}</td>
        <td>${student.PhoneNum}</td>
        <td>${student.staus}</td>
      </tr>
    `
    html +=div;
    bookDiv.innerHTML=html
}function addEvents() {

  console.log("clicked")
  const storage = firebase.storage().ref("EventsCover")
  let startTime=document.getElementById("time").value;
  let endTime=document.getElementById("time2").value;
  let eventsCover = document.getElementById("image-file").files[0]
let speaker=document.getElementById("speaker").value;
let eventsDetails=document.getElementById("event_details").value;
let day=document.getElementById("day").value;
let eventName=document.getElementById("title").value;
let month=document.getElementById("month").value;



  
  // let moduleCover = document.getElementById("image-file").files[0]
  let today = new Date()
  let time = today.getTime()

  let metaData = {
    contentType: eventsCover.type

  }

  let name = time + " " + eventsCover.name

  let task = storage.child(name).put(eventsCover, metaData)

  task.on("state_changed", function progress(snapshot){
      
    let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

     document.getElementById("progress-el").value = percentage
     document.getElementById("percentage").innerHTML = "upload " + percentage.toFixed(0) + "%"
  })

  task.then((imageFile) => imageFile.ref.getDownloadURL()).then((url) =>{
   
    db.collection("Events").add({
      PhotoLink: url,
      Name:eventName,
      Day:day,
      Month:month,
      start_time:startTime,
      end_time:endTime,
      Speaker:speaker,
      event_detail:eventsDetails
     
    
    })
    .then(()=>{
      alert("Successfully added a event.")
    })
  })

}