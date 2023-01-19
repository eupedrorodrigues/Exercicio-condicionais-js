//questão 1 

/*
let a = Number (prompt('Digite sua altura: ')), p = Number(prompt('Digite seu peso: '))
let imc = p/(a*a)

if (imc>25){
    alert('Você está acima do peso');
}*/



//questão 2 
/*
let a = Number (prompt('Digite sua altura: ')), p = Number(prompt('Digite o peso: '))
let imc = p/(a*a)

if (imc>25){
    alert('Você está acima do peso');
}
else{
    alert('Você está como o peso ideal!')

}
*/


// questão 3
/*
let n = prompt('Digite um número: ')
 
if (n%2==0){
    alert('O número é par')
}
 
else{
    alert('O número é impar')
}
*/
 


// questão 4
/*
let codigo = Number(prompt("Digite:" +'\n'+ "1- Álcool" +'\n'+ "2 - gasolina" ))
 
if (codigo==1){
 
    alert('Alcool - R$ 3,16')
 
}else if (codigo==2){
 
    alert('gasolina - R$ 4,19')
 
}else{
 
    alert('Número inválido')
 
}
*/
 
 
// questão 5 

/*
let codigo = Number(prompt("Digite:" +'\n'+ "1- Álcool" +'\n'+ "2 - gasolina" ))
let litro = Number(prompt('Quantos litros?'))

if (codigo==1){
 
    document.write('Combustível escolhido: '+'<br>'+ ' Alcool - R$ 3,16: ', (3.16*litro).toFixed(2))
 
}else if (codigo==2){
 
    document.write('Combustível escolhido:'+'<br>'+ 'Gasolina - R$ 4,19: ' , (4.19*litro).toFixed(2))
 
}else{
 
    document.write('Número inválido')
 
}
*/
 
 
// questão 6
 
/*
let anoAtual = new Date(); // Pega todas informações do seu pc, relacionado a data, hora, seg
anoAtual = anoAtual.getFullYear()

let dataNascimento = Number(prompt('Digite seu ano de nascimento: '))
let idade = anoAtual - dataNascimento
 
if (idade>=18){
 
   alert(`
   Você é de maior! 
   Entrada permitida!
   `)
 
}else{
 
    alert(`
    Você é de menor!
    Entrada não permitida.
    `)
 
}
 */ 
//extra (Anotação)

/*
setInterval(()=>{
    let  relogioFeio = new Date()
    document.querySelector('relogio').innerHTML=relogioFeio
}*/


//questão 7
/*
let peso = prompt('Digite 1- Até 5kg  e  2- Mais de 5kg');
let morango  = Number(prompt('Quantos Kilos?'));

if(peso==1){
    document.write('Até 5kg - 2,50'+'<br>', (2.50*morango).toFixed(2));
}
else if(peso==2){
    document.write('Mais de 5kg - 2,50'+'<br>', (2.20*morango).toFixed(2));
}
else{
    document.write('Número inválido');
}*/

//questão 8 

/*
let idade = prompt('Digite c- criança e a- adulto')
let verficacao = Number(prompt('Quantos anos você tem?'))

if(verficacao <= 5){
    alert(`
    Você é: ${idade}\n
    Até 5 anos, pode receber a vacina!
    `)
}
else{

    alert(`
    Você é: ${idade}\n
    Devido a sua idade, você não pode receber a vacina
    `)
}
*/

// questão 9
/*
let p = Number(prompt('Digite o valor: '))
let q = Number(prompt('Digite a quantidade: '))
total = p*q

if(total>100){
    document.write('Seu valor é: ',total*0.95)
}
else{
    document.write('Seu valor é: ', total)
}
*/


// questão 10 
/*
let totalDaEmpresa = 0 
for(let i = 0; i <= 2; i++){

    let nome = prompt('Digite o nome do corretor: ')
    let venda = Number(prompt('Digite o valor da venda: '))

    if(venda > 50000){
        document.write(` 
        Vendedor: ${nome}<br>
        Venda: ${venda}<br>
        Comissão: ${(venda*0.12).toFixed(2)}<br><br>
        `)
    }else if(venda >= 30000 && venda <= 50000){
        document.write(`
        Vendedor: ${nome}<br>
        Venda: ${venda}<br>
        Comissão: ${(venda*0.95).toFixed(2)}<br><br>
        `)
    }else{
        document.write(`
        Vendedor: ${nome}<br>
        Venda: ${venda}<br>
        Comissão: ${(venda*0.07).toFixed(2)}<br><br>
        `)
    }
    totalDaEmpresa += venda
}
document.write(`Total de venda da empresa é de: ${totalDaEmpresa}`)
*/


// Questão 11
/*
let conta = prompt('1- Residencial    2- Comercial   3- Industrial')
let paga = Number(prompt('Digite a quantidade de m³ gasto: '))

document.write('<br>'+'Sua conta é do tipo: ', conta)

if (conta == 1){
    document.write('<br>'+'Sua conta deu: ', paga*0.05 + 5)
}
else if(conta == 2){
    if(paga<=80){
        document.write(`
            Sua conta é do tipo: Comercial<br>
            Sua conta deu: 500,00
        `)
    }
    else{
    document.write('<br>'+'Sua conta deu: ', paga*0.25 + 500)
    }
}
else{
    if(paga<=100){
        document.write(`
            Sua conta é tipo: Industrial <br>
            Sua conta deu: 800,00
        `)
    }
    document.write('<br>'+'Sua conta deu: ', paga*0.04 + 800)
}*/


// Questão 12
/*
let aumento = prompt ('1- 10%  2- 15%   3- 20%')
let valor = Number(prompt('Digite seu salário atual: '))

document.write('Seu salário atual é: ' , valor )

if (aumento == 1){
    document.write('<br>'+'Seu novo salário é:  ', valor*1.1)
}
else if(aumento == 2){
    document.write('<br>'+'Seu novo salário é:  ', valor*1.15)
}
else{
    document.write('<br>'+'Seu novo salário é:  ', valor*0.2)
}*/


// Questão 13

/*
let produtos = prompt('1- Hortifruti  2- Laticíneos   3- Carnes   4- Peixes   5- Aves   6- Ovos')
let preco = Number(prompt('Digite o valor de entrada do produto: '))

document.write('Seu valor inicial é: ', preco +'<br>')

if(produtos==1){
    document.write('Sua margem de lucro é de: '+ (preco*0.8).toFixed(2))
}
else if(produtos==2){
    document.write('Sua margem de lucro é de: '+ (preco*0.8).toFixed(2))
}
else if(produtos==3){
    document.write('Sua margem de lucro é de: '+ (preco*1).toFixed(2))
}
else if(produtos==4){
    document.write('Sua margem de lucro é de: '+ (preco*1).toFixed(2))
}
else if (produtos==5){
    document.write('Sua margem de lucro é de: '+ (preco*0.9).toFixed(2))
}
else{
    document.write('Sua margem de lucro é de: '+ (preco*0.9).toFixed(2))
}
    */

// Questão 14
/*
let codigo = prompt('1- Álcool   2- Gasolina')
let valor = Number(prompt('Digite o valor: '))

if(codigo==1){
    if(valor<=20){
        document.write('O preço por litro deu: ', (valor*3.16).toFixed(2))
    }
    else{
        document.write('O preço por litro deu: ', (valor*3.14).toFixed(2))
    }
}
else{
    if(valor<=30){
        document.write('O preço por litro deu: ', (valor*4.20).toFixed(2))
    }
    else{
        document.write('O preço por litro deu: ', (valor*4.19).toFixed(2))
    }
}*/