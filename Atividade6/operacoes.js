var num1;
var num2;

num1 = prompt("Digite o primeiro número: ");
num2 = prompt("Digite o segundo número: ");

alert(`Soma dos dois números: ${parseFloat(num1).toFixed(2)} + ${parseFloat(num2).toFixed(2)} = ` 
+ (parseFloat(num1) + parseFloat(num2)).toFixed(2) + `\nSubtração do primeiro número pelo segundo: \
${parseFloat(num1).toFixed(2)} - ${parseFloat(num2).toFixed(2)} = ` + 
(parseFloat(num1) - parseFloat(num2)).toFixed(2) + `\nProduto dos dois números: \
${parseFloat(num1).toFixed(2)} * ${parseFloat(num2).toFixed(2)} = ` 
+ (parseFloat(num1) * parseFloat(num2)).toFixed(2) +`\nDivisão do primeiro pelo segundo número: \
${parseFloat(num1).toFixed(2)} / ${parseFloat(num2).toFixed(2)} = ` 
+ (parseFloat(num1)/parseFloat(num2)).toFixed(2) +`\nResto da divisão do primeiro pelo segundo número: \
${parseFloat(num1).toFixed(2)} % ${parseFloat(num2).toFixed(2)} = ` 
+ (parseFloat(num1)%parseFloat(num2)).toFixed(2));