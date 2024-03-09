
let nome = "Danilo";

let numero = 1;

let boleano = true;

let usuarioNetflix = {
    nome: "Matheus", 
    turma: "b", 
    idade: 40,
    pagou: false,
    historico: {
        experiencias: "html",
        estadoCivil: "Solteiro"
    }
}


let listaDeUsuarios = [
    {
        nome: "Jose", 
        turma: "b", 
        idade: 35,
        pagou: false,
        historico: {
            experiencias: "html",
            estadoCivil: "Solteiro"
        }
    },
    {
        nome: "Matheus", 
        turma: "b", 
        idade: 40,
        pagou: false,
        historico: {
            experiencias: "html",
            estadoCivil: "Solteiro"
        }
    },
    {
        nome: "Raimundo", 
        turma: "b", 
        idade: 14,
        pagou: false,
        historico: {
            experiencias: "html",
            estadoCivil: "Casado"
        }
    }
]



console.log(`Bem vindo, ${listaDeUsuarios[2].nome}, você tem ${listaDeUsuarios[2].idade} anos de idade e o seu estado civil é ${listaDeUsuarios[2].historico.estadoCivil}`);






