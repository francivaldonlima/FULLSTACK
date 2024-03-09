let carro = {
    marca: "fiat",
    modelo: "uno",
    cor: "vermelho",
    ano: 2010,
    preco: 20000,
    dono: "francivaldo",
    historio:{
        trocaDeOleo: "10/10/2020",
        revisao: "10/10/2020",
        revisalcuntidedes: 4,
        licenciamento: "10/10/2020",
        ipva: "10/10/2020",
        multas: "10/10/2020"        
    }
   
}

console.log(`Meu nome é ${carro.dono} e eu sou o proprietario de um ${ carro.modelo}
 do ano de ${carro.ano} onde foram feitas ${carro.revisalcuntidedes} e custa do peços ${carro.preco}`);

 let texto = (`Meu nome é ${carro.dono} e eu sou o proprietario de um ${ carro.modelo}
 do ano de ${carro.ano} onde foram feitas ${carro.revisalcuntidedes} e custa do peços ${carro.preco}`);


 // Seleciona o elemento no DOM
var $testo = document.querySelector('.testo'),

    // Seleciona o primeiro Node filho do elemento
    firstChild = $testo.firstChild,

    // Cria uma string de texto
   // HTMLNovo = document.createTextNode('Inserido usando DOM API'),
    HTMLNovo = document.createTextNode(texto),

    // Cria um Node de um BR
    HTMLBr = document.createElement('br');

// Insere o texto antes do primeiro Node do elemento
$testo.insertBefore(HTMLNovo, firstChild);

// Insere o BR, antes do ultimo node do elemento
$testo.insertBefore(HTMLBr, $testo.lastChild);


// console.log(carro);
// console.log(carro.marca);
// console.log(carro.modelo);
// console.log(carro.cor);
// console.log(carro.ano);
// console.log(carro.preco);
// console.log(carro.dono);
// console.log(carro.historio);
// console.log(carro.historio.trocaDeOleo);
// console.log(carro.historio.revisao);
// console.log(carro.historio.licenciamento);
// console.log(carro.historio.ipva);
// console.log(carro.historio.multas);
// console.log(carro.historio.multas);
// console.log(carro.historio.multas);
// console.log(carro.historio.multas);



