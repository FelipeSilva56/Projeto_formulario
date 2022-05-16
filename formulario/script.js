const form = document.querySelector('#form')

const usuarios = []

function recebeDados(e){
    e.preventDefault();

    const nome = form.querySelector('#nome1').value;
    const sobrenome = form.querySelector('#nome').value;
    const email = form.querySelector('#email1').value;
    const vaga = form.querySelector('#vaga').value;
    const data = form.querySelector('#data_inicio').value;
    const situ = form.querySelector('input[name="situ"]:checked').value;
    const descricao = form.querySelector('#perfil1').value;
    
    usuarios.push({
        nome:nome,
        sobrenome:sobrenome,
        email:email,
        vaga:vaga,
        data:data,
        situ:situ,
        descricao:descricao,
    })
    console.log(usuarios)

    function criaUsu(){

        let {nome, sobrenome, email, vaga, data, situ, descricao} = usuarios[0]

        //console.log(nome, sobrenome, email, vaga, data, situ, descricao)

    }
    
    const criar = criaUsu();
    
    function criaTag(){

        let tagh1 = document.createElement('h1');
        tagh1.innerHTML = nome;
        let tagh12 = document.createElement('h1');
        tagh12.innerHTML = sobrenome;
        let tagh13 = document.createElement('p');
        tagh13.innerHTML = email;
        let tagh14 = document.createElement('p');
        tagh14.innerHTML = vaga;
        let tagh15 = document.createElement('p');
        tagh15.innerHTML = descricao;
        const cartaoUsu = document.createElement('div')
        cartaoUsu.classList.add('cartaoUsu')
        cartaoUsu.innerHTML = `<h1>Usuário cadastrado</h1>`
        cartaoUsu.appendChild(tagh1);
        cartaoUsu.appendChild(tagh12);
        cartaoUsu.appendChild(tagh13);
        cartaoUsu.appendChild(tagh14);
        cartaoUsu.appendChild(tagh15);
        let container = document.querySelector('#container');
        container.appendChild(cartaoUsu);
        
        tagh1.classList.add('h1edit');
        tagh12.classList.add('h1edit');
        tagh13.classList.add('pEmail');
        tagh14.classList.add('pVaga');
        tagh15.classList.add('pDescri');
    }

    
    criaTag()

}

form.addEventListener('submit', recebeDados);

