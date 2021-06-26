

function botao(){
    document.getElementById("obrigado").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("obrigado"));
    //alert("Obrigado por clicar!")
}

function redirecionar(){
    //window.open("https://www.google.com/");
    window.location.href = "https://www.google.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML  = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML  = "passa o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "passa o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}

/* function soma(n1,n2){
    return n1+n2;
} */
//alert(soma(5,10));


/* var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));

function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
} */


/*
function setReplace(Frase, nome, novo_nome){
    return Frase.replace(nome, novo_nome)
}


alert(setReplace("Vai japão","japão","Brasil"));
*/

/*
var nome = "Thales Isaias";
var n1 = 5;
var n2 = 3;
var frase = "japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos.");
//alert(idade+idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("japão","Brasil"));
console.log(frase.toLocaleUpperCase());
console.log(frase.toLocaleLowerCase());
//alert(frase.replace("japão","Brasil"));
*/


//var lista = ["mãe", "floresta", "avó"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.length);
//console.log(lista.join("|"));


/*
var fruta ={nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var idade = prompt("Qual a sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var count = 0;
while( count < 5){
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var count;
for(count = 0;count <=5;count++){
    alert(count);
}
*/
/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
*/