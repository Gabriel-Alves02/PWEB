var escolha;
escolha = prompt("Escolha uma opção: \n1 - 💎 Pedra \n2 - 📃 Papel \n3 - ✂ Tesoura");
var escolhaC;
escolhaC = Math.random(0, 1);

if((escolha != "1") && (escolha != "2") && (escolha != "3")) {
    escolha = prompt("Opção inválida! \n\nEscolha uma opção válida: \n1 - 💎 Pedra \n2 - 📃 Papel \
                     \n3 - ✂ Tesoura");
}

if(escolhaC <= 0.33) {
    escolhaC = 1;
}
else {
    if(escolhaC <= 0.66) {
        escolhaC = 2;
    }
    else {
            escolhaC = 3;
    }
}

if((escolhaC == 1) && (escolha == 1)) {
    alert("Você escolheu pedra. 💎 \nO computador escolheu pedra. 💎 \n\nEmpate!");
}
else {
    if((escolhaC == 2) && (escolha == 2)) {
        alert("Você escolheu papel. 📃 \nO computador escolheu papel. 📃 \n\nEmpate!");
    }
    else {
        if((escolhaC == 3) && (escolha == 3)) {
            alert("Você escolheu tesoura. ✂ \nO computador escolheu tesoura. ✂ \n\nEmpate!");
        }
        else {
            if((escolhaC == 1) && (escolha == 2)) {
                alert("Você escolheu papel. 📃 \nO computador escolheu pedra. 💎 \n\nPapel cobre pedra! \
                      \n\nVocê ganhou!");
            }
            else {
                if((escolhaC == 1) && (escolha == 3)) {
                    alert("Você escolheu tesoura. ✂ \nO computador escolheu pedra. 💎 \
                          \n\nPedra quebra tesoura! \n\nO computador ganhou!");
                }
                else {
                    if((escolhaC == 2) && (escolha == 1)) {
                        alert("Você escolheu pedra. 💎 \nO computador escolheu papel. 📃 \
                              \n\nPapel cobre pedra! \n\nO computador ganhou!");
                    }
                    else {
                        if((escolhaC == 2) && (escolha == 3)) {
                            alert("Você escolheu tesoura. ✂ \nO computador escolheu papel. 📃 \
                                  \n\nTesoura corta papel! \n\nVocê ganhou!" );
                        }
                        else {
                            if((escolhaC == 3) && (escolha == 1)) {
                                alert("Você escolheu pedra. 💎 \nO computador escolheu tesoura. ✂ \
                                      \n\nPedra quebra tesoura! \n\nVocê ganhou!");
                            }
                            else {
                                if((escolhaC == 3) && (escolha == 2)) {
                                    alert("Você escolheu papel. 📃 \no computador escolheu tesoura. ✂ \
                                          \n\nTesoura corta papel! \n\nO computador ganhou!");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}