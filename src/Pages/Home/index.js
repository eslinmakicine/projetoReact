
import React, {useState} from 'react';
import axios from 'axios';

function App(props) { //dessa forma ele pega a propriedade title lá do arquivo index.js
  const [usuario, setUsuario] = useState(''); //referente a estado, estudar mais sobre

function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
}  

  return (
    <> {/* fragment (<> </>) podem substituior div, pois div pode dar erro quando nao é a ideia ter uma div. 
           Pois o react não permite ter vários elementos "soltos". Dessa forma, pra nao especificar qual tag é, 
           é utilizado esse fragment 
        <h1>{props.title}, {props.user}</h1> */} {/* aqui é colocado as props que foram citadas no index.js */}
        <input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} /> {/* o "e =>" significa o "evento". Utiliza ele pq pegar valores. O set altera o valor toda vez que o input é alterado */}
        <button type="button" onClick={handlePesquisa}>Pesquisar</button> {/* o botão está chamando a função "handlePesquisa" quando é feito o click */}
    </>
);
}

export default App;

// [usuario, setUsuario ] //useState


