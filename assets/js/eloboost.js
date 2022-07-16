console.log("https://github.com/chriszflow27");

function checktier() {
    var tier = document.getElementById('Rangodeseado');
    var list = document.getElementById('eloboost-division-new');
    if (tier.value != 'master') {
        list.innerHTML = '<option value="4">Division 4</option><option value="3">Division 3</option><option value="2">Division 2</option><option value="1">Division 1</option>';
    } else {
        list.innerHTML = '<option value="4">Division 4</option>'
    }
}

function limit() {
    var sec1 = document.getElementById('Clasificacion');
    var sec2 = document.getElementById('Rangodeseado');

    if (sec1.value == 'hierro') {
        sec2.innerHTML = '<option value="hierro">HIERRO</option><option value="bronce">BRONCE</option><option value="plata">PLATA</option><option value="oro">ORO</option><option value="platino">PLATINO</option><option value="diamante">DIAMANTE</option><option value="master">MASTER</option>';
    }
    if (sec1.value == 'bronce') {
        sec2.innerHTML = '<option value="bronce">BRONCE</option><option value="plata">PLATA</option><option value="oro">ORO</option><option value="platino">PLATINO</option><option value="diamante">DIAMANTE</option><option value="master">MASTER</option>';
    }
    if (sec1.value == 'plata') {
        sec2.innerHTML = '<option value="plata">PLATA</option><option value="oro">ORO</option><option value="PLATINO">PLATINO</option><option value="diamante">DIAMANTE</option><option value="master">MASTER</option>';
    }
    if (sec1.value == 'oro') {
        sec2.innerHTML = '<option value="oro">ORO</option><option value="platino">PLATINO</option><option value="diamante">DIAMANTE</option><option value="master">MASTER</option>';
    }
    if (sec1.value == 'platino') {
        sec2.innerHTML = '<option value="platino" >PLATINO</option><option value="diamante">DIAMANTE</option><option value="master">MASTER</option>';
    }
    if (sec1.value == 'diamante') {
        sec2.innerHTML = '<option value="diamante">DIAMANTE</option><option value="master">MASTER</option>';
    }
}

function limit2() {
    var lig1 = document.getElementById('Clasificacion');
    var lig2 = document.getElementById('Rangodeseado');
    var sec1 = document.getElementById('eloboost-division-old');
    var sec2 = document.getElementById('eloboost-division-new');

    if (lig1.value == lig2.value) {
        if (sec1.value == '4') {
            sec2.innerHTML = '<option value="3">Division 3</option><option value="2">Division 2</option><option value="1">Division 1</option>';
        }
        if (sec1.value == '3') {
            sec2.innerHTML = '<option value="2">Division 2</option><option value="1">Division 1</option>';
        }
        if (sec1.value == '2') {
            sec2.innerHTML = '<option value="1">Division 1</option>';
        }
        if (sec1.value == '1') {
            sec2.innerHTML = '<option value="1">Division 1</option>';
        }
    } else {

        sec2.innerHTML = '<option value="4">Division 4</option><option value="3">Division 3</option><option value="2">Division 2</option><option value="1">Division 1</option>';

    }
}

