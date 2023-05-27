
Vue.component('pregunta-quiz',{
    props: ['id', 'pregunta', 'respuesta', 'valorCorrecto', 'categoria', 'icono', 'alt'],
    data: function(){
        return{
            respuestas: [],
        }
    },
    updated() {
            if(this.respuestas.length != 0){
                console.log(this.respuestas)
                console.log(this.id)
                console.log(this.valorCorrecto)

                if (this.respuestas === this.valorCorrecto) {
                    console.log('correcto')
                }else{
                    console.log('mal')
                }
            }
   },
    template: `
        <div class="pregunta" :id='id'>
            <div class="d-flex flex-row mb-3">
                <h3 class="h6 p-2">{{pregunta}}</h3>
                <div class="img-container"><img v-bind:src='icono' :alt='alt'></div>
            </div>
            <div class="botones">
            <label class="btn boton btn-${this.seleccionado ? 'success' : 'nosuccess'}"><input type="radio" value="verdadero" :name='id' v-model="respuestas" class="btn-check">Verdadero</label>
            <label class="btn boton btn-${this.seleccionado ? 'danger' : 'nodanger'}"><input type="radio" value="falso" :name='id' v-model="respuestas" class="btn-check">Falso</label>
            </div>
        </div>`
})

Vue.component('mensaje-bienvenida',{
    mounted(){
        var saludo = document.getElementById("saludo");
        var datoGuardado = localStorage.getItem("name");
        var nombreMay = datoGuardado[0].toUpperCase() + datoGuardado.substring(1);
        saludo.innerHTML = `<p class="p-3 text-center">¡Genial ${nombreMay}! Es momento de jugar, contesta todas las preguntas y al finalizar clickea "Ver resultados" para chequear tus respuestas. ¡Buena suerte! </p> `;
    },

    template: `<div id="saludo"></div>`

})


let app = new Vue({

    el: '#contenedor',
    data: {
        preguntas: [
            {
                id: 1,
                pregunta: 'Thomas Edison descubrió la gravedad',
                respuesta: 'Isaac Newton descubrió la gravedad cuando vio caer una manzana mientras pensaba en las fuerzas de la naturaleza.',
                valorCorrecto: 'falso',
                categoria: 'ciencia',
                icono: 'icons/ciencia.png',
                alt: 'Pregunta de ciencia'
            },
            {
                id: 2,
                pregunta: 'El titanic se hundió en el Océano Pacífico',
                respuesta: 'Se hundió en el Océano Atlántico Norte',
                valorCorrecto: 'falso',
                categoria: 'cultura',
                icono: 'icons/cultura.png',
                alt: 'Pregunta de cultura'
            },
            {
                id: 3,
                pregunta: 'JavaScript es Case Sensitive',
                respuesta: 'JavaScript es Case Sensitive, es decir, diferencia entre mayúsculas y minúsculas',
                valorCorrecto: 'verdadero',
                categoria: 'programacion',
                icono: 'icons/programacion.png',
                alt: 'Pregunta de programación'
            },
            {
                id: 4,
                pregunta: 'La Gran Muralla de China se puede ver desde el espacio',
                respuesta: 'No puede verse desde el espacio y, en tal caso, solo se vería como una autopista normal',
                valorCorrecto: 'falso',
                categoria: 'cultura',
                icono: 'icons/cultura.png',
                alt: 'Pregunta de cultura'
            },
            {
                id: 5,
                pregunta: 'El intestino delgado mide unas tres veces y media la longitud de tu cuerpo',
                respuesta: 'Es la sección más larga del tubo digestivo, que mide unos siete metros de media',
                valorCorrecto: 'verdadero',
                categoria: 'ciencia',
                icono: 'icons/ciencia.png',
                alt: 'Pregunta de ciencia'
            },
            {
                id: 6,
                pregunta: 'En vue.js, los componentes son instancias reutilizables que tienen su propio contenido HTML, CSS y lógica',
                respuesta: 'Cada vez que usamos un componente se crea una nueva instancia de este, independiente de los otros. Por ejemplo, estas preguntas eran un componente',
                valorCorrecto: 'verdadero',
                categoria: 'programacion',
                icono: 'icons/programacion.png',
                alt: 'Pregunta de programación'
            }
        ]
    },
  
    methods: {
        guardarDato(){
            localStorage.clear();
            var nombre = document.getElementById("name").value;
            localStorage.setItem("name", nombre);
           
        },
        
    }
    

})