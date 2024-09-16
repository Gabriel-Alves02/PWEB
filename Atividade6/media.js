var nome;
nome = prompt("Digite o nome do aluno: ");
nota1 = prompt("Digite a primeira nota: ");
nota2 = prompt("Digite a segunda nota: ");
nota3 = prompt("Digite a terceira nota: ");
nota4 = prompt("Digite a quarta nota:  ");

var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4))/4;

alert("Nome do aluno: " + nome + "\n" + "Média: " + media.toFixed(2));