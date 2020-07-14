import "jquery";
import "sweetalert";

console.log("Hola mundo");
//npm install
// para correrlo npm run dev
// npm install jquery --save
// archivos de definiciones de archivos *.d.ts -> tienen toda las funciones
/*
npm install --save-dev @types/jquery
las guarda como dev los archivos de definicion


npm install sweetalert@1.1.3 --save
npm install --save-dev @types/sweetalert
npm i @types/sweetalert@1.1.27 --save-dev


*/



$(document).ready(function(){
    console.log("pagina lista y cargada");

     $("h1").text("Hola desde typescript");
    $("p").text("Hola desde el parrafo");

    $("h1").css("background-color" , "red"); 

    $("#botAlerta").on("click", function(){
        swal("Good job!", "You clicked the button!", "success");
    });
})