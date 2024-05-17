const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const titulo = document.getElementById('titulo-info');
const parrafo = document.getElementById('parrafo-info');

// Toggle lista idiomas
idiomaActual.addEventListener('click',()=>{
    listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click',()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        establecerIdioma(idioma);
    });
})

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `banderas/${idioma}.svg`;
    switch (idioma) {
        case 'usa':
            titulo.textContent = 'BorealTurismo';
            parrafo.textContent = 'Welcome, we are BorealTurismo, a tourism company with 5 years of experience, located in the south of Chile. Our office is located in Puerto Varas, but we tour much of the south. If you want to immerse yourself and discover the south of this beautiful country, you have come to the right place. For any questions you can contact us using the contact button. We will wait for you!.'
            break;
        case 'español':
            titulo.textContent = 'BorealTurismo';
            parrafo.textContent = 'Bienvenidos, somo BorealTurismo, una empresa de turismo con 5 años de trayectoria, ubicada en el sur de Chile. Nuestra oficina se encuentra en Puerto Varas, pero realizamos tour por gran parte del sur. Si quieres sumergirte y descubrir el sur de este hermoso pais, llegaste al lugar indicado. Para cualquier consulta puedes comunicarte con nosotros en el boton de contacto. ¡Te esperamos!.'
            break;
    
        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    switch (navigator.language) {
        case 'en-US':
            establecerIdioma('usa')
            break;
        
        default:
            break;
    }
});