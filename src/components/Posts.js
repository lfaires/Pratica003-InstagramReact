const users = [
    {nome: "meowed", conteudo: "gato-telefone", outroNome: "respondeai", qtd: "101.523"},
    {nome: "barked", conteudo: "dog", outroNome: "adorable_animals", qtd: "99.159"}]

export default function Posts() {
    return (
    <div class="posts">
        {users.map( user => <Post nome={user.nome} conteudo={user.conteudo} outros={user.outroNome} qtd={user.qtd} />)}
    </div>
    )
}

function Post(props) {
    return (
    <div class="post">
        <Topo nome={props.nome} />
        <Conteudo conteudo={props.conteudo}/>
        <Fundo outros={props.outros} qtd={props.qtd}/>
    </div>
    )
}

function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={"assets/img/" + props.nome + ".svg"}/>
                {props.nome}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Conteudo(props) {
    return (
        <div class="conteudo">
            <img src={"assets/img/" + props.conteudo + ".svg"} />
        </div>
    )
}

function Fundo(props) {
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={"assets/img/"+ props.outros +".svg"} />
                <div class="texto">
                    Curtido por <strong>{props.outros}</strong> e <strong>outras {props.qtd} pessoas</strong>
                </div>
            </div>
        </div>
    )
}