const toggle = document.getElementById("toggleDark")
const body = document.querySelector('body')


{/* <i class="bi bi-moon-fill"></i>/ */}

toggle.addEventListener("click", (e)=> {
  toggle.classList.toggle('bi-moon-fill')  
 
})