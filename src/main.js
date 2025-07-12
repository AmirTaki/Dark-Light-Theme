const toggle = document.getElementById("toggleDark")
const body = document.querySelector('body')


{/* <i class="bi bi-moon-fill"></i>/ */}

toggle.addEventListener("click", (e)=> {
  toggle.classList.toggle('bi-moon-fill')  

   if(toggle.classList.toggle("bi-brightness-high-fill")){
        body.style.backgroundColor = "white"
        body.style.color = "black"
        body.style.transition = '2s'
    }
    else {
        body.style.backgroundColor = "black"
        body.style.color = "white"
        body.style.transition = '2s'
    }
})