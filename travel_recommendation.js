let seccion = [];
const seccion_name = ['Home', 'About us', 'Contact us'];
const ulNavBar = document.getElementById('navbarmenu');
generateMenu()

function generateMenu(){
    
    for (const section of seccion_name){
        const li_section = document.createElement('li');
        const goto_li = document.createElement('a');
        goto_li.textContent = section;
        li_section.appendChild(goto_li);
        ulNavBar.appendChild(li_section);
    }
}