class Conta {
    constructor() {
        this.nome;
        this.banco;
        this.numConta;
        this.saldo;
    }
    setNome(value) {
        this.nome = value;
    }
    setBanco(value) {
        this.banco = value;
    }
    setNumConta(value) {
        this.numConta = value;
    }
    setSaldo(value) {
        this.saldo = value;
    }
    getNome() {
        return this.nome;
    }
    getBanco() {
        return this.banco;
    }
    getNumConta() {
        return this.numConta;
    }
    getSaldo() {
        return this.saldo;
    }
}

class Corrente extends Conta {
    constructor() {
        super();
        this.saldoEspecial;
    }
    setSaldoEspecial(value) {
        this.saldoEspecial = value;
    }
    getSaldoEspecial() {
        return this.saldoEspecial;
    }
}

class Poupanca extends Conta {
    constructor() {
        super();
        this.juros;
        this.dataVencimento;
    }
    setJuros(value) {
        this.juros = value;
    }
    getJuros() {
        return this.juros;
    }
    setDataVencimento(value) {
        this.dataVencimento = value;
    }
    getDataVencimento() {
        return this.dataVencimento;
    }
}

function fOperaContas() {

    event.preventDefault();

    var objCorrente = new Corrente();
    let nC = document.getElementById("nome").value;
    let bC = document.getElementById("banco").value;
    let nCC = document.getElementById("numConta").value;
    let sC = document.getElementById("saldo").value;
    let seC = document.getElementById("saldoEspec").value;

    objCorrente.setNome(nC);
    objCorrente.setBanco(bC);
    objCorrente.setNumConta(nCC);
    objCorrente.setSaldo(sC);
    objCorrente.setSaldoEspecial(seC);


    var objPoupanca = new Poupanca();
    let nP = document.getElementById("nomeP").value;
    let bP = document.getElementById("bancoP").value;
    let ncP = document.getElementById("numContaP").value;
    let sP = document.getElementById("saldoP").value;
    let jP = document.getElementById("juros").value;
    let dvP = document.getElementById("dataVenc").value;

    objPoupanca.setNome(nP);
    objPoupanca.setBanco(bP);
    objPoupanca.setNumConta(ncP);
    objPoupanca.setSaldo(sP);
    objPoupanca.setJuros(jP);
    objPoupanca.setDataVencimento(dvP);

    document.getElementById("nomeC").innerHTML = 'Nome do correntista: ' + objCorrente.getNome();
    document.getElementById("bancoC").innerHTML = 'Banco do correntista: ' + objCorrente.getBanco();
    document.getElementById("numContaC").innerHTML = 'Número da conta: ' + objCorrente.getNumConta();
    document.getElementById("saldoC").innerHTML = 'Saldo da conta: R$ ' + parseFloat(objCorrente.getSaldo()).toFixed(2);
    document.getElementById("saldoEspecC").innerHTML = 'Saldo especial: R$ ' + parseFloat(objCorrente.getSaldoEspecial()).toFixed(2);

    document.getElementById("nomeCP").innerHTML = 'Nome do cliente: ' + objPoupanca.getNome();
    document.getElementById("bancoCP").innerHTML = 'Banco do cliente: ' + objPoupanca.getBanco();
    document.getElementById("numContaCP").innerHTML = 'Número da conta: ' + objPoupanca.getNumConta();
    document.getElementById("saldoCP").innerHTML = 'Saldo da conta: R$ ' + parseFloat(objPoupanca.getSaldo()).toFixed(2);
    document.getElementById("jurosCP").innerHTML = 'Juros: ' + objPoupanca.getJuros() + '%';
    document.getElementById("dataVencCP").innerHTML = 'Data de vencimento: ' + objPoupanca.getDataVencimento();

}

function fLimpar() {
    document.getElementById("nomeC").innerHTML = '';
    document.getElementById("bancoC").innerHTML = '';
    document.getElementById("numContaC").innerHTML = '';
    document.getElementById("saldoC").innerHTML = '';
    document.getElementById("saldoEspecC").innerHTML = '';

    document.getElementById("nomeCP").innerHTML = '';
    document.getElementById("bancoCP").innerHTML = '';
    document.getElementById("numContaCP").innerHTML = '';
    document.getElementById("saldoCP").innerHTML = '';
    document.getElementById("jurosCP").innerHTML = '';
    document.getElementById("dataVencCP").innerHTML = '';
}