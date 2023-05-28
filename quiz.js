
Vue.component('pregunta-quiz',{
    props: ['id', 'pregunta', 'respuesta', 'valorCorrecto', 'categoria', 'icono', 'alt', 'mostrarRta'],
    data: function(){
        return{
            respuestas: [],
        }
    },
    updated() {
         if(this.respuestas.length != 0){
             contenedor = document.getElementById(`${this.id}`)
             respuestaFinal = `<div id="rta">
             <p class="text-center pt-2">Es ${this.valorCorrecto}</p>
             <p class="text-center pb-2 px-3">${this.respuesta}</p></div>`
             contenedor.innerHTML += respuestaFinal;

             if (this.respuestas === this.valorCorrecto) {
                localStorage[`respuesta${this.id}`] = 'Correcta';
                calificacion = `<h4 class="text-success text-center">Correcto</h4>`
                contenedor.innerHTML += calificacion;
                
             }else{
                localStorage[`respuesta${this.id}`] = 'Incorrecta';
                calificacion = `<h4 class="text-danger text-center">Incorrecto</h4>`
                contenedor.innerHTML += calificacion;
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
            <label class="btn boton btn-success"><input type="radio" value="verdadero" :name='id' v-model="respuestas" class="btn-check" required>Verdadero</label>
            <label class="btn boton btn-danger"><input type="radio" value="falso" :name='id' v-model="respuestas" class="btn-check">Falso</label>
            </div>
        </div>`
})

Vue.component('mensaje-bienvenida',{
    mounted(){
        var saludo = document.getElementById("saludo");
        var datoGuardado = localStorage.getItem("name");
        var nombreMay = datoGuardado[0].toUpperCase() + datoGuardado.substring(1);
        saludo.innerHTML = `<p class="p-3 text-center">¡Genial ${nombreMay}! Es momento de jugar, lee la pregunta atentamente y contesta verdadero o falso. ¡Buena suerte! </p> `;
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
        ],
        mostrarRta: false,
        arrayRtas: []
    },
  
    methods: {
        guardarDato(){
            localStorage.clear();
            var nombre = document.getElementById("name").value;
            localStorage.setItem("name", nombre);
           
        },
        mostrarRespuesta(){
            console.log('mostrando rta')
            mostrarRta = true;
        },
        conseguirRta(){
            for (i = 1; i <= localStorage.length; i++) {
                resultado = localStorage.getItem(`respuesta${i}`);
                if (resultado != null) {
                    string = `Pregunta ${i} ${resultado}`;
                tablaResultados = `<p class="text-center p-2 m-1 bg-opacity-50 ${resultado == 'Correcta' ? 'bg-success' : 'bg-danger'}" >Pregunta ${i} ${resultado}</p>`
                listaResultados = document.getElementById('resultados');
                listaResultados.innerHTML += tablaResultados;

            }}}
        }

    })