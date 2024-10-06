
function fMaior() {
    let maior = 0;
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let n3 = document.getElementById("num3").value;

    if(n1 > n2 && n1 > n3) {
        maior = n1;
    }
    else {
        if(n2 > n1 && n2 > n3) {
            maior = n2;
        }
        else {
             if(n3 > n1 && n3 > n2) {
                maior = n3;
             }
             else {
                if(n1 == n2 && n1 == n3 && n2 == n3) {
                    maior = n1;
                }
             }
        }
    }

    document.getElementById("maior").innerHTML = "Maior número: " + maior;
}

function fOrdena() {
    let no1 = document.getElementById("numOrd1").value;
    let no2 = document.getElementById("numOrd2").value;
    let no3 = docuemnt.getElementById("numOrd3").value;
    let troca;
    let cont;
    let aux;
    let mat = [no1, no2, no3];

    do {
        troca = false;
        cont = 0;
        alert("processando");
        while(cont < 3) {
            if(mat[cont] > mat[cont + 1]) {
                aux = mat[cont];
                mat[cont] = mat[cont + 1];
                mat[cont + 1] = aux;
                troca = true;
            }
            cont += 1;
        }
    } while(troca === true);


    no1 = mat[0];
    no2 = mat[1];
    no3 = mat[2];

    document.getElementById("ordenados").innerHTML = "Resultado: " + no1 + " " + no2 + " " + no3;
}

function fPalindromo() {
    let palavra = document.getElementById("str").value;

    let novaStr = palavra.split('').reverse().join('');
    
    if(palavra.toUpperCase() === novaStr.toUpperCase()) {
        document.getElementById("palindromo").innerHTML = "A palavra informada é um palíndromo";
    }
    else {
        document.getElementById("palindromo").innerHTML = "A palavra informada não é um palíndromo";
    }
}

function fTriangulo() {
    let lad1 = document.getElementById("lado1").value;
    let lad2 = document.getElementById("lado2").value;
    let lad3 = document.getElementById("lado3").value;

    if((Math.abs(lad1 - lad2) < lad3 && lad1 + lad2 > lad3) || (Math.abs(lad1 - lad3) < lad2 && lad1 + lad3 > lad2) || (Math.abs(lad2 - lad3) < lad1 && lad2 + lad3 > lad1)) {

        if(lad1 == lad2 && lad1 == lad3 && lad2 == lad3) {
            document.getElementById("triangulo").innerHTML = "Triângulo equilátero";
        }
        else {
             if(lad1 == lad2 || lad1 == lad3 || lad2 == lad3) {
                document.getElementById("triangulo").innerHTML = "Triângulo isósceles";
             }
             else {
                if(lad1 != lad2 && lad1 != lad3 && lad2 != lad3) {
                    document.getElementById("triangulo").innerHTML = "Triângulo escaleno";
                }
             }
        }
    }
    else {
        document.getElementById("triangulo").innerHTML = "Não é um triângulo";
    }
}