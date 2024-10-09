let seccion = [];
const seccion_name = [
    {text: 'Home', valor:null}, 
    {text: 'About us', valor: null}, 
    {text: 'Contact us', valor: null}
];
const ulNavBar = document.getElementById('navbarmenu');
const contenido = document.getElementById('contenedor_contenido');
generateMenu();
ulNavBar.addEventListener('click', handleMenuClick);

function handleMenuClick(event){
    console.log(event.target)
    const btn = event.target;
}


function generateMenu(){
    for (const section of seccion_name){
        const li_section = document.createElement('li');
        li_section.textContent = section.text;
        li_section.classList.add = 'menu'
        ulNavBar.appendChild(li_section);
    }
}