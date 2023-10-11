window.addEventListener('load', ()=>{
  const sections = document.querySelectorAll('section');
  const nav = document.querySelectorAll('.nav__item a');
  console.log(sections)
  console.log(nav)
  window.addEventListener('scroll', ()=>{
    let current = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(Math.floor(window.scrollY) >= sectionTop - 10){
        current = section.getAttribute('class')
      }
    })
  
    nav.forEach(a => {
      a.classList.remove("active");
      if(a.getAttribute("value") == current.substring(0, a.getAttribute("value").length)) {
        a.classList.add("active");
      }
    })
  })
})