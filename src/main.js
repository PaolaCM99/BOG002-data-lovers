
import data from './data/rickandmorty/rickandmorty.js';                     //importamos la data accediendo a su ubicación
const Data = data.results;                                                  //variable que guarda y accede al array [results]
import {organizaAz, organizaZa, statusDePersonajes, subir} from './data.js';//importando las funciones a usar



// ****************************************BOTON PARA SUBIR ********************************

document.getElementById("ImagenUp").addEventListener("click", subir);         //con evento click condicionamos la imagen para hacer scroll al inicio de la pagina


//***************************************** BOTONES*****************************************

const Busqueda = document.getElementById("input-buscador");                   //guardamos el valor ingresado en el input 

const Boton = document.getElementById("Buscar");                              //enlazamos nuestro boton buscar
      Boton.addEventListener("click", Buscando);                              //le creamos un evento click para que ejecute la funcion dada

const BotonMujeres = document.getElementById("GeneroMujeres");                //Botones que nos ejecutan la función cuando se de el evento click
      BotonMujeres.addEventListener("click", BuscandoFemale);

const BotonH = document.getElementById("GeneroHombres");
      BotonH.addEventListener("click", BuscandoMale);

// *****************************************FILTRO DE BUSQUEDA**********************************

function BuscandoDentroDeData(Buscando){                                      //Creamos una función que filtrara la data sobre el parametro Buscando
        const Resultado = Buscando.toUpperCase();                             //Declaramos buscando en una variable y la condicionamos a ser MAYUSCULA
        const Tarjeta = document.getElementsByClassName("tarjeta");           //Llamamos la clase que alojara lo filtrado
    
    for (let i=0;i < Data.length;i++){                                        //Recorremos la data
      if(Tarjeta[i].textContent.toUpperCase().includes(Resultado)) {          //si el contenido coincide con el Resultado
        Tarjeta[i].style.display = "inline-flex";                             //la tarjeta se mostrara
        document.getElementById("tarjeta").style.display="none"
      } else {
        Tarjeta[i].style.display = "none"; //si no coinside la tarjeta no se motrara
        document.getElementById("tarjeta").style.display="none"

      }
    }
contenedorDeTarjetas.removeChild(contenedorDeTarjetas.childNodes[0]);
}

function Buscando(){                              //creamos una función que re-usa a Buscando data
         BuscandoDentroDeData(Busqueda.value)     //esta buscara el valor que se ingre en el input busqueda
}

function BuscandoFemale(){                       //creamos una función que re-usa a Buscando Female
         BuscandoDentroDeData("FEMALE")          //aqui buscara sobre la data toda la coincidencia con Female
}        

function BuscandoMale(){                        //creamos una función que re-usa a Buscando Male
         BuscandoDentroDeData(" MALE")          //aqui buscara sobre la data toda la coincidencia con Male
}
  
// *****************************************CREACION DE TARJETAS*****************************************


window.onload = function RecorriendoData() {    // esta funcion se ejecuta en cada recarga de la pagina
  for(let i=0;i < Data.length; i++){            //recorremos la data
     const Nombres   = Data[i]["name"];            //accede a los datos especificos en el array en este caso name y los guarda en la nueva variable
     const Estado    = Data[i].status;
     const Origen    = Data[i].origin.name;
     const Genero    = Data[i].gender;
     const Episodios = Data[i].episode.length;
     const imagen    = Data[i].image;
     const especies  = Data[i].species;
     clonar(Nombres,Estado, Origen, Genero, imagen, Episodios, especies) //ejecutamos la funcion clonar con los datos del parametro
  }
 document.getElementById("tarjeta").style.display="none"
 
}

