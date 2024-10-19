var objFuncionario1 = new Object();
objFuncionario1.matricula = prompt('Digite a matrícula do(a) funcionário(a): ');
objFuncionario1.nome = prompt('Digite o nome do(a) funcionário(a): ');
objFuncionario1.funcao = prompt('Digite a função do(a) funcionário(a): ');

alert(`Matrícula: ${objFuncionario1.matricula} \nNome: ${objFuncionario1.nome} \nFunção: ${objFuncionario1.funcao}`);

class Funcionario {
    construtor() {
        this.matricula;
        this.nome;
        this.funcao;
    }
    setMatricula(value) {
        this.matricula = value;
    }
    getMatricula() {
        return this.matricula;
    }
    setNome(value) {
        this.nome = value;
    }
    getNome() {
        return this.nome;
    }
    setFuncao(value) {
        this.funcao = value;
    }
    getFuncao() {
        return this.funcao;
    }
}

var objFuncionario = new Funcionario();

objFuncionario.setMatricula(prompt("Digite a matrícula do(a) funcionário(a): "));
objFuncionario.setNome(prompt("Digite o nome do(a) funcionário(a): "));
objFuncionario.setFuncao(prompt("Digite a função do(a) funcionário(a): "));

alert(`Matrícula: ${objFuncionario.getMatricula()} \nNome: ${objFuncionario.getNome()} \nFunção: ${objFuncionario.getFuncao()}`);

objFunc2 = {};
objFunc2['matricula'] = prompt('Digite a matrícula do(a) funcionário(a): ');
objFunc2['nome'] = prompt('Digite o nome do(a) funcionário(a): ');
objFunc2['funcao'] = prompt('Digite a função do(a) funcionário(a): ');

alert(`Matrícula: ${objFunc2.matricula} \nNome: ${objFunc2.nome} \nFunção: ${objFunc2.funcao}`);