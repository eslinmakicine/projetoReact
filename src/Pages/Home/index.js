import * as S from './styled'; //dando variavel e importando o styled.js

import React, {useState} from 'react';
import axios from 'axios';

function App(props) { //dessa forma ele pega a propriedade title lá do arquivo index.js
  const [usuario, setUsuario] = useState(''); //referente a estado, estudar mais sobre

function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data; //pega somente uma parte do response
      const repositoriesName = []; //cria um array para posteriormente salvar o nome dos repositorios
      repositories.map((repository) => { //mapear o response.data, e o "repository" é o resultado desse mapeamento
        repositoriesName.push(repository.name); //push vai popular o array somente com os repository.name
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName)); //vai salvar os repositoriesName no armazenamento do navegador. No navegador, em console > application > Local Storage > estará a variável repositoriesName com os valores armazenados
    });
}  

  return (
    <S.Container> {/* fragment (<> </>) podem substituior div, pois div pode dar erro quando nao é a ideia ter uma div. 
           Pois o react não permite ter vários elementos "soltos". Dessa forma, pra nao especificar qual tag é, 
           é utilizado esse fragment 
        <h1>{props.title}, {props.user}</h1> */} {/* aqui é colocado as props que foram citadas no index.js */}
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} /> {/* o "e =>" significa o "evento". Utiliza ele pq pegar valores. O set altera o valor toda vez que o input é alterado */}
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button> {/* o botão está chamando a função "handlePesquisa" quando é feito o click */}
    </S.Container>
);
}

export default App;

// [usuario, setUsuario ] //useState