function clonar(Nombres,Estado, Origen, Genero, Imagen, Episodios, especies) {//Creamos esta función declarando los parametros a usar

  var contenedor = document.getElementById("tarjeta");//reservamos un id en html
  var clon       = contenedor.cloneNode(true);        //a contenedor le aplicamos el metodo cloneNode para clonar

  clon.style.display          = "inline-block";       //aplicamos un estilo display y una margen para los nuevos div´s
  clon.style.margin           = "1em"        
  
  let nombrePersonaje         =document.getElementById("nombrePersonaje");//reservamos un id en html
  nombrePersonaje.innerHTML   = Nombres               //imprimimos el dato requerido
  
  let estado_personaje        =document.getElementById("estado");
  estado_personaje.innerHTML  = "Status: "+ Estado

  let lugar_personaje         =document.getElementById("lugarDeOrigen");
  lugar_personaje.innerHTML   = "Origin: "+ Origen
                   
  let cantidad_episodios      =document.getElementById("cantidadDeDeEpisodios");
  cantidad_episodios.innerHTML= "Number of episodes: "+ Episodios
  
  let genero_tarjeta          =document.getElementById("genero");
  genero_tarjeta.innerHTML    = "Gender: "+ Genero

  let especie_tarjeta         =document.getElementById("especie");
  especie_tarjeta .innerHTML  = "Specie: "+ especies;

  document.getElementById("imgPersonaje").src = Imagen

  let contenedorDeTarjetas=document.getElementById("contenedorTarjetas");
  contenedorDeTarjetas.appendChild(clon);               //crea un nuevo nodo con el formato que le dimos
  
}
  
// *********************************OCULTAR Y MOSTRAR SECCIONES *********************************


let Home=  document.getElementById("Home");
      Home.addEventListener("click",function (){
          document.getElementById("contenedorTarjetas").style.display = "block";
          document.getElementById("SomosQ").style.display = "none"; 
          document.getElementById("graficos").style.display = "none";
          document.getElementById("Calculo").style.display = "none";
          document.getElementById("filtroDeEspecies").style.display = "none";  
          document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
          document.getElementById("contenedorEspecies").style.display = "none"; 
  
  })

let QuienesSomos=  document.getElementById("Somos");
    QuienesSomos.addEventListener("click",function (){
          document.getElementById("contenedorTarjetas").style.display = "none";
          document.getElementById("graficos").style.display = "none"; 
          document.getElementById("SomosQ").style.display = "block";  
          document.getElementById("filtroDeEspecies").style.display = "none"; 
          document.getElementById("ContenedorFiltrosEspecie").style.display = "none";   
          document.getElementById("contenedorEspecies").style.display = "none"; 
          document.getElementById("aside").style.display = "none";  

  })

  
  let filtrandoEspecies=  document.getElementById("especies");
    filtrandoEspecies.addEventListener("click",function(){
      document.getElementById("ContenedorFiltrosEspecie").style.display = "block";  
      document.getElementById("contenedorEspecies").style.display = "block";
      document.getElementById("titulo").style.display = "block";  
      document.getElementById("filtroDeEspecies").style.display = "none";  
      document.getElementById("contenedorTarjetas").style.display = "none"; 
      document.getElementById("graficos").style.display = "none"; 
      document.getElementById("SomosQ").style.display = "none"; 
 })

 let volverTodosLosPersonajes = document.getElementById("volverPersonajes");
     volverTodosLosPersonajes.addEventListener("click",function(){
      document.getElementById("contenedorTarjetas").style.display = "block";
      document.getElementById("filtroDeEspecies").style.display = "none";  
      document.getElementById("graficos").style.display = "none"; 
      document.getElementById("SomosQ").style.display = "none";
        
 })


    const BotonGraficos = document.getElementById("Graphics");
          BotonGraficos.addEventListener("click", function MostrarGrafico(){
    document.getElementById("graficos").style.display = "block";
    document.getElementById("chart").style.display = "block"; 
    document.getElementById("Calculo").style.display = "block";
    document.getElementById("chart1").style.display = "flex"; 
    document.getElementById("SomosQ").style.display = "none"; 
    document.getElementById("contenedorTarjetas").style.display="none";
    document.getElementById("filtroDeEspecies").style.display = "none";
    document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
    document.getElementById("contenedorEspecies").style.display = "none"; 
  })
     
         
 
