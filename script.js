let nav_icon = document.querySelector(".nav-icon")
let navMenu = document.querySelector(".menu-nav")

nav_icon.addEventListener('click', function(e){
   

    if(navMenu.style.display == 'block'){
        navMenu.style.display = 'none'
    }else{
        navMenu.style.display = 'block'
    }
    
})