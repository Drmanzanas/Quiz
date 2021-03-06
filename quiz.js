const preguntasJuego = [
    {
        titulo: '¿Cual es el nombre mas comun del mundo?',
        respuestas: [{
                label: 'Steve',
                id: 'steve',
                name: 'nombres',
                value: 'steve'
            },
            {
                label: 'Pedro',
                id: 'pedro',
                name: 'nombres',
                value: 'pedro'
            },
            {
                label: 'Mohammed',
                id: 'mohammed',
                name: 'nombres',
                value: 'mohammed'
            },
            {
                label: 'Ali',
                id: 'ali',
                name: 'nombres',
                value: 'ali'
            }
        ],
        responseCorrect: {
            label: 'Mohammed',
            id: 'mohammed',
            name: 'nombres',
            value: 'mohammed'
        }
    },
    {
        titulo: '¿Cual es el país que recibe más turismo del mundo?',
        respuestas: [{
                label: 'España',
                id: 'españa',
                name: 'paises',
                value: 'españa'
            },
            {
                label: 'Francia',
                id: 'francia',
                name: 'paises',
                value: 'francia'
            },
            {
                label: 'China',
                id: 'china',
                name: 'paises',
                value: 'china'
            },
            {
                label: 'Estados Unidos',
                id: 'estadosUnidos',
                name: 'paises',
                value: 'estadosUnidos'
            }
        ],
        responseCorrect: {
            label: 'Francia',
            id: 'francia',
            name: 'paises',
            value: 'francia'
        }
    },
    {
        titulo: '¿Cuantos años tiene el universo?',
        respuestas: [{
                label: '13.73 Mil millones',
                id: '13.73MilMillones',
                name: 'años',
                value: '13.73m'
            },
            {
                label: '14 Mil millones',
                id: '14_mil_millones',
                name: 'años',
                value: '14m'
            },
            {
                label: '73.13 Mil millones',
                id: '73.13MilMillones',
                name: 'años',
                value: '73.13m'
            },
            {
                label: '3.5 Mil millones',
                id: '3.5MilMillones',
                name: 'años',
                value: '3.5m'
            }
        ],
        responseCorrect: {
            label: '73.13 Mil millones',
            id: '73.13MilMillones',
            name: 'años',
            value: '73.13m'
        }
    },
    {
        titulo: '¿Que animal mata mas humanos al año?',
        respuestas: [{
                label: 'Mosquito',
                id: 'Mosquito',
                name: 'animales',
                value: 'mosquito'
            },
            {
                label: 'Serpiente',
                id: 'Serpiente',
                name: 'animales',
                value: 'serpiente'
            },
            {
                label: 'Tiburon',
                id: 'Tiburon',
                name: 'animales',
                value: 'tiburon'
            },
            {
                label: 'Medusa',
                id: 'Medusa',
                name: 'animales',
                value: 'medusa'
            }
        ],
        responseCorrect: {
            label: 'Mosquito',
            id: 'Mosquito',
            name: 'animales',
            value: 'mosquito'
        }
    },
    {
        titulo: '¿Cual es la pelicula mas vista de la historia?',
        respuestas: [{
                label: 'Avatar',
                id: 'Avatar',
                name: 'peliculas',
                value: 'avatar'
            },
            {
                label: 'Los Vengadores',
                id: 'losVengadores',
                name: 'peliculas',
                value: 'losVengadores'
            },
            {
                label: 'Titanic',
                id: 'Titanic',
                name: 'peliculas',
                value: 'titanic'
            },
            {
                label: 'Star Wars',
                id: 'starWars',
                name: 'peliculas',
                value: 'starWars'
            }
        ],
        responseCorrect: {
            label: 'Avatar',
            id: 'Avatar',
            name: 'peliculas',
            value: 'avatar'
        }
    }
]

const iterandoRespuestas = ({
    label,
    id,
    name,
    value
}) => `
    <section>
        <input type="radio" id="${id}" name="${name}" value="${value}">
        <label for="${id}">${label}</label>
    </section>
`;

const ponerPregunta = ({
    titulo,
    respuestas
}) => {
    const oracion = `<legend>${titulo}</legend>`;
    const opciones = respuestas.map(iterandoRespuestas).join('');
    return `<fieldset>${oracion} ${opciones}</fieldset>`;
};


const enviarValores = (evento) => {
    evento.preventDefault();
    
    const correctoValue = preguntasJuego.map(objeto => objeto.responseCorrect.value);
    const correctoName = preguntasJuego.map(objeto =>objeto.responseCorrect.name);
    const formulario = $form.elements;
    const valores = correctoName.map(name => formulario[name].value);
    
    if(valores.toString() == correctoValue.toString()){
        alert("Muy bien has acertado todas las preguntas")
    } else {
        alert(`OHH, Has perdido. Mira tus respuestas:
        
        Seleccionadas   -   Correctas
        
        ${valores[0]}   -   ${correctoValue[0]}
        
        ${valores[1]}   -   ${correctoValue[1]}
        
        ${valores[2]}   -   ${correctoValue[2]}
        
        ${valores[3]}   -   ${correctoValue[3]}
        
        ${valores[4]}   -   ${correctoValue[4]} `)
    };
    const nombresElegido = document.querySelector('input[name="nombres"]:checked ~ label');
    const nombresCorrecto = document.querySelector('input[id="mohammed"] ~label');
    const paisesElegido = document.querySelector('input[name="paises"]:checked ~ label');
    const paisesCorrecto = document.querySelector('input[id="francia"] ~label');
    const añosElegido = document.querySelector('input[name="años"]:checked ~ label');
    const añosCorrecto = document.querySelector('input[id="73.13MilMillones"] ~label');
    const animalesElegido = document.querySelector('input[name="animales"]:checked ~ label');
    const animalesCorrecto = document.querySelector('input[id="Mosquito"] ~ label');
    const peliculasElegido = document.querySelector('input[name="peliculas"]:checked ~ label');
    const peliculasCorrecto = document.querySelector('input[id="Avatar"] ~label');

    if(valores[0].toString() !== correctoValue[0].toString){
         nombresElegido.style.color = '#ED6B86',  nombresCorrecto.style.color = '#52B788';
    };
    if(valores[1].toString() !== correctoValue[1].toString){
        paisesElegido.style.color = '#ED6B86',  paisesCorrecto.style.color = '#52B788';
    };
    if(valores[2].toString() !== correctoValue[2].toString){
        añosElegido.style.color = '#ED6B86',  añosCorrecto.style.color = '#52B788';
    };
    if(valores[3].toString() !== correctoValue[3].toString){
        animalesElegido.style.color = '#ED6B86',  animalesCorrecto.style.color = '#52B788';
    };
    if(valores[4].toString() !== correctoValue[4].toString){
        peliculasElegido.style.color = '#ED6B86',  peliculasCorrecto.style.color = '#52B788';
    }; 
};
    
const $boton = `<footer><button class="boton">Terminar</button></footer>`;

const pregunta = preguntasJuego.map(ponerPregunta).join('');
const completo = `<div>${pregunta}</div>`;
const $form = document.getElementsByTagName('form')[0];
$form.innerHTML = pregunta + $boton;
$form.addEventListener('submit', enviarValores);