// *****************************************FILTROS POR CATEGORIAS Y BOTONES*****************************************
  
  //Boton organizacion A-Z

  let BotonOrganizarAz = document.getElementById("personajesAZ");
      BotonOrganizarAz.addEventListener("click", az);
  
 
  function az(){

      let contenedorDeTarjetas=document.getElementById("contenedorTarjetas"); //llamamos al Id donde vamos a imprimir
          contenedorDeTarjetas.innerHTML=""                                   // lo vaciamos
      let NombresAZ = organizaAz(Data)
       for(let i=0;i < NombresAZ.length; i++){                                //recorremos la nueva data
       clonar(NombresAZ[i].name, NombresAZ[i].status, NombresAZ[i].origin.name, NombresAZ[i].gender, NombresAZ[i].image,NombresAZ[i].episode.length,NombresAZ[i].species) 
                                                                              //clonamos los datos a mostrar
}     contenedorDeTarjetas.removeChild(contenedorDeTarjetas.childNodes[0]);
}


let BotonOrganizarZa = document.getElementById("personajesZA");
    BotonOrganizarZa.addEventListener("click", 

function za(){

      let contenedorDeTarjetas=document.getElementById("contenedorTarjetas");
          contenedorDeTarjetas.innerHTML=""
      let NombresZa = organizaZa(Data)
      for(let i=0;i < NombresZa .length; i++){
      clonar(NombresZa[i].name,NombresZa[i].status,NombresZa[i].origin.name, NombresZa[i].gender, NombresZa[i].image, NombresZa[i].episode.length, NombresZa[i].species) 
 }    contenedorDeTarjetas.removeChild(contenedorDeTarjetas.childNodes[0]);

})


// *********************************Cambiando titulo*********************************
function titulos(especie){
  let titulo=document.getElementById("titulo")
  titulo.innerHTML=especie;
 }
 
 function cambio(){
  document.getElementById("contenedorTarjetas").style.display = "none";
  document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
  document.getElementById("filtroDeEspecies").style.display = "block";  
  document.getElementById("titulo").style.display = "block";  
 }
 // *********************************Clonando especies *********************************

  function clonando(Nombres, Estado, Origen, Genero, imagen, Episodios, especies) {//Creamos esta función declarando los parametros a usar
  
    var contenedor = document.getElementById("tarjeta");//reservamos un id en html
    var clon       = contenedor.cloneNode(true);
    clon.style.display          = "inline-flex";
    clon.style.margin           = "1em"        
      
    let nombrePersonaje         =document.getElementById("nombrePersonaje");
    nombrePersonaje.innerHTML   = Nombres;
      
    let estado_personaje        =document.getElementById("estado");
    estado_personaje.innerHTML  = "Status: "+ Estado;
    
    let lugar_personaje         =document.getElementById("lugarDeOrigen");
    lugar_personaje.innerHTML   = "Origin: "+ Origen
                       
    let cantidad_episodios      =document.getElementById("cantidadDeDeEpisodios");
    cantidad_episodios.innerHTML= "Number of episodes: "+ Episodios
      
    let genero_tarjeta          =document.getElementById("genero");
    genero_tarjeta.innerHTML    = "Gender: "+ Genero
    
    let especie_tarjeta         =document.getElementById("especie");
    especie_tarjeta .innerHTML  = "Specie: "+ especies;
    
    
    document.getElementById("imgPersonaje").src = imagen
     
    let contenedorDeEspecies=document.getElementById("filtroDeEspecies");//llamamos el Id donde se imprimira
    contenedorDeEspecies.appendChild(clon);//crea un nuevo nodo con el formato que le dimos
            
  }
    
