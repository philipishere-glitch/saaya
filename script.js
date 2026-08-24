const modal=document.getElementById('modal');
const donorForm=document.getElementById('donorForm');
const orgForm=document.getElementById('orgForm');
const modalTitle=document.getElementById('modalTitle');
const modalIntro=document.getElementById('modalIntro');
const submitButton=document.getElementById('submitButton');
function openForm(type){modal.classList.add('open');document.body.style.overflow='hidden';if(type==='organization'){donorForm.style.display='none';orgForm.style.display='grid';modalTitle.textContent='Submit a need';modalIntro.textContent='Tell Saaya’s Toy Box what your organization could genuinely use.';submitButton.textContent='Submit request'}else{donorForm.style.display='grid';orgForm.style.display='none';modalTitle.textContent='Match a gift';modalIntro.textContent='Tell us what you would like to give and we’ll connect it to a real need.';submitButton.textContent='Find a match'}}
function closeForm(){modal.classList.remove('open');document.body.style.overflow=''}
function demoSubmit(e){e.preventDefault();alert('Thank you. This is a design concept, so nothing has been submitted yet.');closeForm()}
modal.addEventListener('click',e=>{if(e.target===modal)closeForm()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeForm()});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');observer.unobserve(entry.target)}})},{threshold:.13});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
window.addEventListener('scroll',()=>{const photo=document.querySelector('.hero-photo img');if(photo&&window.innerWidth>900){const y=Math.min(window.scrollY*.025,10);photo.style.transform=`scale(1.02) translateY(${y}px)`}});
