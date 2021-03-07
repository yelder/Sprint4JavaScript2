const formulario=document.querySelector('#formulario');
const boton=document.querySelector('#boton');
const resultado=document.querySelector('#resultado');

const palabras=[
    {nombre:'Albert'},
    {nombre:'Ismael'},
    {nombre:'Luis'},
    {nombre:'Rubén'},
    {nombre:'Jonatan'},
    {nombre:'Jake'},
    {nombre:'Jose'}
]

const filtrar=()=>{
   resultado.innerHTML ='';
    
   const texto=formulario.value.toLowerCase();
   for(let palabra of palabras){
       let nombre= palabra.nombre.toLowerCase();
       if(nombre.indexOf(texto) !== -1 ){
        resultado.innerHTML += `<li>${palabra.nombre}</li>`
       }
   }
   if(resultado.innerHTML === ''){
    resultado.innerHTML += `<li>Nombre no encontrado... </li>`
   }
}

boton.addEventListener('click',filtrar);
formulario.addEventListener('keyup',filtrar);