// *********************************Filtrando especies *********************************

function filtroEspecies(filtro){                  //Creamos una funcion con parametro filtro, asi la re-usaremos
  let especiesfiltro= Data.filter(item=>{         //Declaramos una varible para esta nueva data
    return item.species===filtro                  //retornara las especies que sean igual al parametro que demos
    })
  
let contenedorDeTarjetas=document.getElementById("filtroDeEspecies");// llamamos el Id donde se imprimira
    contenedorDeTarjetas.innerHTML=""                 //Vaciamos el Id


for(let i=0;i < especiesfiltro.length; i++){//Recorro nuestra nueva data especies
  clonando(especiesfiltro[i].name,especiesfiltro[i].status, especiesfiltro[i].origin.name, especiesfiltro[i].gender, especiesfiltro[i].image, especiesfiltro[i].episode.length, especiesfiltro[i].species) 
} 


contenedorDeTarjetas.removeChild(contenedorDeTarjetas.childNodes[0]); 
  }
let botonVolverEspecies=document.createElement("button");
    botonVolverEspecies.innerHTML="BACK"
    botonVolverEspecies.setAttribute("type","button")
    botonVolverEspecies.setAttribute("class","volverEspecies")


    botonVolverEspecies.onclick =function especies(){
      document.getElementById("ContenedorFiltrosEspecie").style.display = "block";  
      document.getElementById("filtroDeEspecies").style.display = "none";
      document.getElementById("titulo").style.display = "none";    
    }
      

let filtroDeEspecies=document.getElementById("filtroDeEspecies")// let boton=document.createElement(document.getElementById("volverEspecies"))
    filtroDeEspecies.appendChild(botonVolverEspecies);





// *********************************Filtrando especies *********************************

let BotonHumans = document.getElementById("Humans");
BotonHumans.addEventListener("click",humans);

  function humans(){        //esta función re-usa filtrar
   filtroEspecies("Human");//compara especies con Human y muestra las conincidencias
   titulos("Human")
   cambio()
  
  }

let BotonAliens = document.getElementById("Alien");
BotonAliens.addEventListener("click",Aliens);

  function Aliens(){
   filtroEspecies("Alien")
   cambio()
   titulos("Aliens")
  }
  

let BotonRobots = document.getElementById("Robots");
BotonRobots.addEventListener("click",Robots);

 function Robots(){
   filtroEspecies("Robot")
   cambio()
   titulos("Robots")
  }


let BotonHumanoid = document.getElementById("humanoid");
BotonHumanoid.addEventListener("click",humanoid);

 function  humanoid(){
   filtroEspecies("Humanoid")
   cambio() 
   titulos("Humanoid")
  }
    
let BotonUnknown = document.getElementById("unknown");
BotonUnknown.addEventListener("click",unknown);

 function unknown(){
   filtroEspecies("unknown") 
   cambio()
   titulos("Unknown")
  }

