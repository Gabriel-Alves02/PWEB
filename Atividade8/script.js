var totM = 0;
var totH = 0;
var totOtm = 0;
var totBom = 0;
var totPes = 0;
var porcentBom = 0;
var porcentOtm = 0;
var cont = 0;
var maisVelho = 0;
var maisNovo = 0;
var key = 0;
var mediaIdade = 0;
var somaIdade = 0;

var opM;
var opF;
var opOtm;
var opBom;
var opReg;
var opPes;
var idade;

function f() {
    let opM = document.getElementById("masculino");
    let opF = document.getElementById("feminino");
    let opOtm = document.getElementById("otimo");
    let opBom = document.getElementById("bom");
    let opReg = document.getElementById("regular");
    let opPes = docuemnt.getElementById("pessimo");
    let idade = document.getElementById("idade").value;

    cont += 1;

    if(idade > maisVelho) {
        maisVelho = idade;
    }
    else {
        if(key == 0) {
            maisNovo = idade;
            key = 1;
        }
        else {
            if(idade < maisNovo) {
                maisNovo = idade;
            }
        }
    }

    if(opM.checked) {
        totH += 1;
    }
    else {
        totM += 1;
    }

    if(opOtm.checked) {
        totOtm += 1;
    }
    else {
        if(opBom.checked) {
            totBom += 1;
        }
        else {
            if(opPes.checked) {
                totPes += 1;
            }
        }
    }

    somaIdade += idade;

    mediaIdade = somaIdade / cont;

    porcentBom = (totBom * 100) / cont;
    porcentOtm = (totOtm * 100) / cont;

}

function enviar() {
    document.getElementById("mv").innerHTML = "Mais velho: " + maisVelho;
    document.getElementById("mn").innerHTML = "Mais novo: " + maisNovo;
    document.getElementById("tp").innerHTML = "Total péssimo: " + totPes;
    document.getElementById("po").innerHTML = "Porcentagem bom: " + porcentBom;
    document.getElementById("po").innerHTML = "Porcentagem ótimo: " + porcentOtm;
    document.getElementById("nm").innerHTML = "Total de mulheres: " + totM;
    document.getElementById("nh").innerHTML = "Total de homens: " + totH;
}