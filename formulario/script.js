const form = document.querySelector('#form')

const usuarios = []

function recebeDados(e){
    e.preventDefault();

    const nome = form.querySelector('#nome1')
    const sobrenome = form.querySelector('#nome')

    usuarios.push({
        nome:nome.value,
        sobrenome:sobrenome.value,
    })
    console.log(usuarios)
}

form.addEventListener('submit', recebeDados);