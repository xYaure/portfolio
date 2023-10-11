window.addEventListener('load', ()=>{
  const sections = document.querySelectorAll('section');
  const nav = document.querySelectorAll('.nav__item a');
  const i = document.querySelectorAll('.nav__item a i');

  window.addEventListener('scroll', ()=>{
    let current = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(Math.floor(window.scrollY) >= sectionTop - 10){
        current = section.getAttribute('class')
      }
    })
  
    i.forEach(a => {
      if(a.getAttribute("value1") == current.substring(0, a.getAttribute("value1").length)) {
        a.setAttribute('class', `${a.getAttribute("value2")}-fill`)
        a.classList.add("active");
      } else {
        a.classList.remove("active");
        a.setAttribute('class', `${a.getAttribute("value2")}`)
      }
    });
  })
})