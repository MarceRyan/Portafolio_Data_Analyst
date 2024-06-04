//Funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionada
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
};

//Función que muestra el Menú Responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//Filtro de Habilidades
document.addEventListener("DOMContentLoaded", function() {
    const filtroBtns = document.querySelectorAll("#filtro .filtro-btn");
    const items = document.querySelectorAll("#portafolio .item");

    filtroBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const filtro = this.dataset.filtro;
            
            items.forEach(item => {
                item.style.display = "none"; // Oculta todos los elementos al inicio
                
                if (filtro === "todos") {
                    item.style.display = "block"; // Muestra todos los elementos si se selecciona "Todos"
                } else if (item.classList.contains(filtro)) {
                    item.style.display = "block"; // Muestra solo los elementos que coinciden con el filtro
                }
            });
        });
    });
});

// Función para comprobar si un elemento está en la pantalla
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para manejar el desplazamiento
function handleScroll() {
    const habilidades = document.querySelectorAll('.habilidad');
    habilidades.forEach(habilidad => {
        if (isInViewport(habilidad)) {
            habilidad.classList.add('visible');
        }
    });
}

// Agrega un event listener para el desplazamiento
window.addEventListener('scroll', handleScroll);

// Ejecuta la función handleScroll al cargar la página
document.addEventListener('DOMContentLoaded', handleScroll);