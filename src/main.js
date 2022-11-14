import Swal from 'sweetalert2';
import './style.css';

const botao = document.querySelector('button');
// o botão deve gerar um número aleatório de 1 até 750

const image = document.querySelector('img');
const nome = document.querySelector('p');

function chamaApi(idHeroi){
  return fetch(`https://www.superheroapi.com/api.php/5973035029381967/${idHeroi}`) // aparentemente a documentação da AP está errada, só funcionando com o www e o .php
  .then((response) => response.json())
  .then(({ image, name }) => ({ heroi: name, foto: image })) // image já é um objeto, cujo chave é url
  // .catch((error) => console.log('ID inexistente: tente de novo!', error.message)) // aqui ele não consegue captar o erro
}

function apresentaHeroi({ heroi, foto }) {
  console.log(heroi, foto)
  nome.innerText = heroi;
  image.src = `${foto.url}`;
  console.log(image)
}

function geraHeroi() {
  // const idHeroi = Math.floor((Math.random() * 750)) +1 // se quiser gerar um número entre 1 e 750
 
  const idHeroi = Math.floor((Math.random() * 800)) // quero que possa dar um erro

  chamaApi(idHeroi)
    .then(apresentaHeroi) // é que se eu tivesse passando .then({ heroi: name, foto: image }) => apresentaHeroi({ heroi: name, foto: image }))
    .catch(() => Swal.fire('ID inexistente: tente de novo!'))
}

botao.addEventListener('click', geraHeroi);