function gettier_old() {
    var img = document.getElementById('tier-img-old');
    var league = document.getElementById('Clasificacion').value;
    var division = document.getElementById('eloboost-division-old').value;

    if (league == 'hierro' && division == '4') { img.src = './assets/images/rangos/hierro (4).png'; }
    if (league == 'hierro' && division == '3') { img.src = './assets/images/rangos/hierro (3).png'; }
    if (league == 'hierro' && division == '2') { img.src = './assets/images/rangos/hierro (2).png'; }
    if (league == 'hierro' && division == '1') { img.src = './assets/images/rangos/hierro (1).png'; }

    if (league == 'bronce' && division == '4') { img.src = './assets/images/rangos/bronce (4).png'; }
    if (league == 'bronce' && division == '3') { img.src = './assets/images/rangos/bronce (3).png'; }
    if (league == 'bronce' && division == '2') { img.src = './assets/images/rangos/bronce (2).png'; }
    if (league == 'bronce' && division == '1') { img.src = './assets/images/rangos/bronce (1).png'; }

    if (league == 'plata' && division == '4') { img.src = './assets/images/rangos/plata (4).png'; }
    if (league == 'plata' && division == '3') { img.src = './assets/images/rangos/plata (3).png'; }
    if (league == 'plata' && division == '2') { img.src = './assets/images/rangos/plata (2).png'; }
    if (league == 'plata' && division == '1') { img.src = './assets/images/rangos/plata (1).png'; }

    if (league == 'oro' && division == '4') { img.src = './assets/images/rangos/oro (4).png'; }
    if (league == 'oro' && division == '3') { img.src = './assets/images/rangos/oro (3).png'; }
    if (league == 'oro' && division == '2') { img.src = './assets/images/rangos/oro (2).png'; }
    if (league == 'oro' && division == '1') { img.src = './assets/images/rangos/oro (1).png'; }

    if (league == 'platino' && division == '4') { img.src = './assets/images/rangos/platino (4).png'; }
    if (league == 'platino' && division == '3') { img.src = './assets/images/rangos/platino (3).png'; }
    if (league == 'platino' && division == '2') { img.src = './assets/images/rangos/platino (2).png'; }
    if (league == 'platino' && division == '1') { img.src = './assets/images/rangos/platino (1).png'; }

    if (league == 'diamante' && division == '4') { img.src = './assets/images/rangos/diamante (4).png'; }
    if (league == 'diamante' && division == '3') { img.src = './assets/images/rangos/diamante (3).png'; }
    if (league == 'diamante' && division == '2') { img.src = './assets/images/rangos/diamante (2).png'; }
    if (league == 'diamante' && division == '1') { img.src = './assets/images/rangos/diamante (1).png'; }
}

function gettier_new() {
    var img = document.getElementById('tier-img-new');
    var league = document.getElementById('Rangodeseado').value;
    var division = document.getElementById('eloboost-division-new').value;

    if (league == 'hierro' && division == '4') { img.src = './assets/images/rangos/hierro (4).png'; }
    if (league == 'hierro' && division == '3') { img.src = './assets/images/rangos/hierro (3).png'; }
    if (league == 'hierro' && division == '2') { img.src = './assets/images/rangos/hierro (2).png'; }
    if (league == 'hierro' && division == '1') { img.src = './assets/images/rangos/hierro (1).png'; }

    if (league == 'bronce' && division == '4') { img.src = './assets/images/rangos/bronce (4).png'; }
    if (league == 'bronce' && division == '3') { img.src = './assets/images/rangos/bronce (3).png'; }
    if (league == 'bronce' && division == '2') { img.src = './assets/images/rangos/bronce (2).png'; }
    if (league == 'bronce' && division == '1') { img.src = './assets/images/rangos/bronce (1).png'; }

    if (league == 'plata' && division == '4') { img.src = './assets/images/rangos/plata (4).png'; }
    if (league == 'plata' && division == '3') { img.src = './assets/images/rangos/plata (3).png'; }
    if (league == 'plata' && division == '2') { img.src = './assets/images/rangos/plata (2).png'; }
    if (league == 'plata' && division == '1') { img.src = './assets/images/rangos/plata (1).png'; }

    if (league == 'oro' && division == '4') { img.src = './assets/images/rangos/oro (4).png'; }
    if (league == 'oro' && division == '3') { img.src = './assets/images/rangos/oro (3).png'; }
    if (league == 'oro' && division == '2') { img.src = './assets/images/rangos/oro (2).png'; }
    if (league == 'oro' && division == '1') { img.src = './assets/images/rangos/oro (1).png'; }

    if (league == 'platino' && division == '4') { img.src = './assets/images/rangos/platino (4).png'; }
    if (league == 'platino' && division == '3') { img.src = './assets/images/rangos/platino (3).png'; }
    if (league == 'platino' && division == '2') { img.src = './assets/images/rangos/platino (2).png'; }
    if (league == 'platino' && division == '1') { img.src = './assets/images/rangos/platino (1).png'; }

    if (league == 'diamante' && division == '4') { img.src = './assets/images/rangos/diamante (4).png'; }
    if (league == 'diamante' && division == '3') { img.src = './assets/images/rangos/diamante (3).png'; }
    if (league == 'diamante' && division == '2') { img.src = './assets/images/rangos/diamante (2).png'; }
    if (league == 'diamante' && division == '1') { img.src = './assets/images/rangos/diamante (1).png'; }

    if (league == 'master') { img.src = './assets/images/rangos/master1.png'; }
}

