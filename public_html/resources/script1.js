function changeLight()
{
    document.getElementById("mainBody").style="background-color:peru;color:black";    
}

function changeDark()
{
    document.getElementById("mainBody").style="background-color:black;color:white";   
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
        Uso de: HTML, CSS, Bootsrap, JavaScript, Ajax, PostMan, Maven, Spring,\n\
        SpringFramework, SpringBoot, Java.\n\
        Periodo: 28/1/2019 hasta 1/3/2019";
    swal({
        className:"msjin",
        title: "Periodo en MOVASIM",
        text: msj,
        icon: "info"
    });
}