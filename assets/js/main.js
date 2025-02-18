/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

// /* --------------- Dark Light Theme --------------- */
// document.addEventListener('DOMContentLoaded', function () {
//     const themeToggle = document.getElementById('theme-toggle');
//     const themeIcon = document.getElementById('theme-icon');
//     const body = document.body;

//     // Check for saved theme in localStorage
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         body.setAttribute('data-theme', savedTheme);
//         themeIcon.className = savedTheme === 'dark' ? 'bx bx-sun' : 'bx bx-moon';
//     }

//     // Toggle theme on icon click
//     themeToggle.addEventListener('click', function () {
//         const currentTheme = body.getAttribute('data-theme');
//         if (currentTheme === 'dark') {
//             body.setAttribute('data-theme', 'light');
//             themeIcon.className = 'bx bx-moon';
//             localStorage.setItem('theme', 'light');
//         } else {
//             body.setAttribute('data-theme', 'dark');
//             themeIcon.className = 'bx bx-sun';
//             localStorage.setItem('theme', 'dark');
//         }
//     });
// });


/*===== Contact form =====*/
let contactMeForm = document.getElementById("contactMeForm");

contactMeForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = contactMeForm.elements['name'].value;
  const email = contactMeForm.elements['email'].value;
  const jobDesc = contactMeForm.elements['jobDesc'].value;
  const message = contactMeForm.elements['message'].value;
  let messageText = `Hi, I'm ${name} and my email address is ${email}.`
  if(jobDesc) {
     messageText += ` I would like to discuss with you regarding a job offer and it's details are as follows:\n ${jobDesc}.`;
  }
  if(message) {
    messageText+= `\n Also, please find my comments as follows: \n ${message}`;
  }

  const encodedText = encodeURIComponent(messageText)
  const url = "https://wa.me/+918247634398?text=" + encodedText;
  window.open(url, '_blank')
})

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*===== Type SCROLL REVEAL ANIMATION =====*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Web Designer', 'Programmer', 'Open to Work'],
    typespeed: 20,
    backspeed: 20,
    backDelay: 2500,
    loop: true,
});