var lig4 = [23, 23, 23, 23, 28, 28, 28, 28, 64, 64, 64, 73, 73, 73, 73, 100, 100, 100, 100, 181, 181, 181, 181, 190, 190];
var lig3 = [21, 21, 21, 21, 26, 26, 26, 26, 44, 44, 44, 50, 50, 50, 50, 68, 68, 68, 68, 124, 124, 124, 124, 130, 130];
var lig2 = [16, 16, 16, 16, 24, 24, 24, 24, 39, 39, 39, 44, 44, 44, 44, 61, 61, 61, 61, 110, 110, 110, 110, 120, 120];
var lig1 = [15, 15, 15, 15, 20, 20, 20, 20, 34, 34, 34, 39, 39, 39, 39, 53, 53, 53, 53, 96, 96, 96, 96, 100, 100];


function lighesap(league) {
    if (league == 'hierro') { return 0; }
    if (league == 'bronce') { return 1; }
    if (league == 'plata') { return 2; }
    if (league == 'oro') { return 3; }
    if (league == 'platino') { return 4; }
    if (league == 'diamante') { return 5; }
    if (league == 'master') { return 6; }
}

function preciosec(fc) {
    if (fc == '1') { return 4; }
    if (fc == '2') { return 3; }
    if (fc == '3') { return 2; }
    if (fc == '4') { return 1; }
}

function hesap() {
    var preciosol = document.getElementById('precio');
    var rango = document.getElementById('eloboost-lp-old').value;
    var ligs1 = document.getElementById('Clasificacion').value;
    var ligs2 = document.getElementById('Rangodeseado').value;
    var lv1 = document.getElementById('eloboost-division-old').value;
    var lv2 = document.getElementById('eloboost-division-new').value;

    var sonuc1 = (lighesap(ligs1) * 4 + preciosec(lv1));
    var sonuc2 = (lighesap(ligs2) * 4 + preciosec(lv2));

    if (rango == '0') {
        var calculo = lig4.slice(sonuc1, sonuc2);
        var toplam = 0;
        calculo.forEach(function(element) {
            toplam += Number(element);
        });
        preciosol.innerHTML =  'Soles: ' + 'S/'+ toplam ;
    }
    if (rango == '1') {
        var calculo = lig3.slice(sonuc1, sonuc2);
        var toplam = 0;
        calculo.forEach(function(element) {
            toplam += Number(element);
        });
        preciosol.innerHTML = 'Soles: ' + 'S/'+ toplam ;
    }
    if (rango == '2') {
        var calculo = lig2.slice(sonuc1, sonuc2);
        var toplam = 0;
        calculo.forEach(function(element) {
            toplam += Number(element);
        });
        preciosol.innerHTML = 'Soles: ' + 'S/'+ toplam ;
    }
    if (rango == '3') {
        var calculo = lig1.slice(sonuc1, sonuc2);
        var toplam = 0;
        calculo.forEach(function(element) {
            toplam += Number(element);
        });
        preciosol.innerHTML = 'Soles: ' + 'S/'+ toplam ;
    }
}