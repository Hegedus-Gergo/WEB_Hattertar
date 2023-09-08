function SebessegValtozas() {
    let ertek = document.getElementById("IDsebesseg").value;
    document.getElementById("sebessegErtek").innerHTML=ertek;
}
function EredmenySzamitas(){
    let adatmennyiseg = document.getElementById("IDadatMennyiseg").value;
    let sebesseg = document.getElementById("IDsebesseg").value;
    let adatmennyisegMertekegyseg = document.getElementById("IDadatMennyisegSelect").value;
    let sebessegMertekegyseg = document.getElementById("IDsebessegSelect").value;

    if (adatmennyisegMertekegyseg == "MB"){
        adatmennyiseg *= 1000;
    }
    else if (adatmennyisegMertekegyseg == "GB"){
        adatmennyiseg *= 1000000;
    }
    else if (adatmennyisegMertekegyseg == "TB"){
        adatmennyiseg *= 1000000000;
    }
    if (sebessegMertekegyseg == "MB/s"){
        sebesseg *= 1000;
    }
    else if (sebessegMertekegyseg == "GB/s"){
        sebesseg *= 1000000;
    }
    let second = Math.floor(adatmennyiseg / sebesseg);
    let perc = 0, ora = 0, nap = 0;
    if (second > 60) {
        perc = Math.floor(second / 60);
        second = second - perc * 60;
    }
    if (perc > 60)
    { ora = Math.floor(perc/60);
        perc = perc - ora * 60;
    }

    if (ora > 24) {
        nap = Math.floor(ora / 24);
        ora = ora - nap * 24;
    }
    if (nap==0 && ora == 0 && perc == 0)
        document.getElementById("IDeredmeny").innerHTML = second + "s";
    else if (nap==0 && ora == 0)
        document.getElementById("IDeredmeny").innerHTML = perc+"m" + second + "s";
    else if (nap == 0)
        document.getElementById("IDeredmeny").innerHTML = ora+"h"+perc+"m"+second+"s";
    else
        document.getElementById("IDeredmeny").innerHTML = nap+"d"+ora + "h" + perc + "m" + second + "s";
}