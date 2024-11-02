function fExec() {
    event.preventDefault();

    var radio1 = document.getElementById("maiusculas");
    var radio2 = document.getElementById("minusculas");
    var texto = document.getElementById("inputTexto").value;

    if(radio1.checked) {
        texto = texto.toUpperCase();
        document.getElementById("result").innerHTML = texto;
    }
    else{
        if(radio2.checked) {
            texto = texto. toLowerCase();
            document.getElementById("result").innerHTML = texto;
        }
        else {
            alert("Nenhuma opção selecionada!");
        }
    }
}