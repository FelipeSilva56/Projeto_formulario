const form = document.querySelector('#form')

const usuarios = []

function recebeDados(e){
    e.preventDefault();

    const nome = form.querySelector('#nome1');
    const sobrenome = form.querySelector('#nome');
    const email = form.querySelector('#email1');
    const vaga = form.querySelector('#vaga');
    const data = form.querySelector('#data_inicio');
    const situ = form.querySelector('input[name="situ"]:checked');

    usuarios.push({
        nome:nome.value,
        sobrenome:sobrenome.value,
        email:email.value,
        vaga:vaga.value,
        data:data.value,
        situ:situ.value,
    })
    console.log(usuarios)
}

form.addEventListener('submit', recebeDados);