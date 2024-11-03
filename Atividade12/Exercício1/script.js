function Retangulo(x, y) {
    this.x = x;
    this.y = y;
    this.calcArea = function() {
        return "Área = " + x*y;
    }
}

function fCalcArea() {
    event.preventDefault();

    let x = document.getElementById("base").value;
    let y = document.getElementById("altura").value;

    objRet = new Retangulo(x, y);
    document.getElementById("resultado").innerHTML = objRet.calcArea();
}

function fLimpar() {
    document.getElementById("resultado").innerHTML = '';
}