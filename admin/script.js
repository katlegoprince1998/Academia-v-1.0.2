const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI;
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

// ///////////////////////////////////////////////////////////////////////////////////////



let sideBarButtons = document.querySelectorAll(".sublink")
console.log(sideBarButtons)

let divContainer =document.querySelectorAll(".dash-right")
console.log(divContainer)

let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")


btn1.addEventListener(("click"),()=>{

switchButton(0,0)
})

btn2.addEventListener(("click"),()=>{

  switchButton(1,1)
  })

  btn3.addEventListener(("click"),()=>{

    switchButton(2,2)
    })
    btn4.addEventListener(("click"),()=>{

      switchButton(3,3,)
      })
   

      
function switchButton(divSelected,buttonSelected)
{
    sideBarButtons.forEach(element => {
      element.classList.remove("active")
    });

    sideBarButtons[buttonSelected].classList.add("active")

    divContainer.forEach(element => {
      element.classList.remove("active")
    });





    divContainer[divSelected].classList.add("active")
}


