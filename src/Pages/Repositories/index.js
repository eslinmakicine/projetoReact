import * as S from './styled'; //dando variavel e importando o styled.js

export default function Repositories() {
    return (
        <S.Container>
        <S.Title>Repositório</S.Title>  {/* Antes era <h3>Repositório</h3>, agora o S.Title diz respeito ao S que foi a variavel citada pelo import do styled. E title foi o nome do elemento cetado no arquivo styled.js  */}
        <S.List>
            <S.ListItem>Nome Repositório 01 </S.ListItem>
            <S.ListItem>Nome Repositório 02 </S.ListItem>
            <S.ListItem>Nome Repositório 03 </S.ListItem>
            <S.ListItem>Nome Repositório 04 </S.ListItem>
            <S.ListItem>Nome Repositório 05 </S.ListItem>
            <S.ListItem>Nome Repositório 06 </S.ListItem>
            <S.ListItem>Nome Repositório 07 </S.ListItem>
            <S.ListItem>Nome Repositório 08 </S.ListItem>
            <S.ListItem>Nome Repositório 09 </S.ListItem>
            <S.ListItem>Nome Repositório 10 </S.ListItem>
        </S.List>
        </S.Container>
    )
}

//"export default Repositories;" Pode ser dado um export no final ou antes da funcion, conforme está acima na linha 3
