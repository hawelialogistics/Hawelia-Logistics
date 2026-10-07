const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
if(menu){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))})}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav){nav.classList.remove('open');}});
