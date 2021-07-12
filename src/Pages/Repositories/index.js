import * as S from './styled'; //dando variavel e importando o styled.js
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
    const [repositories, setRepositories] = useState([]); //define o estado. Pegando o valor do estado, e a função que vai setar o valor do estado. Inicialmente será um array vazio
    const history = useHistory();

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName'); //ele vai armazenas em repositoriesName o valor que está no localStorage
        if (repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName); //transforma num objeto
            console.log(repositoriesName);
            setRepositories(repositoriesName); //vai setar o setRepositories passando o repositoriesName
            localStorage.clear();
        } else {
            history.push('/'); //ao pesquisar o repositorio, é enviado para a page /home
        }
        
 
    }, []); //se nao passar nenhum argumento em [], ele vai monitorar quando o componente for montado(renderizado)

    return (
        <S.Container>
        <S.Title>Repositório</S.Title>  {/* Antes era <h3>Repositório</h3>, agora o S.Title diz respeito ao S que foi a variavel citada pelo import do styled. E title foi o nome do elemento cetado no arquivo styled.js  */}
        
        <S.List>
           { repositories.map(repository => {
               return (
                   <S.ListItem> Repositório: {repository} </S.ListItem>
               ) 
           })}
        </S.List>
        <S.LinkHome to="/">Voltar</S.LinkHome> {/* Dessa forma ele não vai dar o refresh na pagina. Se utilizasse a ancora do html daria refresh, e esse não é o conceito de SPA  */} 
        </S.Container>
    )
}

//"export default Repositories;" Pode ser dado um export no final ou antes da funcion, conforme está acima na linha 3
