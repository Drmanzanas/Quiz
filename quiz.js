const preguntasJuego = [
    {
    titulo: '¿Cual es el nombre mas comun del mundo?',
    respuestas: [
        'Steve',
        'Pedro',
        'Mohammed',
        'Ali'
    ]
},
 {
    titulo: '¿El pais que recibe mas turismo del mundo?',
    respuestas: [
        'España',
        'Francia',
        'China',
        'Estados Unidos'
    ]
},
 {
    titulo: '¿Cuantos años tiene el universo?',
    respuestas: [
        '13.73 Mil millones',
        '14 Mil millones',
        '73.13 Mil millones',
        '3.5 Mil millones'
    ]
},
 {
    titulo: '¿Cual es el animal que mas muertes humanas provoca al año?',
    respuestas: [
        'Mosquito',
        'Serpiente',
        'Tiburon',
        'Medusa'
    ]
},
 {
    titulo: '¿Cual es la pelicula mas vista de la historia?',
    respuestas: [
        'Avatar',
        'Los Vengadores',
        'Titanic',
        'Star Wars'
    ]
}
]




const iterandoRespuestas = (array) => {
  return `
  <label for="${array}">${array}</label>
  <input type="checkbox" id="${array}" name="nombre-mundial">`

}




const ponerPregunta = (objeto) => {
    const { titulo, respuestas } = objeto;
    const oracion = `<p>${titulo}</p>`;
    const opciones = respuestas.map(iterandoRespuestas);
    const opcionesTerminadas = opciones.join('');
    const $$fieldset = document.createElement('fieldset');
    return `<fieldset>${oracion} ${opcionesTerminadas}</fieldset>`;

}




const objetivo = preguntasJuego.map(objeto => {
   return ponerPregunta(objeto)
})


const pregunta = objetivo.join('');
const $form = document.getElementsByTagName('form')[0];

$form.innerHTML = pregunta
