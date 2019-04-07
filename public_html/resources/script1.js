function clearFields(){
    var listFields = document.getElementsByClassName("inpModal");
    for (var i = 0; i < listFields.length; i++) {
        listFields[i].value="";
    }
    
}

function disMsg(){
    var val1=document.getElementById("comName").value;
    var val2=document.getElementById("comTel").value;
    var val3=document.getElementById("comMail").value;
    if(val1==="" || val1===" " || val2==="" || val2===" " || val3==="" || val3===" "){
       swal({
            title: "Error al Contactar",
            text: "Faltan Datos",
            icon: "error"
        }); 
        return;
    }
    
    var msj="Empresa: "+document.getElementById("comName").value;
    swal({
        title: "Contacto Exitoso!",
        text: msj,
        icon: "success"
    });
    clearFields();
}

function changeLight()
{
    document.getElementById("txtL").style="color:black";
    document.getElementById("txtL2").style="color:black";
    document.getElementById("mainBody").style="background-color:peru;color:black"; 
    document.getElementById("menuNav").style="background-color:black;color:white;border:1px solid white;";
    var elems= document.getElementsByClassName("lblln");
    for (var i = 0; i < elems.length; i++) {
        elems[i].style="color:white";
        
    }
}

function changeDark()
{
    document.getElementById("txtL").style="color:white";
    document.getElementById("txtL2").style="color:white";
    document.getElementById("mainBody").style="background-color:black;color:white";
    document.getElementById("menuNav").style="background-color:peru;color:black;border:1px solid white;";
    var elems= document.getElementsByClassName("lblln");
    for (var i = 0; i < elems.length; i++) {
        elems[i].style="color:black";
        
    }
}

function showSC(){
    var msj="Responsabilidad de Cajero en el Box-Office de ShowcaseCinemas,\n\
            y mantenimiento de impresoras y terminales. (Nivel operacional)\n\
            Periodo: 3/5/2016 hasta 1/10/2018 ";
    swal({
        title: "Periodo en Showcase Cinemas",
        text: msj,
        icon: "info"
    });
}

function showMS(){
    var msj="Desarrollador Fullstack de aplicaciones web, uso y desarrollo\n\
         de vistas, models,DAOs, controllers, entre otros.\n\
        Uso de: HTML, CSS, Bootsrap, JavaScript, Ajax, PostMan, Maven, Spring,SpringFramework, SpringBoot, Java.\n\
        Periodo: 28/1/2019 hasta 1/3/2019";
    swal({
        className:"msjin",
        title: "Periodo en MOVASIM",
        text: msj,
        icon: "info"
    });
}



function mute(){
    document.getElementById("musicaFondo").pause();
 
}

function unmute(){
    document.getElementById("musicaFondo").play();
}

function theme(){
    changeDark();
}
