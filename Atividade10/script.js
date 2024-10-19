function fCalcIMC() {
    let imc = 0;
    let pes = document.getElementById("peso").value;
    let alt = document.getElementById("altura").value;

    imc = pes/(alt * alt);

    if(imc < 18.5) {
        classificacao = "Magreza";
        grau = "0";
    }
    else {
        if(imc <= 24.9) {
            classificacao = "Normal";
            grau = "0";
        }
        else {
            if(imc <= 29.9) {
                classificacao = "Sobrepeso";
                grau = "I";
            }
            else {
                if(imc <= 39.9) {
                    classificacao = "Obesidade";
                    grau = "II";
                }
                else {
                    classificacao = "Obesidade grave";
                    grau = "III";
                }
            }
        }
    }

    document.getElementById("resultado").innerHTML = "IMC = " + imc.toFixed(2) + " | Classificação = " + classificacao + " | Obesidade (grau) = " + grau;

}