let BotonPoopybutthole= document.getElementById("Poopybutthole");
BotonPoopybutthole.addEventListener("click",Poopybutthole);


  function Poopybutthole(){
   filtroEspecies("Poopybutthole")
   cambio()
   titulos("Poopybutthole")
 }

 let BotonMytholog= document.getElementById("Mytholog");
 BotonMytholog.addEventListener("click",EspecieMytholog);


 function EspecieMytholog(){
   filtroEspecies("Mytholog")
   cambio()
   titulos("EspecieMytholog")
 }
  
 let BotonVampire= document.getElementById("Vampire");
 BotonVampire.addEventListener("click",Vampire);
 
 function Vampire(){
   filtroEspecies("Vampire")
   cambio()
   titulos("Vampire")
  }

 let BotonCronenberg= document.getElementById("Cronenberg");
 BotonCronenberg.addEventListener("click",Cronenberg);
   
 function Cronenberg(){
   filtroEspecies("Cronenberg")
   cambio()
   titulos("Cronenberg")
  }

 let BotonAnimal= document.getElementById("Animal");
 BotonAnimal.addEventListener("click",Animal);

   
 function Animal(){
   filtroEspecies("Animal")
   cambio()
   titulos("Animal")
  }
  
  let BotonDisease= document.getElementById("Disease");
  BotonDisease.addEventListener("click",Disease);
  
  function Disease(){
    filtroEspecies("Disease")
    cambio()
    titulos("Disease") 
  }
 
  let BotonParasite= document.getElementById("Parasite");
  BotonParasite.addEventListener("click",Parasite);
 
    
  function Parasite(){
    filtroEspecies("Parasite")
    cambio()
    titulos("Parasite")
  }

  //  ******************************************CALCULOS PARA RICK Y MORTY  ******************************************

  // El porciento de las muertes en la serie 

  const cantidad= Data.map(item => item.name);
        let PersonajesTotales = cantidad.length;
        console.log(cantidad)

  const CantidadMuertes = Data.filter(function(element){
        return element.status === "Dead";
  }); 

  let MuertesTotales = CantidadMuertes.length
  let PorcientoDeMuertes = 100 * MuertesTotales / PersonajesTotales;
  document.getElementById("Calculo").innerHTML = "Did you know that " + parseInt(PorcientoDeMuertes) + "% of the characters they are dead?";

  // ************************************************   GRAFICAS    ***************************************************

fetch("https://rickandmortyapi.com/api/episode")               //Fetch nos permite acceder a datos que nos proporciona http
      .then(response => response.json() )                      //llamamos el archivo Json
      .then(data =>{
  
  const canvas      = document.getElementById("canvas");        //declaramos el Id donde imprimiremos Canvas
  const LosEpisodios= data.results.map(item => item.name);      // Recorremos la data, declaramos la variable que guarda el nombre del episodio 
  const Personajes  = data.results.map(item => item.characters.length)//Recorremos la data, declaramos la variable donde guarda la cantidad de personajes según el episodio
   new Chart(canvas,
    {                                                            // Chart nos permite crear graficas
    
       type: "bar",                                             //el tipo de grafica que usamos en este caso barras
       data: {
            labels: LosEpisodios,                               //Llamamos la data que vamos a graficar
            datasets:[
        {
             label:"Number of characters",
             data:Personajes,
             backgroundColor:[ "#48E71C","#f1f1f1","#f0b8b8","#7EC96D","#BDD771","#FFCB55",
          "#e67f83", "#d43d51", "#665191","#a05195","#003f5c", "#ffa600", "#19B974","#DE9E54","#333f6c","#A36B22","#2f4b7c","#d45087","#FFD588","#FB4F93" ],
             borderColor: ["#f1f1f1",
            ],
             borderWidth: 1.5,

        }]
      }})  

    })


fetch("https://rickandmortyapi.com/api/character")                  //Fetch nos permite acceder a datos que nos proporciona http
    .then(response => response.json() )                             //llamamos el archivo Json
    .then(data =>{


const canvas1     =  document.getElementById("canvas1");           //declaramos el Id donde imprimiremos Canvas
const statusApi   =  data.results.map(item => item.status);        // Recorremos la data, declaramos la variable que guarda el nombre del episodio 
const StatusSet = new Set(statusApi);
const listaStatus = [...StatusSet];

const cantidadDePersonajes= statusDePersonajes(Data);
      
 new Chart(canvas1,{                                                 // Chart nos permite crear graficas
    
     type: "bar",                                                   //el tipo de grafica que usamos en este caso barras
     data: {
          labels:listaStatus,                                       //Llamamos la data que vamos a graficar
          datasets:[
      {
           label:"Number of characters",
           data:cantidadDePersonajes,
           backgroundColor:[ "#48E71C","#d43d51", "#665191"],
           borderColor: ["#f1f1f1"],
           borderWidth: 1.5,

      }]
    }})  

  })
