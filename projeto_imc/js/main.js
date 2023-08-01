
const form = document.querySelector ('#form');
form.addEventListener ('submit', function (e){
    //Previne o carregamento da página 
e.preventDefault ();
console.log("Evento previnido");

const inputPeso = e.target.querySelector ('#peso');
const inputAltura = e.target.querySelector('#altura');

const peso = Number (inputPeso.value);
const altura = Number (inputAltura.value);

if (!peso){
    inserirResultado ('peso inválido, false');
    return;
}

if (!altura){
    inserirResultado ('altura inválida, false');
    return;
}

const imc = obterImc (peso, altura);
const classificacaoImc = classificacao (imc);

const msgResultado = `Seu IMC é ${imc}, classificado como: ${classificacaoImc}`
inserirResultado (msgResultado,true);

});

function classificacao (imc){
 
    const classificacao = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau I', 'obesidade grau II', 'obesidade grau III']
if (imc >= 40 ) return classificacao [5] ;
if (imc >= 35 ) return classificacao [4] ;
if (imc >= 30 ) return classificacao [3] ;
if (imc >= 25 ) return classificacao [2] ;
if (imc >= 20 ) return classificacao [1] ;
if (imc < 18.5 ) return classificacao [0] ;

}   

function obterImc (x,y){
    return (x/y**2).toFixed (2);

}

function criarSpan (){
const span =  document.createElement ('span');
return span; 


}

function inserirResultado(msg, valido) {
    const resultado = document.querySelector('#resultado');
   resultado.innerHTML = '';

    const span = criarSpan();
    if (valido == true) {
        document.getElementById('resultado').style.background = '#198754';
    }
    else {
        document.getElementById('resultado').style.background = '#dc3545';
    }

    span.innerHTML = msg;

    resultado.appendChild(span);

}

