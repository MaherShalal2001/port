const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav= document.querySelector('.nav-lins');
    const navLinks = document.querySelectorAll(".nav-lins li");
    const top = document.querySelector('#top')
    const bb = document.querySelector('.bb')
    bb.classList.add('cc')

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = "";
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`
                console.log(link.style.animation);
            }
        })
        burger.classList.toggle("toggle")
    });


}
navSlide();