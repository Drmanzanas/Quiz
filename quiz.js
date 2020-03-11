const preguntasJuego = [
    {
    titulo: '¿Cual es el nombre mas comun del mundo?',
    respuestas: [
        {label: 'Steve', id:'steve', name:'nombres' },
        {label: 'Pedro', id:'pedro', name:'nombres' },
        {label: 'Mohammed', id:'mohammed', name:'nombres'},
        {label: 'Ali', id:'ali', name:'nombres' }
    ]
},
 {
    titulo: '¿El pais que recibe mas turismo del mundo?',
    respuestas: [
        {label: 'España', id:'españa', name:'paises' },
        {label: 'Francia', id:'francia', name:'paises' },
        {label: 'China', id:'china', name:'paises' },
        {label: 'Estados Unidos', id:'estados_unidos', name:'paises' }
    ]
},
 {
    titulo: '¿Cuantos años tiene el universo?',
    respuestas: [
        {label: '13.73 Mil millones', id:'13.73 Mil millones', name:'años' },
        {label: '14 Mil millones', id:'14 Mil millones', name:'años' },
        {label: '73.13 Mil millones', id:'73.13 Mil millones', name:'años' },
        {label: '3.5 Mil millones', id:'3.5 Mil millones', name:'años'}
    ]
},
 {
    titulo: '¿Cual es el animal que mas muertes humanas provoca al año?',
    respuestas: [
        {label: 'Mosquito', id:'Mosquito', name:'animales'},
        {label: 'Serpiente', id:'Serpiente', name:'animales'},
        {label: 'Tiburon', id:'Tiburon', name:'animales'},
        {label: 'Medusa', id:'Medusa', name:'animales'}
    ]
},
 {
    titulo: '¿Cual es la pelicula mas vista de la historia?',
    respuestas: [
        {label: 'Avatar', id:'Avatar', name:'peliculas'},
        {label: 'Los Vengadores', id:'Los Vengadores', name:'peliculas'},
        {label: 'Titanic', id:'Titanic', name:'peliculas'},
        {label: 'Star Wars', id:'Star Wars', name:'peliculas'}
    ]
}
]





const iterandoRespuestas = ({ label, id, name }) => {
  return `
    <label for="${id}">${label}</label>
    <input type="radio" id="${id}" name="${name}" value="${id}">`
}




const ponerPregunta = (objeto) => {
    const { titulo, respuestas } = objeto;
    const oracion = `<p>${titulo}</p>`;
    const opciones = respuestas.map(iterandoRespuestas);
    const opcionesTerminadas = opciones.join('');
    return `<fieldset>${oracion} ${opcionesTerminadas}</fieldset>`;
}

const objetivo = preguntasJuego.map(objeto => {
   return ponerPregunta(objeto)
})



const crearBoton = () => {
    return `<footer><button class="boton">Terminar</button></footer>`
}

const $boton = crearBoton();

const enviarValores = (evento) => {
    evento.preventDefault()
    console.log($form.elements.nombres.value)
    console.log($form.elements.paises.value) 
    console.log($form.elements.años.value) 
    console.log($form.elements.animales.value) 
    console.log($form.elements.peliculas.value) 
}


const pregunta = objetivo.join('');
const $form = document.getElementsByTagName('form')[0];
$form.innerHTML = pregunta + $boton;
$form.addEventListener('submit', enviarValores)

