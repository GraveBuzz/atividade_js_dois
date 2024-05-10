const form = document.getElementById('agenda-input');
const nomes = [];
const numeros = []; 


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha()
    atualizaTabela()
})

function adicionarLinha(){
    const inputNome = document.getElementById('inp-nome');
    const inputNumero = document.getElementById('inp-numero');

    if (nomes.includes(inputNome.value)) {
        alert (`O nome ${inputNome} já está cadastrado!`)
    } else {
        nomes.push(inputNome.value);
        numeros.push(parseFloat(inputNumero.value));
        
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `<tr>`;

        linhas += linha;
    }

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}